// billController.ts
import { Request, Response } from 'express';
import {
  BotType,
  ReportType,
  FormatType,
  RequestParameters,
} from 'types/koreTypes';

import { billServiceFunctions } from '../services/billService';

// Define lookup tables based on types
const billBotLookup: Record<BotType, ReportType[]> = {
  billing: ['detailed', 'summary'],
  appointment: [],
};

const billReportTypeLookup: Record<ReportType, FormatType[]> = {
  detailed: ['json', 'html', 'pdf'],
  summary: ['json', 'html', 'pdf'],
};

type BillReportHandler = (dateStart: string, dateEnd: string) => string;

// Define handlers based on types
const billHandlers: Record<
  BotType,
  Record<ReportType, Record<FormatType, BillReportHandler>>
> = {
  billing: {
    detailed: {
      json: billServiceFunctions.handleBillingDetailedJson,
      html: billServiceFunctions.handleBillingDetailedHtml,
      pdf: billServiceFunctions.handleBillingDetailedPdf,
    },
    summary: {
      json: billServiceFunctions.handleBillingSummaryJson,
      html: billServiceFunctions.handleBillingSummaryHtml,
      pdf: billServiceFunctions.handleBillingSummaryPdf,
    },
  },
  appointment: undefined,
};

export function processBillRequest(req: Request, res: Response): void {
  const params: RequestParameters = req.body;

  // Validate parameters against the lookup tables
  if (
    !billBotLookup[params.bot]?.includes(params.reportType) ||
    !billReportTypeLookup[params.reportType]?.includes(params.format)
  ) {
    res.status(400).json({ error: 'Invalid request parameters' });
    return;
  }

  // Retrieve the handler function based on parameters
  const handler =
    billHandlers[params.bot]?.[params.reportType]?.[params.format];

  if (handler) {
    const responseMessage = handler(params.dateStart, params.dateEnd);
    res.json({ success: true, message: responseMessage });
  } else {
    res.status(400).json({ error: 'Invalid combination of parameters' });
  }
}
