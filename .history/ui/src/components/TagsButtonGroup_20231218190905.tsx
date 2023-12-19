// TagsButtonGroup.tsx
import React, { useState } from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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
      aria-label="text formatting"
    >
      <ToggleButton value="bold" aria-label="bold">
        <FormatBoldIcon />
      </ToggleButton>
      <ToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </ToggleButton>
      <ToggleButton value="underlined" aria-label="underlined">
        <FormatUnderlinedIcon />
      </ToggleButton>
      <ToggleButton value="color" aria-label="color" disabled>
        <FormatColorFillIcon />
        <ArrowDropDownIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default TagsButtonGroup;
