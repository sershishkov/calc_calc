import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function DescrCellRoundRefNumber({ text }: Readonly<{ text: string }>) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Typography
      variant={matches ? 'h6' : 'body1'}
      align='center'
      sx={{
        // color: '#f00',
        borderRadius: '50%',
        border: matches ? '2px solid #f00' : '1px solid #f00',
        width: matches ? '5rem' : '4rem',
        height: matches ? '5rem' : '4rem',
        lineHeight: matches ? '4.7rem' : '4rem',
      }}
    >
      {text}
    </Typography>
  );
}

export default DescrCellRoundRefNumber;
