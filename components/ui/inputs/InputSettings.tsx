import TextField from '@mui/material/TextField';

function InputSettings({
  name,
  label,
  value,
  onChange,
  id,
  onKeyPress,
}: Readonly<{
  id: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyPress: React.KeyboardEventHandler<HTMLInputElement>;
  label: string;
}>) {
  return (
    <TextField
      id={id}
      name={name}
      type='number'
      margin='normal'
      label={label}
      required
      onChange={onChange}
      value={value}
      onKeyDown={onKeyPress}
    />
  );
}

export default InputSettings;
