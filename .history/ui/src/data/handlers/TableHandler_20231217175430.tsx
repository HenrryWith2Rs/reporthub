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
  const tags = extractUniqueTags(resultsArray);
  const [filteredData, setFilteredData] = useState<any[]>(resultsArray);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [displayedTags, setDisplayedTags] = useState<string[]>(tags); // New state

  console.log('selectedTags -> ', selectedTags);

  const handleDeleteTag = (tag: string) => {
    // Remove the selected tag from the state
    setSelectedTags((prevTags) =>
      prevTags.filter((prevTag) => prevTag !== tag)
    );
  };

  // Callback function to update displayedTags in TableHandler
  const updateDisplayedTags = (newDisplayedTags: string[]) => {
    setDisplayedTags(newDisplayedTags);
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
        displayedTags={displayedTags} // Pass displayedTags as a prop
        onDeleteTag={handleDeleteTag}
        updateDisplayedTags={updateDisplayedTags} // Pass the callback function
      />
      <TableViewer data={filteredData} />
    </div>
  );
};

export default TableHandler;
