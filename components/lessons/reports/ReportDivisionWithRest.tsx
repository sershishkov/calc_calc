import { useEffect } from 'react';

import ButtonRepeat from '../../ui/buttons/ButtonRepeat';

import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';

import { ExampleSimplDivWithRestInterface } from '@/interfaces/refdata';
import { addOrUpdateStatistic } from '@/lib/actions/statisticActions';

function ReportDivisionWithRest({
  displayStatistics,
  resultsList,
  onContinue,
  exerciseName,
  time,
}: Readonly<{
  displayStatistics: boolean;
  resultsList: ExampleSimplDivWithRestInterface[];
  onContinue: () => void;
  exerciseName: string;
  time: number;
}>) {
  useEffect(() => {
    if (displayStatistics) {
      let tasksOk = 0;
      const saveFunction = async () => {
        resultsList.forEach((item) => {
          if (item.doneExcercise) {
            tasksOk += 1;
          }
        });
        const tasksError = resultsList.length - tasksOk;
        await addOrUpdateStatistic({
          exerciseName,
          tasksOk,
          tasksError,
          exerciseTime: time,
        });
      };

      saveFunction();

      const buttonRepeat = document.getElementById('buttonRepeat');
      buttonRepeat!.focus();
    }
  }, [displayStatistics]);
  return (
    <Grid
      container
      sx={{ display: displayStatistics ? 'block' : 'none', width: '100%' }}
    >
      <Typography variant='h4' align='center'>
        Ваши результаты
      </Typography>

      <TableContainer component={Paper}>
        <Table
          sx={{ width: '90%', margin: 'auto', minWidth: '550px' }}
          align='center'
          aria-label='simple table'
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant='h6' align='center'>
                  Пример
                </Typography>
              </TableCell>

              <TableCell>
                <Typography variant='h6' align='center'>
                  Чей ответ?
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='h6' align='center'>
                  Пример
                </Typography>
              </TableCell>

              <TableCell>
                <Typography variant='h6' align='center'>
                  Остаток
                </Typography>
              </TableCell>

              <TableCell>
                <Typography variant='h6' align='center'>
                  Сдано?
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resultsList &&
              resultsList.length > 0 &&
              resultsList.map((item, index) => (
                <TableRow key={index} sx={{}}>
                  <TableCell>
                    <Typography variant='h6' align='center'>
                      {item.example}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Grid container flexDirection='column' alignItems='center'>
                      <Grid>
                        <Typography variant='h6' align='center'>
                          Ваш
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography variant='h6' align='center'>
                          Комп
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>

                  <TableCell>
                    <Grid container flexDirection='column' alignItems='center'>
                      <Grid>
                        <Typography
                          variant='h6'
                          align='center'
                          color={
                            Number(item.userResult) - item.resultRight === 0
                              ? 'success.main'
                              : 'error.main'
                          }
                        >
                          {item.userResult}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography variant='h6' align='center'>
                          {item.resultRight}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>

                  <TableCell>
                    <Grid container flexDirection='column' alignItems='center'>
                      <Grid>
                        <Typography
                          variant='h6'
                          align='center'
                          color={
                            Number(item.userAnswerRem) -
                              item.reminderOfDivision ===
                            0
                              ? 'success.main'
                              : 'error.main'
                          }
                        >
                          {item.userAnswerRem}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography variant='h6' align='center'>
                          {item.reminderOfDivision}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>

                  <TableCell>
                    <Typography
                      variant='h6'
                      align='center'
                      color={item.doneExcercise ? 'success.main' : 'error.main'}
                    >
                      {item.doneExcercise ? 'ок!' : 'ошибка!'}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5}>
                <Grid
                  container
                  alignItems='center'
                  flexDirection='column-reverse'
                >
                  <Grid sx={{ width: '100%' }}>
                    <ButtonRepeat onClick={onContinue} id='buttonRepeat' />
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default ReportDivisionWithRest;
