import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { format } from 'date-fns';
import { fetchAppointmentData } from '../koreBotDataFetcher';
import { RequestParameters, ReportType } from '../../types/koreTypes';

const useAppointmentData = (
  dateStart: Date,
  dateEnd: Date,
  reportType: string
) => {
  const params: RequestParameters = {
    bot: 'appointment',
    reportType: reportType as ReportType,
    format: 'html',
    dateStart: format(dateStart, 'yyyy-MM-dd'),
    dateEnd: format(dateEnd, 'yyyy-MM-dd'),
  };

  const queryKey = ['appointments', params];

  const options: UseQueryOptions = {
    queryKey,
  };

  return useQuery(options);
};

export default useAppointmentData;
