import Grid from '@mui/material/Grid2';
import DigitWithStarOrDot from '@/app/lessons/level_7/DigitWithStarOrDot';

import { ExampleStarOrDotLevel_7Interface } from '@/interfaces/refdata';
function NumbersList({
  numbersList,
  direction = 'flex-end',
}: Readonly<{
  numbersList: ExampleStarOrDotLevel_7Interface[];
  direction: string;
}>) {
  return (
    <Grid
      container
      flexDirection='row'
      alignItems='center'
      justifyContent={direction}
    >
      {numbersList &&
        numbersList.length > 0 &&
        numbersList.map((item, index) => (
          <DigitWithStarOrDot
            key={`${item}-${index}`}
            isStar={item.isStar}
            isDot={item.isDot}
            item={typeof item.digit === 'string' ? item.digit : `${item.digit}`}
            color={item.color ? item.color : 'inherit'}
          />
        ))}
    </Grid>
  );
}

export default NumbersList;
