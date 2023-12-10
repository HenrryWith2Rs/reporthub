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
  format: string,
  isFetchEnabled: boolean
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
    enabled: isFetchEnabled,
    staleTime: 1000 * 6, // one minute
  });

  return {
    data,
    isFetching,
    error,
    refetch,
  };
};

export default useBotData;
