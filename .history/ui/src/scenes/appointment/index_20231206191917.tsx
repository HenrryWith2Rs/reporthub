import { useState } from 'react';
// Material-UI
import {
  useTheme,
  Box,
  Stack,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// Material-UI Icons
import SendIcon from '@mui/icons-material/Send';

// Date-related libraries
import { format } from 'date-fns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { getLastNDays } from '../../utils/dateUtils';

// Custom components
import Header from '../../components/Header';

// Theme-related
import { tokens } from '../../ThemeRegistry/theme';

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
            <div>Date Start: {format(dateStart, 'yyyy-MM-dd')}</div>
          )}
          {dateEnd && <div>Date End: {format(dateEnd, 'yyyy-MM-dd')}</div>}
          {reportType && <div>Report Type: {reportType}</div>}
        </Box>
      </Box>
    </Box>
  );
};

export default Appointment;
