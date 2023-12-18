import React, { useState } from 'react';
import TagsViewer from '../../components/TagsViewer';
import TableViewer from '../../components/TableViewer';
import { BotType, ReportType } from '../../types/koreTypes';
import { extractUniqueTags } from '../utils/koreDataUtils';

type TableHandlerProps = {
  apiResponse: any;
  bot: BotType;
  reportType: ReportType;
  date: string;
};

const TableHandler: React.FC<TableHandlerProps> = ({
  apiResponse,
  bot,
  reportType,
  date,
}) => {
  const resultsArray = apiResponse.resultSet;
  const [filteredData, setFilteredData] = useState<any[]>(resultsArray);

  const tags = extractUniqueTags(resultsArray);
  console.log(tags);
  return (
    <div>
      <TagsViewer />
      <TableViewer />
    </div>
  );
};

export default TableHandler;
