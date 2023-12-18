import React, { useState } from 'react';
import TagsViewer from '../../components/TagsViewer';
import TableViewer from '../../components/TableViewer';
import { BotType, ReportType } from '../../types/koreTypes';

export function tableHandler(
  apiResponse: any,
  bot: BotType,
  reportType: ReportType,
  date: string
) {
  return <div>tableHandler</div>;
}

export default tableHandler;
