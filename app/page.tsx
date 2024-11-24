import Grid from '@mui/material/Grid2';

import Description1 from '@/components/descriptions/home/Description1';
import Description2 from '@/components/descriptions/home/Description2';
import Description3 from '@/components/descriptions/home/Description3';
import Description4 from '@/components/descriptions/home/Description4';

export default function Home() {
  return (
    <Grid
      container
      direction='column'
      display='flex'
      justifyContent='flex-start'
      alignItems='center'
      margin={`auto`}
      pr={`2rem`}
      pl={`2rem`}
      pt={`4rem`}
    >
      <Description1 />
      <Description2 />
      <Description3 />
      <Description4 />
    </Grid>
  );
}
