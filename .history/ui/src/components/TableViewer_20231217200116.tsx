import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

type TableViewerProps = {
  data: any[];
};

const TableViewer: React.FC<TableViewerProps> = ({ data }) => {
  console.log(data);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>Result</TableCell>
            <TableCell>Percentage</TableCell>
            <TableCell>Tags</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.Description}</TableCell>
              <TableCell>{item.Result}</TableCell>
              <TableCell>{item.Percentage}</TableCell>
              <TableCell>{item.Tags}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableViewer;
