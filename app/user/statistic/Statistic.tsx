'use client';
import { StatisticExerciseInterface } from '@/interfaces/refdata';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Statistic({ my_data }: Readonly<{ my_data: any }>) {
  const totalTasksOk = my_data.totalTasksOk;
  const totalTasksError = my_data.totalTasksError;
  const totalExerciseTime = my_data.totalExerciseTime;
  const totalTasksCount = my_data.totalTasksCount;

  const StatisticDesktop = () => (
    <TableContainer component={Paper} sx={{ maxHeight: 750 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Урок</TableCell>
            <TableCell align='center'>Правильные</TableCell>
            <TableCell align='center'>Ошибка</TableCell>
            <TableCell align='center'>Время (сек)</TableCell>
            <TableCell align='center'>Рекорд (сек)</TableCell>
            <TableCell align='center'>Решено задач:</TableCell>
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

  return <StatisticDesktop />;
}
