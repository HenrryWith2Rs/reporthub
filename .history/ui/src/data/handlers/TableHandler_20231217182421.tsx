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
  const [displayedTags, setDisplayedTags] = useState<string[]>(tags);
  const [filteredData, setFilteredData] = useState<any[]>(resultsArray);

  const handleDeleteTag = (tag: string) => {
    // Remove the selected tag from the state
    setDisplayedTags((prevTags) =>
      prevTags.filter((prevTag) => prevTag !== tag)
    );
  };

  // Callback function to update displayedTags in TableHandler
  const updateDisplayedTags = (newDisplayedTags: string[]) => {
    setDisplayedTags(newDisplayedTags);
  };

  // Rerender all available tags
  const handleRestoreAllTags = () => {
    setDisplayedTags(tags);
  };

  useEffect(() => {
    const newData = resultsArray.filter((item: { Tags: string }) =>
      displayedTags.every((displayedTag) => item.Tags.includes(displayedTag))
    );

    setFilteredData(newData);
  }, [displayedTags]);

  console.log('filteredData -> ', filteredData);

  return (
    <div>
      <TagsViewer
        tags={tags}
        displayedTags={displayedTags} // Pass displayedTags as a prop
        onDeleteTag={handleDeleteTag}
        updateDisplayedTags={updateDisplayedTags} // Pass the callback function
        onRestoreAllTags={handleRestoreAllTags}
      />
      <TableViewer data={filteredData} />
    </div>
  );
};

export default TableHandler;
