import { useState, useEffect } from 'react';
import { tokens } from '../../ThemeRegistry/theme';
import Header from '../../components/Header';
import {
  useTheme,
  Box,
  Stack,
  Button,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format } from 'date-fns';

import { getLastNDays } from '../../utils/dateUtils';

const Appointment = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [dateStart, setDateStart] = useState<string | null>('');
  const [dateEnd, setDateEnd] = useState<string | null>(null);
  const [reportType, setReportType] = useState<string>('detailed');

  const handleSelectChange = (event: SelectChangeEvent) => {
    setReportType(event.target.value as string);
  };

  const handleSubmit = () => {
    // Log or use the values
    console.log('Date Start:', dateStart);
    console.log('Date End:', dateEnd);
    console.log('Report Type:', reportType);

    // Perform other actions here, e.g., send data to an API
  };

  // Use useEffect to set default values for dateStart and dateEnd on load
  useEffect(() => {
    const { startDate, endDate } = getLastNDays(1);
    setDateStart(startDate);
    setDateEnd(endDate);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <Box m="20px">
      <Header title="Appointment" subtitle="Kore Appointment Bot reports" />
      <Box m="40px 0 0 0" height="75vh">
        <Stack direction="row" spacing={2}>
          <DatePicker
            label="Start Date"
            format="yyyy-MM-dd"
            value={dateStart}
            onChange={(newValue) =>
              setDateStart(newValue ? newValue.toISOString().split('T')[0] : '')
            }
          />
          <DatePicker
            label="End Date"
            format="yyyy-MM-dd"
            value={dateEnd}
            onChange={(newValue) =>
              setDateEnd(newValue ? newValue.toISOString().split('T')[0] : null)
            }
          />
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
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Stack>
        <Box m="40px 0 0 0" height="10vh">
          <div>Date Start: {dateStart}</div>
          <div>Date End: {dateEnd}</div>
          <div>Report Type: {reportType}</div>
        </Box>
      </Box>
    </Box>
  );
};

export default Appointment;
