// useAppointmentData.ts
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { RequestParameters, ReportType } from '../../types/koreTypes';
import { fetchAppointmentData } from '../data/koreBotDataFetcher';

const useAppointmentData = (
  dateStart: string,
  dateEnd: string,
  reportType: string
) => {
  const params: RequestParameters = {
    bot: 'appointment',
    reportType: reportType as ReportType,
    format: 'html',
    dateStart,
    dateEnd,
  };
  return fetchAppointmentData(params);
};

export default useAppointmentData;

// const params: RequestParameters = {
//   bot: 'appointment',
//   reportType: reportType as ReportType,
//   format: 'html',
//   dateStart,
//   dateEnd,
// };

// const queryKey = ['appointments', params];

// const options = () => ({
//   queryKey,
// } as UseQueryOptions);

// return useQuery(options, () => fetchAppointmentData(params));
