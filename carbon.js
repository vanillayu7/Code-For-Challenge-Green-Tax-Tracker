import * as React from 'react';
// import classes from './carbon.module.css'
// import CarbonItem from './carbonItem'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(jurisdiction, implemented, construction, taxImp, taxConstruction) {
  return { jurisdiction, implemented, construction, taxImp, taxConstruction};
}


const rows = [
  createData('Australia', 'x', '', '', ''),
  createData('Canada', 'x', '', 'x', ''),
  createData('European Union', 'x', '', '', 'x'),
  createData('India', '', '', '', ''),
  createData('United States', 'x', 'x', '', 'x'),
];


export default function Carbon() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead color="blue">
          <TableRow>
            <TableCell>Jurisdiction</TableCell>
            <TableCell align="right">ETS&nbsp;Implemented</TableCell>
            <TableCell align="right">ETS&nbsp;under construction</TableCell>
            <TableCell align="right">Carbon tax&nbsp;implemented</TableCell>
            <TableCell align="right">Carbon tax&nbsp;under consideration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.jurisdiction}
              </TableCell>
              <TableCell align="right">{row.implemented}</TableCell>
              <TableCell align="right">{row.construction}</TableCell>
              <TableCell align="right">{row.taxImp}</TableCell>
              <TableCell align="right">{row.taxConstruction}</TableCell>
            </TableRow>
          ))}
        
        </TableBody>
      </Table>
    </TableContainer>
  );
}

