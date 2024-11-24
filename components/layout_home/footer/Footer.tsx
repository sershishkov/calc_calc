import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

export default function Footer() {
  return (
    <footer>
      <Grid
        container
        sx={{ pt: '1rem' }}
        justifyContent='center'
        alignItems='center'
      >
        <Grid>
          <Typography variant='body2' align='center'>
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}
