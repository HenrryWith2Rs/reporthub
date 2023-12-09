// src/utils/dateUtils.ts

import { format } from 'date-fns';

export const getLastNDays = (n: number): { startDate: Date; endDate: Date } => {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - n);

  return { startDate, endDate };
};

export const decreaseDateByOneDay = (date: Date | null): Date | null => {
  return date ? new Date(date.getTime() - 24 * 60 * 60 * 1000) : null;
};

export const increaseDateByOneDay = (date: Date | null): Date | null => {
  return date ? new Date(date.getTime() + 24 * 60 * 60 * 1000) : null;
};

export const formatDate = (date: Date | null): string => {
  return date ? format(date, 'yyyy-MM-dd') : '';
};
