import { useState } from 'react';
import { useTheme, Box, Stack } from '@mui/material';
import { tokens } from '../../ThemeRegistry/theme';
import Header from '../../components/Header';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { getLastNDays } from '../../utils/dateUtils';
import { format } from 'date-fns';

const Appointment = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [dateStart, setDateStart] = useState<Date | null>(new Date());

  return (
    <Box m="20px">
      <Header title="Appointment" subtitle="Kore Appointment Bot reports" />
      <Box m="40px 0 0 0" height="75vh">
        <Stack direction="row" spacing={2}>
          <DatePicker
            label="Start Date"
            format="yyyy-MM-dd"
            value={dateStart}
            onChange={(date: Date | null) => {
              const newDate = format(date, 'yyyy-MM-dd');
              setDateStart(newDate);
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Appointment;
