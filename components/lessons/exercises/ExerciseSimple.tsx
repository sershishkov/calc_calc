import { useEffect } from 'react';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid2';
import ButtonStop from '../../ui/buttons/ButtonStop';
import ButtonOk from '../../ui/buttons/ButtonOk';

import DescrCellMain from '@/components/ui/description/DescrCellMain';
import ExerciseHeader from '@/components/ui/description/ExerciseHeader';
import InputUserAnswerSimple from '@/components/ui/inputs/InputUserAnswerSimple';

import {
  GenerateExampleAddMultSub,
  GenerateExampleSimpleDivision,
} from '@/utils/generateExample';

function ExerciseSimple({
  displayExample,
  onStopExercise,
  example,
  operator,
  userAnswer,
  onChangeUserAnswer,
  onAnswer,
  numberOf_Task,
}: Readonly<{
  displayExample: boolean;
  onStopExercise: React.MouseEventHandler<HTMLButtonElement>;
  example: GenerateExampleAddMultSub | GenerateExampleSimpleDivision;
  operator: string;
  userAnswer: string;
  onChangeUserAnswer: React.ChangeEventHandler<HTMLInputElement>;
  onAnswer: () => void;
  numberOf_Task: number;
}>) {
  useEffect(() => {
    if (displayExample) {
      const userAnswer__input = document.getElementById('userAnswer');
      userAnswer__input!.focus();
    }
  }, [displayExample]);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid sx={{ display: displayExample ? 'block' : 'none' }}>
      <Grid container flexDirection='column'>
        <Grid sx={{ flex: 1, padding: '10px' }}>
          <ButtonStop onClick={onStopExercise} />
        </Grid>
        <Grid sx={{ flex: 1 }}>
          <ExerciseHeader align='center'>
            Решите пример № {numberOf_Task}
          </ExerciseHeader>
        </Grid>
        <Grid>
          <Grid
            container
            alignItems='center'
            direction={matches ? 'row' : 'column'}
          >
            <Grid sx={{ flex: 1 }}>
              <DescrCellMain align='center'>
                {example ? example.numberLeft : ''}
              </DescrCellMain>
            </Grid>
            <Grid sx={{ flex: 0.3 }}>
              <DescrCellMain align='center'>{operator}</DescrCellMain>
            </Grid>
            <Grid sx={{ flex: 1 }}>
              <DescrCellMain align='center'>
                {example ? example.numberRight : ''}
              </DescrCellMain>
            </Grid>
            <Grid sx={{ flex: 0.3 }}>
              <DescrCellMain align='center'>=</DescrCellMain>
            </Grid>
            <Grid sx={{ flex: 1.1 }}>
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
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ width: '100%', marginTop: '1rem' }}>
          <ButtonOk
            id='answerButton'
            onClick={onAnswer}
            disabled={userAnswer.length < 1}
            tabIndex={undefined}
          >
            {numberOf_Task}
          </ButtonOk>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ExerciseSimple;
