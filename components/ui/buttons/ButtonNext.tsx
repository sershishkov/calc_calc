import React from 'react';

import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function ButtonNext({ href }: Readonly<{ href: string }>) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Tooltip title='Следующий Урок'>
      <Button
        variant='contained'
        component={Link}
        href={href}
        color='primary'
        size={matches ? undefined : 'small'}
      >
        <ArrowForwardIcon />
      </Button>
    </Tooltip>
  );
}

export default ButtonNext;
