import axios from 'axios';
import { RequestParameters } from '../types/koreTypes';

export const fetchAppointmentData = async (params: RequestParameters) => {
  try {
    const response = await axios.get('your-api-endpoint', {
      params,
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch appointment data');
  }
};
