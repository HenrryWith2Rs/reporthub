// appointment/index.ts

import { useState, useEffect } from 'react';
import { tokens } from '../../ThemeRegistry/theme';
import Header from '../../components/Header';
import {
  useTheme,
  Box,
  Stack,
  Button,
  IconButton,
  MenuItem,
  InputLabel,
  FormControl,
  CircularProgress,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DatePicker, ArrowLeftIcon, ArrowRightIcon } from '@mui/x-date-pickers';
import {
  getLastNDays,
  formatDate,
  decreaseDateByOneDay,
  increaseDateByOneDay,
} from '../../utils/dateUtils';
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
  // const [botData, setBotData] = useState<string | null>(null);

  // Effect to set initial date values
  useEffect(() => {
    let isMounted = true;
    const { startDate, endDate } = getLastNDays(1);

    if (isMounted) {
      setDateStart(startDate);
      setDateEnd(endDate);
    }

    return () => {
      isMounted = false;
    };
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

  // Handle left arrow button click
  const handleLeftArrowClick = () => {
    setDateStart(decreaseDateByOneDay(dateStart));
    setDateEnd(decreaseDateByOneDay(dateEnd));
  };

  // Handle right arrow button click
  const handleRightArrowClick = () => {
    setDateStart(increaseDateByOneDay(dateStart));
    setDateEnd(increaseDateByOneDay(dateEnd));
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
        <Stack direction="row" spacing={1}>
          <IconButton onClick={handleLeftArrowClick}>
            <ArrowLeftIcon />
          </IconButton>
          <DatePicker
            label="Start Date"
            format="yyyy-MM-dd"
            value={dateStart}
            onChange={(newValue) => setDateStart(newValue)}
            minDate={new Date('2023-09-02')}
          />
          <DatePicker
            label="End Date"
            format="yyyy-MM-dd"
            value={dateEnd}
            onChange={(newValue) => setDateEnd(newValue)}
            maxDate={new Date()}
          />
          <IconButton onClick={handleRightArrowClick}>
            <ArrowRightIcon />
          </IconButton>
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
            <CircularProgress sx={{ color: colors.greenAccent[400] }} />
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

export default Appointment;
