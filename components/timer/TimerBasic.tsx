import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

function TimerBasic({ time }: Readonly<{ time: number }>) {
  return (
    <Grid container alignItems='center' justifyContent='flex-end'>
      <Grid>
        <Typography variant='h6' align='center'>
          {time > 60
            ? Math.floor(time / 60) < 10
              ? `0${Math.floor(time / 60)}`
              : Math.floor(time / 60)
            : '00'}
          :
        </Typography>
      </Grid>
      <Grid>
        <Typography variant='h6' align='center'>
          {time % 60 < 10 ? `0${time % 60}` : `${time % 60}`}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default TimerBasic;
