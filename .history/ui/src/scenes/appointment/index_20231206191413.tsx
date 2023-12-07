import { useState } from 'react';
import { useTheme, Box, Stack, Button } from '@mui/material';
import { tokens } from '../../ThemeRegistry/theme';
import Header from '../../components/Header';
import SendIcon from '@mui/icons-material/Send';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format } from 'date-fns';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getLastNDays } from '../../utils/dateUtils';

const Appointment = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [dateStart, setDateStart] = useState<Date | null>(new Date());
  const [dateEnd, setDateEnd] = useState<Date | null>(new Date());
  const [reportType, setReportType] = useState<string>('detailed');

  // const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setReportType(event.target.value);
  // };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setReportType(event.target.value as string);
  };

  return (
    <Box m="20px">
      <Header title="Appointment" subtitle="Kore Appointment Bot reports" />
      <Box m="40px 0 0 0" height="75vh">
        <Stack direction="row" spacing={2}>
          <DatePicker
            label="Start Date"
            format="yyyy-MM-dd"
            value={dateStart}
            onChange={(newValue) => setDateStart(newValue)}
          />
          <DatePicker
            label="End Date"
            format="yyyy-MM-dd"
            value={dateEnd}
            onChange={(newValue) => setDateEnd(newValue)}
          />
          {/* <FormControl>
            <FormLabel>Report Type</FormLabel>
            <RadioGroup
              row
              name="row-radio-buttons-group"
              value={reportType}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="detailed"
                control={<Radio color="success" />}
                label="detailed"
              />
              <FormControlLabel
                value="summary"
                control={<Radio color="success" />}
                label="summary"
              />
            </RadioGroup>
          </FormControl> */}
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Report</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={reportType}
              label="Report"
              onChange={handleSelectChange}
            >
              <MenuItem value={'detailed'}>Detailed</MenuItem>
              <MenuItem value={'summary'}>Summary</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" endIcon={<SendIcon />}>
            Submit
          </Button>
        </Stack>
        <Box m="40px 0 0 0" height="10vh">
          {dateStart && (
            <div>Formatted Date: {format(dateStart, 'yyyy-MM-dd')}</div>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Appointment;
