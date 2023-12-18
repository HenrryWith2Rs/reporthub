import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

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
  console.log(data);

  const rows = data.map((item) => ({
    id: item.Order, // Use the "Order" field as the id
    ...item,
  }));

  return (
    <div style={{ height: 1000, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </div>
  );
};

export default TableViewer;
