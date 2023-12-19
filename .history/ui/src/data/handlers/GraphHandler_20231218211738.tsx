// TableHandler.tsx
import React, { useState, useEffect } from 'react';
import TagsButtonGroup from '../../components/TagsButtonGroup';
import BarChart from '../../components/BarChart';
import { BotType, ReportType } from '../../types/koreTypes';
import { extractUniqueTags } from '../utils/koreDataUtils';
import Box from '@mui/material/Box';

type HandlerProps = {
  apiResponse: any;
  bot: BotType;
  reportType: ReportType;
  date: string;
};

const GraphHandler: React.FC<HandlerProps> = ({
  apiResponse,
  bot,
  reportType,
  date,
}) => {
  const resultsArray = apiResponse.resultSet;
  const tags = extractUniqueTags(resultsArray);
  const dates = getDatesFromApiResponse(apiResponse);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
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
  console.log('dates', dates);

  return (
    <div>
      <TagsButtonGroup
        tags={tags}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <Box height="75vh">
        <BarChart
          isDashboard={false}
          dates={tags}
          filteredData={filteredData}
        />
      </Box>
    </div>
  );
};

export default GraphHandler;

const getDatesFromApiResponse = (apiResponse: any[]) => {
  return apiResponse.map((entry) => entry.date);
};
