import { useEffect } from 'react';

import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import InputSettings from '@/components/ui/inputs/InputSettings';
import ShowHintSwitch from '@/components/ui/check/ShowHintSwitch';
import ButtonGo from '@/components/ui/buttons/ButtonGo';

function Settings({
  displaySettings,
  onChangeExamplesNumber,
  examplesNumber,
  onChangeMin,
  min,
  onChangeMax,
  max,
  onStart,
  displayMin,
  displayMax,
  displayShowHints,
  showHints,
  onChangeShowHints,
}: Readonly<{
  displaySettings: boolean;
  onChangeExamplesNumber: React.ChangeEventHandler<HTMLInputElement>;
  examplesNumber: string;
  onChangeMin: React.ChangeEventHandler<HTMLInputElement>;
  min: string;
  onChangeMax: React.ChangeEventHandler<HTMLInputElement>;
  max: string;
  onStart: React.MouseEventHandler<HTMLButtonElement>;
  displayMin: boolean;
  displayMax: boolean;
  displayShowHints: boolean;
  showHints: boolean;
  onChangeShowHints: React.ChangeEventHandler<HTMLInputElement>;
}>) {
  useEffect(() => {
    if (displaySettings) {
      const examples_numberInput = document.getElementById('examples_number');
      examples_numberInput!.focus();
    }
  }, [displaySettings]);

  return (
    <Grid
      sx={{
        display: displaySettings ? 'block' : 'none',
        // border: '1px solid blue',
        // width: '100%',
      }}
    >
      <Typography variant='h6' align='center'>
        Настройки
      </Typography>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        direction='column'
        sx={
          {
            // border: '1px solid yellow',
            // width: '100%',
          }
        }
      >
        <Grid
          display={`flex`}
          justifyContent='center'
          alignItems='center'
          sx={
            {
              // border: '1px solid pink',
              // width: '100%',
            }
          }
        >
          <InputSettings
            id='examples_number'
            name='examples_number'
            label='Количество упражнений'
            onChange={onChangeExamplesNumber}
            value={examplesNumber}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                if (displayMin) {
                  const nextElement = document.getElementById('min');
                  nextElement!.focus();
                } else if (displayMax) {
                  const nextElement = document.getElementById('max');
                  nextElement!.focus();
                } else {
                  const nextElement = document.getElementById('button_go');
                  nextElement!.focus();
                }
              }
            }}
          />
        </Grid>
        <Grid sx={{ display: displayMin ? 'block' : 'none' }}>
          <InputSettings
            id='min'
            name='min'
            label='Минимальное значение'
            onChange={onChangeMin}
            value={min}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                if (displayMax) {
                  const nextElement = document.getElementById('max');
                  nextElement!.focus();
                } else {
                  const nextElement = document.getElementById('button_go');
                  nextElement!.focus();
                }
              }
            }}
          />
        </Grid>
        <Grid sx={{ display: displayMax ? 'block' : 'none' }}>
          <InputSettings
            id='max'
            name='max'
            label='Максимальное значение'
            onChange={onChangeMax}
            value={max}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                const nextElement = document.getElementById('button_go');
                nextElement!.focus();
              }
            }}
          />
        </Grid>

        <Grid sx={{ display: displayShowHints ? 'block' : 'none' }}>
          <ShowHintSwitch
            showHints={showHints}
            onChangeShowHints={onChangeShowHints}
          />
        </Grid>
        <Grid>
          <ButtonGo onClick={onStart} id='button_go' />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Settings;
