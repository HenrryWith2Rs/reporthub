// processRequest.ts
import { Request, Response } from 'express';
import {
  BotType,
  ReportType,
  FormatType,
  RequestParameters,
  ReportHandler,
} from '../types/koreTypes';

type BotHandlers = Record<ReportType, Record<FormatType, ReportHandler>>;

type Handlers = {
  [BotType: string]: BotHandlers;
};

export function processRequest(
  req: Request,
  res: Response,
  botType: BotType,
  botLookup: Record<BotType, ReportType[]>,
  handlers: Handlers
): void {
  const params: RequestParameters = req.body;

  // Validate bot type
  if (!botLookup[botType]?.includes(params.reportType)) {
    res.status(400).json({ error: 'Invalid bot type' });
    return;
  }

  // Validate report type and format
  const reportHandlers = handlers[botType]?.[params.reportType];
  if (!reportHandlers || !reportHandlers[params.format]) {
    res.status(400).json({ error: 'Invalid report type or format' });
    return;
  }

  // Retrieve the handler function based on parameters
  const handler = reportHandlers[params.format];

  if (handler) {
    const responseMessage = handler(params.dateStart, params.dateEnd);
    res.json({ success: true, message: responseMessage });
  } else {
    res.status(400).json({ error: 'Invalid combination of parameters' });
  }
}
