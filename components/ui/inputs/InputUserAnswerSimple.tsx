import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function InputUserAnswerSimple({
  name,
  label,
  id,
  value,
  onChange,
  onKeyPress,
}: // display,
Readonly<{
  id: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyPress: React.KeyboardEventHandler<HTMLInputElement>;
  label: string;
  // display:string,
}>) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <TextField
      name={name}
      label={label}
      type='number'
      id={id}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyPress}
      sx={{
        input: {
          padding: 0,
          textAlign: 'left',

          // width: matches ? '3rem' : '1.8rem',
          height: matches ? '3rem' : '1.8rem',
          border: matches ? undefined : '1px solid #0F0',
          fontSize: matches ? '2.3rem' : '1rem',
        },
        label: {
          display: matches ? undefined : 'none',
        },
        // fieldset: {
        //   display: 'none',
        // },
      }}
    />
  );
}

export default InputUserAnswerSimple;
