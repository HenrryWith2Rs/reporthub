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
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  console.log('selectedTags -> ', selectedTags);
  console.log('filteredData -> ', filteredData);

  const tags = extractUniqueTags(resultsArray);

  const handleDeleteTag = (tag: string) => {
    // Remove the selected tag from the state
    setSelectedTags((prevTags) =>
      prevTags.filter((prevTag) => prevTag !== tag)
    );
  };

  // Update the filteredData based on the remaining selected tags
  useEffect(() => {
    const newData = resultsArray.filter((item: { Tags: string }) =>
      selectedTags.every((selectedTag) => item.Tags.includes(selectedTag))
    );
    setFilteredData(newData);
  }, [selectedTags, resultsArray]);

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
