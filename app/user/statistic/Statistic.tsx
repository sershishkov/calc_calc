'use client';
import { StatisticExerciseInterface } from '@/interfaces/refdata';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Statistic({ my_data }: { my_data: any }) {
  const totalTasksOk = my_data.totalTasksOk;
  const totalTasksError = my_data.totalTasksError;
  const totalExerciseTime = my_data.totalExerciseTime;
  const totalTasksCount = my_data.totalTasksCount;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const StatisticDesktop = () => (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Урок</TableCell>
            <TableCell>Правильные</TableCell>
            <TableCell>Ошибка</TableCell>
            <TableCell>Время на упражнение</TableCell>
            <TableCell>Мин время на задачу</TableCell>
            <TableCell>Всего задач в упражнении:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {my_data.items &&
            my_data.items.length > 0 &&
            my_data.items.map((row: StatisticExerciseInterface) => (
              <TableRow key={row.exerciseName}>
                <TableCell align='left'>{row.exerciseName}</TableCell>
                <TableCell align='center'>{row.tasksOk}</TableCell>
                <TableCell align='center'>{row.tasksError}</TableCell>
                <TableCell align='center'>{row.exerciseTime}</TableCell>
                <TableCell align='center'>
                  {row.minTaskTime.toFixed(2)}
                </TableCell>
                <TableCell align='center'>{row.tasksCount}</TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableBody>
          <TableRow
            sx={{
              '& td, th': {
                color: 'green',
                fontWeight: 'bold',
              },
            }}
          >
            <TableCell align='left'>Итого</TableCell>
            <TableCell align='center'>{totalTasksOk}</TableCell>
            <TableCell align='center'>{totalTasksError}</TableCell>
            <TableCell align='center'>{totalExerciseTime}</TableCell>
            <TableCell align='center'>{` `}</TableCell>
            <TableCell align='center'>{totalTasksCount}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
  const StatisticMobile = () => (
    <List component={'ol'}>
      {my_data.items &&
        my_data.items.length > 0 &&
        my_data.items.map((row: StatisticExerciseInterface) => (
          <ListItem key={row.exerciseName}>
            <List>
              <ListItem>
                <ListItemText>{row.exerciseName}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Правильные: {row.tasksOk}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Ошибка: {row.tasksError}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Время на упражнение: {row.exerciseTime}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Мин время на задачу: {row.minTaskTime.toFixed(2)}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Всего задач в упражнении: {row.tasksCount}
                </ListItemText>
              </ListItem>
            </List>
          </ListItem>
        ))}
      <ListItem>
        <List>
          <ListItem>
            <ListItemText>Итого</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Правильные: {totalTasksOk}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Ошибка: {totalTasksError}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Время Всего: {totalExerciseTime}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Всего задач в упражнении: {totalTasksCount}
            </ListItemText>
          </ListItem>
        </List>
      </ListItem>
    </List>
  );

  return matches ? <StatisticDesktop /> : <StatisticMobile />;
}
