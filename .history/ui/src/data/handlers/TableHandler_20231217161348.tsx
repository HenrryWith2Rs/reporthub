// TableHandler.tsx
import React, { useEffect, useState } from 'react';
import TagsViewer from '../../components/TagsViewer';
import TableViewer from '../../components/TableViewer';
import { BotType, ReportType } from '../../types/koreTypes';
import { extractUniqueTags } from '../utils/koreDataUtils';

type HandlerProps = {
  apiResponse: any;
  bot: BotType;
  reportType: ReportType;
  date: string;
};

const TableHandler: React.FC<HandlerProps> = ({
  apiResponse,
  bot,
  reportType,
  date,
}) => {
  const resultsArray = apiResponse.resultSet;
  const [filteredData, setFilteredData] = useState<any[]>(resultsArray);
  const [displayedTags, setDisplayedTags] = useState<string[]>(
    extractUniqueTags(resultsArray)
  );

  const tags = extractUniqueTags(resultsArray);

  const handleDeleteTag = (tag: string) => {
    // Remove the selected tag from the state
    setSelectedTags((prevTags) =>
      prevTags.filter((prevTag) => prevTag !== tag)
    );
  };

  return (
    <div>
      <TagsViewer
        tags={tags}
        selectedTags={selectedTags}
        onDeleteTag={handleDeleteTag}
      />
      <TableViewer data={filteredData} />
    </div>
  );
};

export default TableHandler;
