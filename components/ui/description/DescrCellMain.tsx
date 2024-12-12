import React from 'react';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function DescrCellMain({
  children,
  align,
}: Readonly<{
  children: React.ReactNode;
  align: string;
}>) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Typography
      variant={matches ? 'h3' : 'h6'}
      sx={{
        textAlign: align,
      }}
    >
      {children}
    </Typography>
  );
}

export default DescrCellMain;
