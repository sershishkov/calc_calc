import Typography from '@mui/material/Typography';

function DividerSimple({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Typography
      sx={{
        textAlign: 'right',
        fontSize: '1.5rem',
        color: 'red',
        fontWeight: 'bold',
      }}
    >
      {children}
    </Typography>
  );
}

export default DividerSimple;
