import Button from '@mui/material/Button';

import CloseIcon from '@mui/icons-material/Close';

function ButtonStop({
  onClick,
}: Readonly<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}>) {
  return (
    <Button
      fullWidth
      variant='contained'
      color='error'
      onClick={onClick}
      sx={{ margin: 'auto' }}
    >
      <CloseIcon />
      стоп
    </Button>
  );
}

export default ButtonStop;
