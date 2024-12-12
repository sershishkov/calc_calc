import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function ButtonPrev({ href }: Readonly<{ href: string }>) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Tooltip title='Предыдущий Урок'>
      <Button
        variant='contained'
        component={Link}
        href={href}
        color='primary'
        size={matches ? undefined : 'small'}
      >
        <ArrowBackIcon />
      </Button>
    </Tooltip>
  );
}

export default ButtonPrev;
