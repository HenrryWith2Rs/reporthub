import { Box, useTheme } from '@mui/material';

import { tokens } from '../../ThemeRegistry/theme';
import Header from '../../components/Header';

const Appointment = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Appointment" subtitle="Kore Appointment Bot reports" />
      <Box m="40px 0 0 0" height="75vh">
        Appointment
      </Box>
    </Box>
  );
};

export default Appointment;
