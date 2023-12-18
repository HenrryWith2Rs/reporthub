import React, { useState, ChangeEvent, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

type TagsViewerProps = {
  tags: string[];
  selectedTags: string[];
  onDeleteTag: (tag: string) => void;
};

const TagsViewer: React.FC<TagsViewerProps> = ({
  tags,
  selectedTags,
  onDeleteTag,
}) => {
  const [filter, setFilter] = useState<string>('');
  const [displayedTags, setDisplayedTags] = useState<string[]>(tags);

  useEffect(() => {
    setDisplayedTags(tags);
  }, [tags]);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleDeleteTag = (tag: string) => {
    onDeleteTag(tag);
  };

  const filteredTags = displayedTags.filter((tag) =>
    tag.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box>
      <TextField
        label="Filter Tags"
        variant="outlined"
        onChange={handleFilterChange}
        style={{ marginBottom: '10px' }}
      />
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {filteredTags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            style={{ margin: '5px' }}
            onDelete={() => handleDeleteTag(tag)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TagsViewer;
