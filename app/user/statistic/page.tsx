import { getMyStatistic } from '@/lib/actions/statisticActions';
import { StatisticExerciseInterface } from '@/interfaces/refdata';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableFooter from '@mui/material/TableFooter';

export default async function StatisticPage() {
  const my_data = await getMyStatistic();
  const totalTasksOk = my_data.totalTasksOk;
  const totalTasksError = my_data.totalTasksError;
  const totalExerciseTime = my_data.totalExerciseTime;
  const totalTasksCount = my_data.totalTasksCount;

  return (
    <>
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
      {/* <ol>
        {my_data.items &&
          my_data.items.length > 0 &&
          my_data.items.map((item: StatisticExerciseInterface) => (
            <li key={item.exerciseName}>
              <p> {item.exerciseName}</p>
              <p>Правильные: {item.tasksOk}</p>
              <p>Ошибка: {item.tasksError}</p>
              <p>Время на упражнение: {item.exerciseTime}</p>
              <p>Мин время на задачу: {item.minTaskTime.toFixed(2)}</p>
              <p>Всего задач в упражнении: {item.tasksCount}</p>
            </li>
          ))}
      </ol> */}
    </>
  );
}
