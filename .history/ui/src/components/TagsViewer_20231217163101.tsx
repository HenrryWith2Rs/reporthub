// TagsViewer.tsx
import React, { useState, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

type TagsViewerProps = {
  tags: string[];
  selectedTags: string[];
  displayedTags: string[]; // New prop
  onDeleteTag: (tag: string) => void;
  updateDisplayedTags: (newDisplayedTags: string[]) => void; // New prop
};

const TagsViewer: React.FC<TagsViewerProps> = ({
  tags,
  selectedTags,
  displayedTags,
  onDeleteTag,
  updateDisplayedTags,
}) => {
  const [filter, setFilter] = useState<string>('');

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleDeleteTag = (tag: string) => {
    const newDisplayedTags = displayedTags.filter((prevTag) => prevTag !== tag);
    updateDisplayedTags(newDisplayedTags);
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
