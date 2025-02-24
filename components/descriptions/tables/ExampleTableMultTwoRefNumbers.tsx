import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import DescrCellMain from '@/components/ui/description/DescrCellMain';
import DescrCellRoundHintNumber from '@/components/ui/description/DescrCellRoundHintNumber';
import DescrCellRoundRefNumberBig from '@/components/ui/description/DescrCellRoundRefNumberBig';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function ExampleTableMultTwoRefNumbers({
  row_1_hintPlusLeft,

  row_2_hintPlusLeft,
  row_2_hintPlusRight,
  row_2_valueToAdd,

  row_main_refNumber,
  row_main_numberLeft,
  row_main_numberRight,
  row_main_valueIntermediate,

  row_4_hintMinusLeft,
  row_4_hintMinusRight,
  row_4_valueToMinus,

  row_5_hintMinusLeft,

  row_result_valueResult,
  displayRow_1,
  displayRow_2,
  displayRow_4,
  displayRow_5,
  displayRow_results,
}: Readonly<{
  row_1_hintPlusLeft: string;

  row_2_hintPlusLeft: string;
  row_2_hintPlusRight: string;
  row_2_valueToAdd: string;

  row_main_refNumber: string;
  row_main_numberLeft: string;
  row_main_numberRight: string;
  row_main_valueIntermediate: string;

  row_4_hintMinusLeft: string;
  row_4_hintMinusRight: string;
  row_4_valueToMinus: string;

  row_5_hintMinusLeft: string;

  row_result_valueResult: string;
  displayRow_1: boolean;
  displayRow_2: boolean;
  displayRow_4: boolean;
  displayRow_5: boolean;
  displayRow_results: boolean;
}>) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: '1rem',
      }}
    >
      <Table>
        <TableBody
          sx={{
            '& th, td': {
              padding: matches ? undefined : '0.5rem',
            },
          }}
        >
          <TableRow
            sx={{
              display: displayRow_1 ? 'table-row' : 'none',
            }}
          >
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='right'>+</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellRoundHintNumber text={row_1_hintPlusLeft || ''} />
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='right'>{''}</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellMain align='right'>{''}</DescrCellMain>
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='right'>{''}</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellMain align='right'>{''}</DescrCellMain>
            </TableCell>
          </TableRow>

          <TableRow
            sx={{
              display: displayRow_2 ? 'table-row' : 'none',
            }}
          >
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='right'>+</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellRoundHintNumber text={row_2_hintPlusLeft || ''} />
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='right'>+</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellRoundHintNumber text={row_2_hintPlusRight || ''} />
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='right'>{''}</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellMain align='right'>
                {row_2_valueToAdd || ''}
              </DescrCellMain>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <DescrCellRoundRefNumberBig text={row_main_refNumber || ''} />
            </TableCell>
            <TableCell>
              <DescrCellMain align='center'>
                {row_main_numberLeft || ''}
              </DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellMain align='center'>x</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellMain align='center'>
                {row_main_numberRight || ''}
              </DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellMain align='center'>=</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellMain align='right'>
                {row_main_valueIntermediate || ''}
              </DescrCellMain>
            </TableCell>
          </TableRow>

          <TableRow
            sx={{
              display: displayRow_4 ? 'table-row' : 'none',
            }}
          >
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='right'>-</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellRoundHintNumber text={row_4_hintMinusLeft || ''} />
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='right'>-</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellRoundHintNumber text={row_4_hintMinusRight || ''} />
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='right'>{''}</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellMain align='right'>
                {row_4_valueToMinus || ''}
              </DescrCellMain>
            </TableCell>
          </TableRow>

          <TableRow
            sx={{
              display: displayRow_5 ? 'table-row' : 'none',
            }}
          >
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='right'>-</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellRoundHintNumber text={row_5_hintMinusLeft || ''} />
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='right'>{''}</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellMain align='right'>{''}</DescrCellMain>
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='right'>{''}</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellMain align='right'>{''}</DescrCellMain>
            </TableCell>
          </TableRow>

          <TableRow
            sx={{
              display: displayRow_results ? 'table-row' : 'none',
            }}
          >
            <TableCell colSpan={5}>
              <DescrCellMain align='right'>Ответ</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellMain align='right'>
                {row_result_valueResult || ''}
              </DescrCellMain>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ExampleTableMultTwoRefNumbers;
