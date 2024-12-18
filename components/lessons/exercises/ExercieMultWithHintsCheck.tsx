import { useEffect } from 'react';

import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Grid from '@mui/material/Grid2';

import ButtonStop from '@/components/ui/buttons/ButtonStop';
import ButtonOk from '@/components/ui/buttons/ButtonOk';
import InputCircleCheck from '@/components/ui/inputs/InputCircleCheck';

import DescrCellMain from '@/components/ui/description/DescrCellMain';
import ExerciseHeader from '@/components/ui/description/ExerciseHeader';
import DescrCellRoundHintNumber from '@/components/ui/description/DescrCellRoundHintNumber';
import DescrCellRoundRefNumber from '@/components/ui/description/DescrCellRoundRefNumber';
import InputUserAnswerSimple from '@/components/ui/inputs/InputUserAnswerSimple';

import { GenerateExampleForCheckMultiplication } from '@/utils/generateExample';

function ExercieMultWithHintsCheck({
  displayExample,
  onStopExercise,
  example,
  operator,
  userAnswer,
  onChangeUserAnswer,
  onAnswer,
  numberOf_Task,
  showHints,
  showPlusHints,
  showMinusHints,
  refNumber,
  userAnswerCheckNumberLeft,
  userAnswerCheckNumberRight,
  userAnswerCheckResultLeft,
  userAnswerCheckResultRight,

  setAnswerCheckNumberLeft,
  setAnswerCheckNumberRight,
  setAnswerCheckResultLeft,
  setAnswerCheckResultRight,
}: Readonly<{
  displayExample: boolean;
  onStopExercise: React.MouseEventHandler<HTMLButtonElement>;
  example: GenerateExampleForCheckMultiplication;
  operator: string;
  userAnswer: string;
  onChangeUserAnswer: React.ChangeEventHandler<HTMLInputElement>;
  onAnswer: () => void;
  numberOf_Task: number;
  showHints: boolean;
  showPlusHints: boolean;
  showMinusHints: boolean;
  refNumber: number;
  userAnswerCheckNumberLeft: string;
  userAnswerCheckNumberRight: string;
  userAnswerCheckResultLeft: string;
  userAnswerCheckResultRight: string;

  setAnswerCheckNumberLeft: React.ChangeEventHandler<HTMLInputElement>;
  setAnswerCheckNumberRight: React.ChangeEventHandler<HTMLInputElement>;
  setAnswerCheckResultLeft: React.ChangeEventHandler<HTMLInputElement>;
  setAnswerCheckResultRight: React.ChangeEventHandler<HTMLInputElement>;
}>) {
  useEffect(() => {
    if (displayExample) {
      const userAnswer__input = document.getElementById('userAnswer');
      userAnswer__input!.focus();
    }
  }, [displayExample]);

  return (
    <Grid container sx={{ display: displayExample ? 'block' : 'none' }}>
      <Grid sx={{ flex: 1, padding: '10px' }}>
        <ButtonStop onClick={onStopExercise} />
      </Grid>
      <ExerciseHeader align='center'>
        Решите пример № {numberOf_Task}
      </ExerciseHeader>

      <Grid container justifyContent='space-evenly' alignItems='center'>
        <TableContainer
          component={Paper}
          sx={
            {
              // width: '70%',
              // margin: 'auto',
            }
          }
        >
          <Table align='center' aria-label='simple table'>
            <TableBody>
              <TableRow
                sx={{
                  display: showHints && showPlusHints ? 'table-row' : 'none',
                }}
              >
                <TableCell sx={{ pr: 0 }}>
                  <DescrCellMain align='right'>+</DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellRoundHintNumber
                    text={
                      example && example.numberLeft > refNumber
                        ? `${example.numberLeft - refNumber}`
                        : ''
                    }
                  />
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <DescrCellMain align='right'>+</DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellRoundHintNumber
                    text={
                      example && example.numberRight > refNumber
                        ? `${example.numberRight - refNumber}`
                        : ''
                    }
                  />
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <DescrCellMain align='right'>{''}</DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellMain align='center'>{''}</DescrCellMain>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <DescrCellRoundRefNumber text={`${refNumber}`} />
                </TableCell>
                <TableCell>
                  <DescrCellMain align='center'>
                    {example ? example.numberLeft : ''}
                  </DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellMain align='center'>{operator}</DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellMain align='center'>
                    {example ? example.numberRight : ''}
                  </DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellMain align='center'>=</DescrCellMain>
                </TableCell>
                <TableCell>
                  <InputUserAnswerSimple
                    name='userAnswer'
                    label='Ответ'
                    id='userAnswer'
                    value={userAnswer}
                    onChange={onChangeUserAnswer}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const userAnswer_CheckNumberLeft_input =
                          document.getElementById('userAnswerCheckNumberLeft');

                        userAnswer_CheckNumberLeft_input!.focus();
                      }
                    }}
                  />
                </TableCell>
              </TableRow>

              <TableRow
                sx={{
                  display: showHints && showMinusHints ? 'table-row' : 'none',
                }}
              >
                <TableCell sx={{ pr: 0 }}>
                  <DescrCellMain align='right'>-</DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellRoundHintNumber
                    text={
                      example && example.numberLeft < refNumber
                        ? `${refNumber - example.numberLeft}`
                        : ''
                    }
                  />
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <DescrCellMain align='right'>-</DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellRoundHintNumber
                    text={
                      example && example.numberRight < refNumber
                        ? `${refNumber - example.numberRight}`
                        : ''
                    }
                  />
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <DescrCellMain align='right'>{''}</DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellMain align='center'>{''}</DescrCellMain>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={8}>
                  <ExerciseHeader align='center'>
                    Проверка решения
                  </ExerciseHeader>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell sx={{ pr: 0 }}>
                  <DescrCellMain align='right'>{''}</DescrCellMain>
                </TableCell>
                <TableCell
                  align='center'
                  sx={{
                    padding: 0,
                  }}
                >
                  <InputCircleCheck
                    id='userAnswerCheckNumberLeft'
                    name='userAnswerCheckNumberLeft'
                    value={userAnswerCheckNumberLeft}
                    onChange={setAnswerCheckNumberLeft}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const userAnswer_CheckNumberRight_input =
                          document.getElementById('userAnswerCheckNumberRight');

                        userAnswer_CheckNumberRight_input!.focus();
                      }
                    }}
                  />
                </TableCell>
                <TableCell sx={{ pr: 0 }}></TableCell>
                <TableCell
                  align='center'
                  sx={{
                    padding: 0,
                  }}
                >
                  <InputCircleCheck
                    id='userAnswerCheckNumberRight'
                    name='userAnswerCheckNumberRight'
                    value={userAnswerCheckNumberRight}
                    onChange={setAnswerCheckNumberRight}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const userAnswer_CheckResultLeft_input =
                          document.getElementById('userAnswerCheckResultLeft');

                        userAnswer_CheckResultLeft_input!.focus();
                      }
                    }}
                  />
                </TableCell>
                <TableCell sx={{ pr: 0 }}></TableCell>
                <TableCell></TableCell>
              </TableRow>

              <TableRow>
                <TableCell sx={{ pr: 0 }}>
                  <DescrCellMain align='right'>{''}</DescrCellMain>
                </TableCell>
                <TableCell
                  align='center'
                  sx={{
                    padding: 0,
                  }}
                  colSpan={3}
                >
                  <InputCircleCheck
                    id='userAnswerCheckResultLeft'
                    name='userAnswerCheckResultLeft'
                    value={userAnswerCheckResultLeft}
                    onChange={setAnswerCheckResultLeft}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const userAnswer_CheckResultRight_input =
                          document.getElementById('userAnswerCheckResultRight');

                        userAnswer_CheckResultRight_input!.focus();
                      }
                    }}
                  />
                </TableCell>

                <TableCell sx={{ pr: 0 }}></TableCell>
                <TableCell
                  align='center'
                  sx={{
                    padding: 0,
                  }}
                >
                  <InputCircleCheck
                    id='userAnswerCheckResultRight'
                    name='userAnswerCheckResultRight'
                    value={userAnswerCheckResultRight}
                    onChange={setAnswerCheckResultRight}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const answerButton =
                          document.getElementById('answerButton');

                        answerButton!.focus();
                      }
                    }}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={8}>
                  <ButtonOk
                    id='answerButton'
                    onClick={onAnswer}
                    tabIndex={undefined}
                    disabled={
                      userAnswer.length < 1 ||
                      userAnswerCheckNumberLeft.length < 1 ||
                      userAnswerCheckNumberRight.length < 1 ||
                      userAnswerCheckResultLeft.length < 1 ||
                      userAnswerCheckResultRight.length < 1
                    }
                  >
                    {numberOf_Task}
                  </ButtonOk>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default ExercieMultWithHintsCheck;
