import { Request, Response } from 'express';
import {
  BotType,
  ReportType,
  FormatType,
  RequestParameters,
} from 'types/koreTypes';

import { apptServiceFunctions } from '../services/apptService';

// Define lookup tables based on types
const botLookup: Record<BotType, ReportType[]> = {
  appointment: ['detailed', 'summary'],
  billing: [],
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
      json: apptServiceFunctions.handleAppointmentDetailedJson,
      html: apptServiceFunctions.handleAppointmentDetailedHtml,
      pdf: apptServiceFunctions.handleAppointmentDetailedPdf,
    },
    summary: {
      json: apptServiceFunctions.handleAppointmentSummaryJson,
      html: apptServiceFunctions.handleAppointmentSummaryHtml,
      pdf: apptServiceFunctions.handleAppointmentSummaryPdf,
    },
  },
  billing: undefined,
};

export function processApptRequest(req: Request, res: Response): void {
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
