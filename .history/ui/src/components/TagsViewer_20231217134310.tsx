import React, { useState, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

type TagsViewerProps = {
  tags: string[];
  onDelete: (tag: string) => void;
  selectedTags: string[];
};

const TagsViewer: React.FC<TagsViewerProps> = ({
  tags,
  onDelete,
  selectedTags,
}) => {
  const [filter, setFilter] = useState<string>('');
  const allTags = tags.flatMap((tag) => tag.split(',').map((t) => t.trim()));
  const uniqueTags = [...new Set(allTags)];

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const filteredTags = uniqueTags.filter((tag) =>
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
            onDelete={() => onDelete(tag)}
            color={selectedTags.includes(tag) ? 'primary' : undefined}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TagsViewer;
