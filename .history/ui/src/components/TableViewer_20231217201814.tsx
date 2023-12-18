import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { tokens } from '../ThemeRegistry/theme';
import { useTheme } from '@emotion/react';
import Box from '@mui/material/Box';

type TableViewerProps = {
  data: any[];
};

const columns: GridColDef[] = [
  { field: 'Order', headerName: 'Order', flex: 1 },
  { field: 'Description', headerName: 'Description', flex: 1 },
  { field: 'Result', headerName: 'Result', flex: 1 },
  { field: 'Percentage', headerName: 'Percentage', flex: 1 },
  { field: 'Tags', headerName: 'Tags', flex: 1 },
];

const TableViewer: React.FC<TableViewerProps> = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.);
  console.log(data);

  const rows = data.map((item) => ({
    id: item.Order, // Use the "Order" field as the id
    ...item,
  }));

  return (
    <Box
      m="40px 0 0 0"
      height="75vh"
      sx={{
        '& .MuiDataGrid-root': {
          border: 'none',
        },
        '& .MuiDataGrid-cell': {
          borderBottom: 'none',
        },
        '& .name-column--cell': {
          color: colors.greenAccent[300],
        },
        '& .MuiDataGrid-columnHeaders': {
          backgroundColor: colors.blueAccent[700],
          borderBottom: 'none',
        },
        '& .MuiDataGrid-virtualScroller': {
          backgroundColor: colors.primary[400],
        },
        '& .MuiDataGrid-footerContainer': {
          borderTop: 'none',
          backgroundColor: colors.blueAccent[700],
        },
        '& .MuiCheckbox-root': {
          color: `${colors.greenAccent[200]} !important`,
        },
      }}
    >
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </Box>
  );
};

export default TableViewer;
