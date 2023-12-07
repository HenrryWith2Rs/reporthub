// types.ts
export type BotType = 'appointment' | 'billing';
export type ReportType = 'detailed' | 'summary';
export type FormatType = 'pdf' | 'json' | 'html';

export type RequestParameters = {
  bot: BotType;
  reportType: ReportType;
  format: FormatType;
  dateStart: string;
  dateEnd: string;
};
