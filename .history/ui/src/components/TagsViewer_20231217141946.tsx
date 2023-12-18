import React, { useState, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

interface TagsDisplayProps {
  tags: string[];
}

const TagsDisplay: React.FC<TagsDisplayProps> = ({ tags }) => {
  const [filter, setFilter] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  console.log(tags);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const filteredTags = tags.filter((tag) =>
    tag.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteTag = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.filter((prevTag) => prevTag !== tag)
    );
  };

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

export default TagsDisplay;
