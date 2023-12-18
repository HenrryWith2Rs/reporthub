// koreDataUtils.ts
import { ReactNode } from 'react';
import { BotType, ReportType } from '../../types/koreTypes';
import { htmlHandler } from '../handlers/htmlHandler';
import tableHandler from '../handlers/tableHandler';

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
      content = tableHandler();
      break;
    default:
      // Handle other cases if needed
      break;
  }
  return content;
}

export function extractUniqueTags(resultsArray: any[]): string[] {
  const uniqueTagsSet = new Set<string>();

  resultsArray.forEach((element) => {
    const tags = element.Tags.split(',').map((tag: string) => tag.trim());
    tags.forEach((tag: string) => uniqueTagsSet.add(tag));
  });

  return Array.from(uniqueTagsSet);
}
