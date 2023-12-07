import { useTheme } from '@mui/material';
import { tokens } from '../../ThemeRegistry/theme';

const Appointment = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <div>Appointment</div>
    </>
  );
};

export default Appointment;
