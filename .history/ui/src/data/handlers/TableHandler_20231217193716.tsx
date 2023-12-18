import React, { useState } from 'react';
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
    setDisplayedTags((prevTags) =>
      prevTags.filter((prevTag) => prevTag !== tag)
    );

    // Call the filter function to update filteredData
    updateFilteredData(resultsArray, displayedTags);
  };

  const updateDisplayedTags = (newDisplayedTags: string[]) => {
    setDisplayedTags(newDisplayedTags);

    // Call the filter function to update filteredData
    updateFilteredData(resultsArray, newDisplayedTags);
  };

  const handleRestoreAllTags = () => {
    setDisplayedTags(tags);

    // Call the filter function to update filteredData
    updateFilteredData(resultsArray, tags);
  };

  // Reusable filter function
  const updateFilteredData = (data: any[], displayedTags: string[]) => {
    const newData = data.filter((item: { Tags: string }) =>
      displayedTags.every((displayedTag) => item.Tags.includes(displayedTag))
    );

    setFilteredData(newData);
  };

  return (
    <div>
      <TagsViewer
        tags={tags}
        displayedTags={displayedTags}
        onDeleteTag={handleDeleteTag}
        updateDisplayedTags={updateDisplayedTags}
        onRestoreAllTags={handleRestoreAllTags}
      />
      <TableViewer data={filteredData} />
    </div>
  );
};

export default TableHandler;
