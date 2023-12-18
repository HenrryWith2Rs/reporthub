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
    setDisplayedTags((prevTags) => {
      const newTags = prevTags.filter((prevTag) => prevTag !== tag);
      updateFilteredData(resultsArray, newTags);
      return newTags;
    });
  };

  const updateDisplayedTags = (newDisplayedTags: string[]) => {
    setDisplayedTags((prevTags) => {
      updateFilteredData(resultsArray, newDisplayedTags);
      return newDisplayedTags;
    });
  };

  const handleRestoreAllTags = () => {
    setDisplayedTags(tags);
  };

  // Reusable filter function
  const updateFilteredData = (data: any[], displayedTags: string[]) => {
    const newData = data.filter((item: { Tags: string }) =>
      displayedTags.every((displayedTag) => item.Tags.includes(displayedTag))
    );

    setFilteredData(newData);
  };

  console.log('displayedTags', displayedTags);

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
