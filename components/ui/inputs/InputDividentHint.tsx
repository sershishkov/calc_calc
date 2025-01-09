import TextField from '@mui/material/TextField';

function InputDividentHint({
  name,
  id,
  value,
  onChange,
  onKeyPress,
  tabIndex,
  display,
  top = '0.4rem',
  left = '-0.8rem',
}: Readonly<{
  id: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyPress: React.KeyboardEventHandler<HTMLInputElement>;
  tabIndex: number;
  display: boolean;
  top: string;
  left?: string;
}>) {
  return (
    <TextField
      type='number'
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      onKeyUp={onKeyPress}
      // inputProps={{
      //   // maxLength: 1,
      //   tabIndex: tabIndex,
      // }}
      tabIndex={tabIndex}
      onInput={(e) => {
        (e.target as HTMLInputElement).value = Math.max(
          0,
          parseInt((e.target as HTMLInputElement).value)
        )
          .toString()
          .slice(0, 1); //   maxLength: 1,
      }}
      sx={{
        div: {},
        fieldset: {
          display: 'none',
        },
        input: {
          display: display ? 'block' : 'none',
          position: 'absolute',
          top: top,
          left: left,
          padding: 0,
          width: '1rem',
          height: '1rem',
          textAlign: 'center',
          fontSize: '0.8rem',
          border: '1px solid yellow',
          borderRadius: '50%',
          // color: 'blue',

          '&:focus , &:active,&:hover': {
            border: '1px solid green',
            outline: '1px solid transparent',
          },
        },
      }}
    />
  );
}

export default InputDividentHint;
