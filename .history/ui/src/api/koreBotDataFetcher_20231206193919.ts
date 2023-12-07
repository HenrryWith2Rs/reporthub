import axios from 'axios';

export const fetchAppointmentData = async (
  startDate: string,
  endDate: string,
  reportType: string
) => {
  try {
    const response = await axios.get('your-api-endpoint', {
      params: {
        startDate,
        endDate,
        reportType,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch appointment data');
  }
};
