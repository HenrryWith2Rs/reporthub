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
import { RequestParameters, ReportType } from '../../types/koreTypes';
import { useQuery } from '@tanstack/react-query';
import { fetchAppointmentData } from '../../api/data/koreBotDataFetcher';

const Appointment = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [dateStart, setDateStart] = useState<Date | null>(new Date());
  const [dateEnd, setDateEnd] = useState<Date | null>(new Date());
  const [reportType, setReportType] = useState<ReportType>('detailed');
  // const [isFetchEnabled, setIsFetchEnabled] = useState<boolean>(true);

  const formattedStartDate = formatDate(dateStart);
  const formattedEndDate = formatDate(dateEnd);

  useEffect(() => {
    const { startDate, endDate } = getLastNDays(1);
    setDateStart(startDate);
    setDateEnd(endDate);
  }, []);

  const handleSelectChange = (event: SelectChangeEvent) => {
    setReportType(event.target.value as ReportType);
  };

  const { data, isFetching, error, refetch } = useQuery({
  queryKey: ['apptData'],
  queryFn: () => {
    return fetchAppointmentData({
      bot: 'appointment',
      reportType: reportType,
      format: 'html',
      dateStart: formattedStartDate,
      dateEnd: formattedEndDate,
    });
  },
  enabled: true,
});

  
    if (isFetching) {
      console.log('Fetching...');
    } else if (error) {
      console.error('Error fetching data');
    } else {
      console.log('API Response:', data);

      // Handle the API response as needed
      // ...
    }
  };

  const handleSubmit = () => {};

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

const formatDate = (date: Date | null): string => {
  return date ? format(date, 'yyyy-MM-dd') : '';
};

export default Appointment;
