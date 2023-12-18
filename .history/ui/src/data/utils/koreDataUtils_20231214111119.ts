// koreDataUtils.ts
import { BotType, ReportType } from '../../types/koreTypes';
import { generateHtmlView } from '../handlers/htmlHandler';
export function renderByFormat(
  resultsArray: any[],
  bot: BotType,
  reportType: ReportType,
  viewAs: string,
  date: string
) {
  let functionName: string = '';
  switch (viewAs) {
    case 'html':
      return generateContent(resultsArray, bot, reportType, viewAs, date);
    case 'graph':
      return 'graphFunction';
    case 'table':
      return 'tableFunction';
  }
}
const generateContent = (
  resultsArray: any[],
  bot: BotType,
  reportType: ReportType,
  viewAs: string,
  date: string
) => {
  const mapBot = (bot: BotType): string =>
    bot === 'appointment' ? 'Appt' : 'Bill';
  const mapReportType = (reportType: ReportType): string =>
    reportType === 'detailed' ? 'Dtld' : 'Smmr';
  const mapViewType = (viewAs: string): string =>
    viewAs.charAt(0).toUpperCase() + viewAs.slice(1);
  const botValue = mapBot(bot);
  const reportTypeValue = mapReportType(reportType);
  const viewAsValue = mapViewType(viewAs);
  const generatedFunctionName:
    | string
    | void = `generate${botValue}${reportTypeValue}${viewAsValue}`;
  if (typeof (window as any)[generatedFunctionName] === 'function') {
    (generateHtmlView as any)[generatedFunctionName](date, resultsArray);
  } else console.error(`Function ${generatedFunctionName} does not exist`);
};
