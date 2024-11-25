import React from 'react';

import Typography from '@mui/material/Typography';

function DescrBody({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Typography
      variant='body1'
      sx={{
        textIndent: '1rem',
      }}
    >
      {children}
    </Typography>
  );
}

export default DescrBody;
