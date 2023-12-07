import axios from 'axios';
import { RequestParameters } from '../../types/koreTypes';

export const fetchAppointmentData = async (params: RequestParameters) => {
  console.log(params);
  try {
    const response = await axios.get('http://localhost:3000/api/kore/appt', {
      params,
    });

    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch appointment data -> ${error}`);
  }
};
