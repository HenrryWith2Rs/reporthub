// billController.ts
import { Request, Response } from 'express';
import {
  BotType,
  ReportType,
  FormatType,
  RequestParameters,
} from '../types/koreTypes';
import { billServiceFunctions } from '../services/billService';
import { processRequest } from '../utils/processRequest';

// Define lookup tables based on types
const billBotLookup: Record<BotType, ReportType[]> = {
  billing: ['detailed', 'summary'],
  appointment: [],
};

const billReportTypeLookup: Record<ReportType, FormatType[]> = {
  detailed: ['json', 'html', 'pdf'],
  summary: ['json', 'html', 'pdf'],
};

// Define handlers based on types
const billHandlers = {
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
};

export function processBillRequest(req: Request, res: Response): void {
  processRequest(req, res, 'billing', billBotLookup, billHandlers);
}
