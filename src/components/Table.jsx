import * as React from 'react';
import {
  Table as TableBase,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';

const Table = ({ tableConfig, rows }) => (
  <TableContainer component={Paper}>
    <TableBase sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {tableConfig.map((el) => (
            <TableCell align="right">{el.title}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, i) => (
          <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            {tableConfig.map((el) => (
              <TableCell align="right">{el.value === 'index' ? i + 1 : row[el.value]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableBase>
  </TableContainer>
);

export default Table;
