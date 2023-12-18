// koreDataUtils.ts
import { ReactNode } from 'react';
import { BotType, ReportType } from '../../types/koreTypes';
import { htmlHandler } from '../handlers/htmlHandler';

export function renderByFormat(
  apiResponse: any,
  bot: BotType,
  reportType: ReportType,
  viewAs: string,
  date: string
): ReactNode {
  let content: ReactNode = null;

  switch (viewAs) {
    case 'html':
      content = htmlHandler(apiResponse, bot, reportType, date);
      break;
    case 'graph':
      // Handle graph content creation
      break;
    case 'table':
      // Handle table content creation
      break;
    default:
      // Handle other cases if needed
      break;
  }
  return content;
}
