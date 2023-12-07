import { subDays, format } from 'date-fns';

export function getLastNDays(n: number): {
  startDate: Date;
  endDate: Date;
} {
  const currentDate = new Date();
  const endDate = subDays(currentDate, 1);
  const startDate = subDays(currentDate, n);

  return { startDate, endDate };
}
