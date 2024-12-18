import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function InputCircleCheck({
  id,
  name,
  value,
  onChange,
  onKeyPress,
}: Readonly<{
  id: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyPress: React.KeyboardEventHandler<HTMLInputElement>;
}>) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <TextField
      type='number'
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      onKeyUp={onKeyPress}
      onInput={(e) => {
        (e.target as HTMLInputElement).value = Math.max(
          0,
          parseInt((e.target as HTMLInputElement).value)
        )
          .toString()
          .slice(0, 1); //   maxLength: 1,
      }}
      sx={{
        fieldset: {
          display: 'none',
        },

        input: {
          padding: 0,
          textAlign: 'center',
          borderRadius: '50%',
          width: matches ? '3rem' : '1.8rem',
          height: matches ? '3rem' : '1.8rem',
          border: matches ? '2px solid #0F0' : '1px solid #0F0',
          fontSize: matches ? '2.3rem' : '1rem',
          color: '#F00',
          '&:hover,&:focus,&:active': {
            border: matches ? '2px solid #F00' : '1px solid #F00',
          },
        },
      }}
    />
  );
}

export default InputCircleCheck;
