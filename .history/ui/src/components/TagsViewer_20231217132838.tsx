import React, { useState, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

type TagsViewerProps = {
  tags: string[];
  onDelete: () => void;
};

const TagsViewer: React.FC<> = ({ data }) => {
  const [filter, setFilter] = useState<string>('');
  const allTags = data.flatMap((item) =>
    item.Tags.split(',').map((tag) => tag.trim())
  );
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
          <Chip key={index} label={tag} style={{ margin: '5px' }} />
        ))}
      </Box>
    </Box>
  );
};

export default TagsViewer;
