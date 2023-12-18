// TagsViewer.tsx
import React, { useState, useEffect, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

type TagsViewerProps = {
  tags: string[];
  selectedTags: string[];
  displayedTags: string[];
  onDeleteTag: (tag: string) => void;
  updateDisplayedTags: (newDisplayedTags: string[]) => void;
};

const TagsViewer: React.FC<TagsViewerProps> = ({
  tags,
  selectedTags,
  displayedTags,
  onDeleteTag,
  updateDisplayedTags,
}) => {
  const [filter, setFilter] = useState<string>('');
  const [localDisplayedTags, setLocalDisplayedTags] = useState<string[]>([]);

  // Initialize localDisplayedTags when the component mounts
  useEffect(() => {
    setLocalDisplayedTags(displayedTags);
  }, [displayedTags]);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleDeleteTag = (tag: string) => {
    const newLocalDisplayedTags = localDisplayedTags.filter(
      (prevTag) => prevTag !== tag
    );
    setLocalDisplayedTags(newLocalDisplayedTags);
    updateDisplayedTags(newLocalDisplayedTags);
    onDeleteTag(tag);
  };

  const handleRestoreAllTags = () => {
    setLocalDisplayedTags(tags);
    updateDisplayedTags(tags);
  };

  const filteredTags = localDisplayedTags.filter((tag) =>
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
      <button onClick={handleRestoreAllTags}>Display All Tags</button>
    </Box>
  );
};

export default TagsViewer;
