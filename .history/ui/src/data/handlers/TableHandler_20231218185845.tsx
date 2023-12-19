import React, { useState, useEffect } from 'react';
import TagsViewer from '../../components/TagsViewer';
import TableViewer from '../../components/TableViewer';
import TagsButtonGroup from '../../components/TagsButtonGroup';
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
  const [selectedTags, setSelectedTags] = useState<string[]>(tags);
  const [filteredData, setFilteredData] = useState<any[]>(resultsArray);

  const updateFilteredData = (data: any[], selectedTagsArr: string[]) => {
    if (selectedTags.length === 0) {
      setFilteredData([]);
    } else if (selectedTags.length === tags.length) {
      setFilteredData(resultsArray);
    } else {
      const newData = data.filter((item: { Tags: string }) => {
        const itemTags = item.Tags.split(',').map((tag) => tag.trim());
        return selectedTagsArr.every((selectedTag) =>
          itemTags.includes(selectedTag)
        );
      });
      setFilteredData(newData);
    }
  };

  useEffect(() => {
    updateFilteredData(resultsArray, selectedTags);
  }, [selectedTags]);

  console.log('selectedTags', selectedTags);

  return (
    <div>
      <TagsButtonGroup />
      <TableViewer data={filteredData} />
    </div>
  );
};

export default TableHandler;
