import React, { useState } from 'react';
import TagsViewer from '../../components/TagsViewer';
import TableViewer from '../../components/TableViewer';
import { BotType, ReportType } from '../../types/koreTypes';
import { extractUniqueTags } from '../utils/koreDataUtils';

export function tableHandler(
  apiResponse: any,
  bot: BotType,
  reportType: ReportType,
  date: string
) {
  const [filteredData, setFilteredData] = useState(apiResponse?.resultSet);

  const tags = extractUniqueTags(apiResponse?.resultSet);

  console.log(tags);

  return <div>hola</div>;
}

export default tableHandler;
