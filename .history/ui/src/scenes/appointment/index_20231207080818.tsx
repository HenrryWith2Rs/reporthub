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
  CircularProgress,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format } from 'date-fns';
import { getLastNDays } from '../../utils/dateUtils';
import { ReportType } from '../../types/koreTypes';
import useBotData from '../../api/dataHooks/useAppointmentData';
import BotReport from '../../components/BotReport';

const Appointment = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // State variables
  const [dateStart, setDateStart] = useState<Date | null>(new Date());
  const [dateEnd, setDateEnd] = useState<Date | null>(new Date());
  const [reportType, setReportType] = useState<ReportType>('summary');
  const [isFetchEnabled, setIsFetchEnabled] = useState<boolean>(false);

  // Effect to set initial date values
  useEffect(() => {
    const { startDate, endDate } = getLastNDays(1);
    setDateStart(startDate);
    setDateEnd(endDate);
  }, []);

  // Format date values
  const formattedStartDate = formatDate(dateStart);
  const formattedEndDate = formatDate(dateEnd);

  // Fetch data using useBotData
  const { data, isFetching, error, refetch } = useBotData(
    'appointment',
    formattedStartDate,
    formattedEndDate,
    reportType,
    'html',
    isFetchEnabled
  );

  // Log loading, error, or API response
  if (isFetching) {
    console.log('Loading...');
  } else if (error) {
    console.error('Error fetching data');
  } else if (data) {
    console.log('API Response:', data);
    // Display data or update state as needed
  }

  // Handle select change
  const handleSelectChange = (event: SelectChangeEvent) => {
    setReportType(event.target.value as ReportType);
  };

  // Handle form submission
  const handleSubmit = () => {
    setIsFetchEnabled(true); // Enable fetching
    refetch(); // Trigger API call
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
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Report</InputLabel>
            <Select
              value={reportType}
              label="Report"
              onChange={handleSelectChange}
            >
              <MenuItem value={'summary'}>Summary</MenuItem>
              <MenuItem value={'detailed'}>Detailed</MenuItem>
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
        <Box m="40px 0 0 0" height="100vh">
          {isFetching ? (
            <CircularProgress />
          ) : error ? (
            <div>Error fetching data. Please try again.</div>
          ) : data ? (
            <BotReport html={data.message} />
          ) : (
            <div>Click on the submit button to generate a report</div>
          )}
        </Box>
      </Box>
    </Box>
  );
};

const formatDate = (date: Date | null): string => {
  return date ? format(date, 'yyyy-MM-dd') : '';
};

export default Appointment;
