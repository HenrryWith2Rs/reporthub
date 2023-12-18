// useKoreBotData.ts
import { useQuery } from '@tanstack/react-query';
import {
  RequestParameters,
  BotType,
  ReportType,
  FormatType,
} from '../../types/koreTypes';
import {
  fetchAppointmentData,
  fetchBillingData,
} from '../api/koreBotDataFetcher';

export const useAppointmentData = (
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
  });

  return {
    data,
    isFetching,
    error,
    refetch,
  };
};

export const useBillingData = (
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
    queryFn: () => fetchBillingtData(params),
    enabled: isFetchEnabled,
  });

  return {
    data,
    isFetching,
    error,
    refetch,
  };
};
