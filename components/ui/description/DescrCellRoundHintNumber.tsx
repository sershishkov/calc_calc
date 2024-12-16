import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Typography from '@mui/material/Typography';

function DescrCellRoundHintNumber({ text }: Readonly<{ text: string }>) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Typography
      variant={matches ? 'h3' : 'h6'}
      align='center'
      sx={{
        borderRadius: '50%',
        border: matches ? '2px solid yellow' : '1px solid yellow',
        width: matches ? '3rem' : '1.8rem',
        height: matches ? '3rem' : '1.8rem',
        fontSize: matches ? '2.3rem' : '1rem',
        color: 'yellow',
      }}
    >
      {text}
    </Typography>
  );
}

export default DescrCellRoundHintNumber;
