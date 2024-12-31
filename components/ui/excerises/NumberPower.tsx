import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function NumberPower({ children }: Readonly<{ children: React.ReactNode }>) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Typography
      sx={{
        position: 'absolute',
        top: matches ? '0.1rem' : '0.5rem',
        right: '0',
        fontSize: matches ? '2rem' : '1.2rem',

        fontWeight: 'bold',
        color: 'green',
      }}
    >
      {children}
    </Typography>
  );
}

export default NumberPower;
