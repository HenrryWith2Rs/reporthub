// koreDataUtils.ts
import React, { ReactNode } from 'react';
import { BotType, ReportType } from '../../types/koreTypes';
import { generateHtmlView } from '../handlers/htmlHandler';

export function renderByFormat(
  resultsArray: any[],
  bot: BotType,
  reportType: ReportType,
  viewAs: string,
  date: string
): ReactNode {
  let content: ReactNode = null;

  switch (viewAs) {
    case 'html':
      content = generateContent(resultsArray, bot, reportType, viewAs, date);
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

const generateContent = (
  resultsArray: any[],
  bot: BotType,
  reportType: ReportType,
  viewAs: string,
  date: string
): ReactNode => {
  // ... (your existing code)

  let generatedContent: ReactNode = null;

  if (typeof (window as any)[generatedFunctionName] === 'function') {
    generatedContent = (generateHtmlView as any)[generatedFunctionName](
      date,
      resultsArray
    );
  } else {
    console.error(`Function ${generatedFunctionName} does not exist`);
    // handle the case where the function doesn't exist
  }

  return generatedContent;
};
