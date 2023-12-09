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

export const decreaseDateByOneDay = (date: Date | null): Date | null => {
  return date ? new Date(date.getTime() - 24 * 60 * 60 * 1000) : null;
};

export const increaseDateByOneDay = (date: Date | null): Date | null => {
  return date ? new Date(date.getTime() + 24 * 60 * 60 * 1000) : null;
};

export const formatDate = (date: Date | null): string => {
  return date ? format(date, 'yyyy-MM-dd') : '';
};
