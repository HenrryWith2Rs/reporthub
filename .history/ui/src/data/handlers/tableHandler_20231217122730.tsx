import React, { useState } from 'react';
import TagsViewer from '../../components/TagsViewer';
import TableViewer from '../../components/TableViewer';
import { BotType, ReportType } from '../../types/koreTypes';
import { extractUniqueTags } from '../utils/koreDataUtils';

interface TableHandlerProps {
  apiResponse: any;
  bot: BotType;
  reportType: ReportType;
  date: string;
}

const TableHandler: React.FC<TableHandlerProps> = ({
  apiResponse,
  bot,
  reportType,
  date,
}) => {
  const [filteredData, setFilteredData] = useState();

  const tags = extractUniqueTags(apiResponse.resultSet);

  return (
    <div>
      <TagsViewer />
      <TableViewer />
    </div>
  );
};

export default TableHandler;
