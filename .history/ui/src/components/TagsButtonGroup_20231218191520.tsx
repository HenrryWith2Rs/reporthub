// TagsButtonGroup.tsx
import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

type TagsButtonGroupProps = {
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
};

const TagsButtonGroup: React.FC<TagsButtonGroupProps> = ({
  selectedTags,
  setSelectedTags,
}) => {
  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setSelectedTags(newFormats);
  };

  return (
    <ToggleButtonGroup
      value={selectedTags}
      onChange={handleFormat}
      aria-label="tags"
    >
      {selectedTags.map((tag) => (
        <ToggleButton key={tag} value={tag} aria-label={tag}>
          {tag}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default TagsButtonGroup;
