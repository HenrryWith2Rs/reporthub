import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import {
  RequestParameters,
  BotType,
  ReportType,
  FormatType,
} from '../../types/koreTypes';

const useAppointmentData = (
  dateStart: Date,
  dateEnd: Date,
  reportType: string
) => {
  const params: RequestParameters = {
    bot: 'appointment',
    reportType: reportType as ReportType,
    format: 'html',
    dateStart,
    dateEnd,
  };

  const queryKey = ['appointments', params];

  const options: UseQueryOptions = {
    queryKey,
  };

  return useQuery(options);
};

export default useAppointmentData;
