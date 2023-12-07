import { format, subDays } from 'date-fns';

export function getLastNDays(n: number): {
  startDate: string;
  endDate: string;
} {
  const currentDate = new Date();
  const endDate = format(subDays(currentDate, 1), 'yyyy-MM-dd');
  const startDate = format(subDays(currentDate, n), 'yyyy-MM-dd');

  return { startDate, endDate };
}
