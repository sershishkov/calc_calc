import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';

function InputDigitForAddingColumn({
  name,
  id,
  value,
  onChange,
  onKeyPress,
  tabIndex,
}: Readonly<{
  id: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyPress: React.KeyboardEventHandler<HTMLInputElement>;
  tabIndex: number;
}>) {
  return (
    <Grid
      sx={{
        marginRight: '7px',
      }}
    >
      <TextField
        type='number'
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        inputProps={{
          // maxLength: 1,
          tabIndex: tabIndex,
        }}
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
            padding: 0,
            width: '1.05rem',
            height: '2rem',
            textAlign: 'center',
            fontSize: '2rem',
            border: '1px solid #f00',
            borderRadius: '3px',

            '&:focus , &:active,&:hover': {
              border: '1px solid green',
              outline: '1px solid transparent',
            },
          },
        }}
      />
    </Grid>
  );
}

export default InputDigitForAddingColumn;
