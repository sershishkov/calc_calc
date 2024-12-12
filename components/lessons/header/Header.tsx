import ButtonPrev from '@/components/ui/buttons/ButtonPrev';
import ButtonNext from '@/components/ui/buttons/ButtonNext';
import TimerBasic from '@/components/timer/TimerBasic';

import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Header({
  hrefPrev,
  hrefNext,
  time,
  title,
}: Readonly<{
  hrefPrev: string;
  hrefNext: string;
  time: number;
  title: string;
}>) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
      <Grid
        container
        alignItems='center'
        justifyContent='space-between'
        // sx={{ border: '1px solid red', width: '100%' }}
      >
        <Grid container alignItems='center' justifyContent='flex-start'>
          <Grid
            sx={{
              mr: '5px',
              display: hrefPrev ? 'block' : 'none',
            }}
          >
            <ButtonPrev href={hrefPrev} />
          </Grid>
          <Grid
            sx={{
              mr: '5px',
              display: hrefNext ? 'block' : 'none',
            }}
          >
            <ButtonNext href={hrefNext} />
          </Grid>
        </Grid>

        <Grid>
          <TimerBasic time={time} />
        </Grid>
      </Grid>

      <Grid>
        <Typography variant={matches ? 'h5' : 'h6'} align='center'>
          {title}
        </Typography>
      </Grid>
    </>
  );
}

export default Header;
