// koreDataUtils.ts
import { ReactNode } from 'react';
import { BotType, ReportType } from '../../types/koreTypes';
import { HtmlHandler } from '../handlers/HtmlHandler';
import TableHandler from '../handlers/TableHandler';
import GraphHandler from '../handlers/GraphHandler';

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
      content = HtmlHandler(apiResponse, bot, reportType, date);
      break;
    case 'graph':
      content = (
        <GraphHandler
          apiResponse={apiResponse}
          bot={bot}
          reportType={reportType}
          date={date}
        />
      );
      break;
    case 'table':
      content = (
        <TableHandler
          apiResponse={apiResponse}
          bot={bot}
          reportType={reportType}
          date={date}
        />
      );
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
