// lookupTables.ts
import { BotType, ReportType, FormatType } from '../types/koreTypes';

export const botLookup: Record<BotType, ReportType[]> = {
  appointment: ['detailed', 'summary'],
  billing: ['summary'],
};

export const reportTypeLookup: Record<ReportType, FormatType[]> = {
  detailed: ['pdf', 'json', 'html'],
  summary: ['pdf', 'json'],
};

export const formatLookup: Record<FormatType, ReportType[]> = {
  pdf: ['detailed', 'summary'],
  json: ['detailed', 'summary'],
  html: ['detailed'],
};
