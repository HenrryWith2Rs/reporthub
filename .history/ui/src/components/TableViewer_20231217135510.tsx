import React from 'react';

type TableViewerProps = {
  data: any[];
};

const TableViewer: React.FC<TableViewerProps> = ({ data }) => {
  console.log(data);
  return <div>TableViewer</div>;
};

export default TableViewer;
