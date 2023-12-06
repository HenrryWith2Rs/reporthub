import { Request, Response } from 'express';
import { BotType, ReportType, FormatType } from 'types/koreTypes';

interface RequestParameters {
  bot: BotType;
  reportType: ReportType;
  format: FormatType;
  dateStart: string;
  dateEnd: string;
}

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

// Example handler functions (replace with your actual logic)
// Appt Detailed
function handleAppointmentDetailedJson(
  dateStart: string,
  dateEnd: string
): string {
  return `Handling appointment detailed report in JSON format with dates: ${dateStart}, ${dateEnd}`;
}

function handleAppointmentDetailedHtml(
  dateStart: string,
  dateEnd: string
): string {
  return `Handling appointment detailed report in HTML format with dates: ${dateStart}, ${dateEnd}`;
}

function handleAppointmentDetailedPdf(
  dateStart: string,
  dateEnd: string
): string {
  return `Handling appointment detailed report in PDF format with dates: ${dateStart}, ${dateEnd}`;
}

// Appt Summary
function handleAppointmentSummaryJson(
  dateStart: string,
  dateEnd: string
): string {
  return `Handling appointment summary report in JSON format with dates: ${dateStart}, ${dateEnd}`;
}

function handleAppointmentSummaryHtml(
  dateStart: string,
  dateEnd: string
): string {
  return `Handling appointment summary report in HTML format with dates: ${dateStart}, ${dateEnd}`;
}

function handleAppointmentSummaryPdf(
  dateStart: string,
  dateEnd: string
): string {
  return `Handling appointment summary report in PDF format with dates: ${dateStart}, ${dateEnd}`;
}

// Bill Detailed
function handleBillingDetailedJson(dateStart: string, dateEnd: string): string {
  return `Handling billing detailed report in JSON format with dates: ${dateStart}, ${dateEnd}`;
}

function handleBillingDetailedHtml(dateStart: string, dateEnd: string): string {
  return `Handling billing detailed report in HTML format with dates: ${dateStart}, ${dateEnd}`;
}

function handleBillingDetailedPdf(dateStart: string, dateEnd: string): string {
  return `Handling billing detailed report in PDF format with dates: ${dateStart}, ${dateEnd}`;
}

// Bill Summary
function handleBillingSummaryJson(dateStart: string, dateEnd: string): string {
  return `Handling billing summary report in JSON format with dates: ${dateStart}, ${dateEnd}`;
}

function handleBillingSummaryHtml(dateStart: string, dateEnd: string): string {
  return `Handling billing summary report in HTML format with dates: ${dateStart}, ${dateEnd}`;
}

function handleBillingSummaryPdf(dateStart: string, dateEnd: string): string {
  return `Handling billing summary report in PDF format with dates: ${dateStart}, ${dateEnd}`;
}

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
