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

import DescrCellMain from '@/components/ui/description/DescrCellMain';
import ExerciseHeader from '@/components/ui/description/ExerciseHeader';
import DescrCellRoundHintNumber from '@/components/ui/description/DescrCellRoundHintNumber';

import InputUserAnswerSimple from '@/components/ui/inputs/InputUserAnswerSimple';

import NumberPower from '@/components/ui/excerises/NumberPower';

import {
  GenExampleSquaringEnding5,
  GenExampleSquaringCloseTo,
} from '@/utils/generateExample';
import DescrCellRoundRefNumber from '@/components/ui/description/DescrCellRoundRefNumber';

function ExerciseSquaringSimple({
  displayExample,
  onStopExercise,
  example,
  userAnswer,
  onChangeUserAnswer,
  onAnswer,
  numberOf_Task,
  showHints,
  refNumber,
}: Readonly<{
  displayExample: boolean;
  onStopExercise: React.MouseEventHandler<HTMLButtonElement>;
  example: GenExampleSquaringEnding5 | GenExampleSquaringCloseTo;
  userAnswer: string;
  onChangeUserAnswer: React.ChangeEventHandler<HTMLInputElement>;
  onAnswer: () => void;
  numberOf_Task: number;
  showHints: boolean;
  refNumber: number;
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
          sx={{
            width: '70%',
            margin: 'auto',
            minWidth: '350px',
          }}
        >
          <Table align='center' aria-label='simple table'>
            <TableBody>
              <TableRow sx={{ display: showHints ? 'table-row' : 'none' }}>
                <TableCell sx={{ pr: 0 }}>
                  <DescrCellMain align='right'>+</DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellRoundHintNumber
                    text={
                      example && example.number_1 > refNumber
                        ? `${+example.number_1 - refNumber}`
                        : ''
                    }
                  />
                </TableCell>

                <TableCell>
                  <DescrCellMain align='right'>{''}</DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellMain align='right'>{''}</DescrCellMain>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  {refNumber > 0 && (
                    <DescrCellRoundRefNumber text={`${refNumber}`} />
                  )}
                </TableCell>
                <TableCell
                  sx={{
                    position: 'relative',
                  }}
                >
                  <DescrCellMain align='center'>
                    {example ? `${example.number_1}` : ''}
                  </DescrCellMain>
                  <NumberPower>2</NumberPower>
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
                        const onAnswer_Button =
                          document.getElementById('answerButton');
                        onAnswer_Button!.focus();
                      }
                    }}
                  />
                </TableCell>
              </TableRow>

              <TableRow sx={{ display: showHints ? 'table-row' : 'none' }}>
                <TableCell sx={{ pr: 0 }}>
                  <DescrCellMain align='right'>-</DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellRoundHintNumber
                    text={
                      example && +example.number_1 < refNumber
                        ? `${refNumber - +example.number_1}`
                        : ''
                    }
                  />
                </TableCell>

                <TableCell>
                  <DescrCellMain align='right'>{''}</DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellMain align='right'>{''}</DescrCellMain>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={4}>
                  <ButtonOk
                    id='answerButton'
                    onClick={onAnswer}
                    disabled={userAnswer.length < 1}
                    tabIndex={undefined}
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

export default ExerciseSquaringSimple;
