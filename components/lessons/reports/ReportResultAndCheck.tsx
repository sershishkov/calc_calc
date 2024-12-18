import { useEffect } from 'react';

import ButtonRepeat from '../../ui/buttons/ButtonRepeat';

import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import Paper from '@mui/material/Paper';

import { ExampleSimpleAndCheckAnswerObjInterface } from '@/interfaces/refdata';
import { addOrUpdateStatistic } from '@/lib/actions/statisticActions';

function ReportResultAndCheck({
  displayStatistics,
  resultsList,
  onContinue,
  exerciseName,
  time,
}: Readonly<{
  displayStatistics: boolean;
  resultsList: ExampleSimpleAndCheckAnswerObjInterface[];
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
                  чей ответ?
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='h6' align='center'>
                  решение
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='h6' align='center'>
                  Проверка левого
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='h6' align='center'>
                  Проверка правого
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='h6' align='center'>
                  контрольное число слева
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='h6' align='center'>
                  контрольное число справа
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='h6' align='center'>
                  Сдан пример
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resultsList &&
              resultsList.length > 0 &&
              resultsList.map((item) => (
                <TableRow key={item.id} sx={{}}>
                  <TableCell>
                    <Typography variant='h6' align='center'>
                      {item.example}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Grid
                      container
                      justifyContent='flex-start'
                      alignItems='center'
                      direction='column'
                    >
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
                    <Grid
                      container
                      justifyContent='flex-start'
                      alignItems='center'
                      direction='column'
                    >
                      <Grid>
                        <Typography
                          variant='h6'
                          align='center'
                          color={
                            Number(item.userAnswer) - item.resultRight === 0
                              ? 'success.main'
                              : 'error.main'
                          }
                        >
                          {item.userAnswer}
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
                    <Grid
                      container
                      justifyContent='flex-start'
                      alignItems='center'
                      direction='column'
                    >
                      <Grid>
                        <Typography
                          variant='h6'
                          align='center'
                          color={
                            Number(item.userAnswerCheckNumberLeft) -
                              item.checkNumberLeft ===
                            0
                              ? 'success.main'
                              : 'error.main'
                          }
                        >
                          {item.userAnswerCheckNumberLeft}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography variant='h6' align='center'>
                          {item.checkNumberLeft}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>

                  <TableCell>
                    <Grid
                      container
                      justifyContent='flex-start'
                      alignItems='center'
                      direction='column'
                    >
                      <Grid>
                        <Typography
                          variant='h6'
                          align='center'
                          color={
                            Number(item.userAnswerCheckNumberRight) -
                              item.checkNumberRight ===
                            0
                              ? 'success.main'
                              : 'error.main'
                          }
                        >
                          {item.userAnswerCheckNumberRight}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography variant='h6' align='center'>
                          {item.checkNumberRight}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>

                  <TableCell>
                    <Grid
                      container
                      justifyContent='flex-start'
                      alignItems='center'
                      direction='column'
                    >
                      <Grid>
                        <Typography
                          variant='h6'
                          align='center'
                          color={
                            Number(item.userAnswerCheckResultLeft) -
                              item.checkResultLeft ===
                            0
                              ? 'success.main'
                              : 'error.main'
                          }
                        >
                          {item.userAnswerCheckResultLeft}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography variant='h6' align='center'>
                          {item.checkResultLeft}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>

                  <TableCell>
                    <Grid
                      container
                      justifyContent='flex-start'
                      alignItems='center'
                      direction='column'
                    >
                      <Grid>
                        <Typography
                          variant='h6'
                          align='center'
                          color={
                            Number(item.userAnswerCheckResultRight) -
                              item.checkResultRight ===
                            0
                              ? 'success.main'
                              : 'error.main'
                          }
                        >
                          {item.userAnswerCheckResultRight}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography variant='h6' align='center'>
                          {item.checkResultRight}
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
              <TableCell colSpan={8}>
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

export default ReportResultAndCheck;
