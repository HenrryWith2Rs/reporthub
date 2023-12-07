// useBotData.ts
import { useQuery } from '@tanstack/react-query';
import {
  RequestParameters,
  BotType,
  ReportType,
  FormatType,
} from '../../types/koreTypes';
import { fetchAppointmentData } from '../data/koreBotDataFetcher';

const useBotData = (
  botType: string,
  dateStart: string,
  dateEnd: string,
  reportType: string,
  format: string
) => {
  const params: RequestParameters = {
    bot: botType as BotType,
    reportType: reportType as ReportType,
    format: format as FormatType,
    dateStart,
    dateEnd,
  };

  const { data, isFetching, error, refetch } = useQuery({
    queryKey: [`${botType}Data`, dateStart, dateEnd],
    queryFn: () => fetchAppointmentData(params),
    enabled: true, // You can adjust the condition for enabling/disabling fetching
  });

  return {
    data,
    isFetching,
    error,
    refetch,
  };
};

export default useBotData;
