import Button from '@mui/material/Button';
import LoopIcon from '@mui/icons-material/Loop';

function ButtonRepeat({
  onClick,
  id,
}: Readonly<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  id: string;
}>) {
  return (
    <Button
      fullWidth
      variant='contained'
      color='primary'
      onClick={onClick}
      id={id}
    >
      <LoopIcon />
      давай еще!
    </Button>
  );
}

export default ButtonRepeat;
