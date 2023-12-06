import { Request, Response } from 'express';
import {
  BotType,
  ReportType,
  FormatType,
  RequestParameters,
} from 'types/koreTypes';

// Define lookup tables based on types
const botLookup: Record<BotType, ReportType[]> = {
  appointment: ['detailed', 'summary'],
  billing: ['detailed', 'summary'],
};

const reportTypeLookup: Record<ReportType, FormatType[]> = {
  detailed: ['json', 'html', 'pdf'],
  summary: ['json', 'html', 'pdf'],
};

type ReportHandler = (dateStart: string, dateEnd: string) => string;

// Define handlers based on types
const handlers: Record<
  BotType,
  Record<ReportType, Record<FormatType, ReportHandler>>
> = {
  appointment: {
    detailed: {
      json: handleAppointmentDetailedJson,
      html: handleAppointmentDetailedHtml,
      pdf: handleAppointmentDetailedPdf,
    },
    summary: {
      json: handleAppointmentSummaryJson,
      html: handleAppointmentSummaryHtml,
      pdf: handleAppointmentSummaryPdf,
    },
  },
  billing: {
    detailed: {
      json: handleBillingDetailedJson,
      html: handleBillingDetailedHtml,
      pdf: handleBillingDetailedPdf,
    },
    summary: {
      json: handleBillingSummaryJson,
      html: handleBillingSummaryHtml,
      pdf: handleBillingSummaryPdf,
    },
  },
};

export function processRequest(req: Request, res: Response): void {
  const params: RequestParameters = req.body;

  // Validate parameters against the lookup tables
  if (
    !botLookup[params.bot]?.includes(params.reportType) ||
    !reportTypeLookup[params.reportType]?.includes(params.format)
  ) {
    res.status(400).json({ error: 'Invalid request parameters' });
    return;
  }

  // Retrieve the handler function based on parameters
  const handler = handlers[params.bot]?.[params.reportType]?.[params.format];

  if (handler) {
    const responseMessage = handler(params.dateStart, params.dateEnd);
    res.json({ success: true, message: responseMessage });
  } else {
    res.status(400).json({ error: 'Invalid combination of parameters' });
  }
}
