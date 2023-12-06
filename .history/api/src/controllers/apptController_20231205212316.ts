// apptController.ts
import { Request, Response } from 'express';
import { BotType, ReportType } from '../types/koreTypes';
import { apptServiceFunctions } from '../services/apptService';
import { processRequest } from '../utils/processRequest';

// Define lookup tables based on types
const apptBotLookup: Record<BotType, ReportType[]> = {
  appointment: ['detailed', 'summary'],
  billing: [],
};

// Define handlers based on types
const apptHandlers = {
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
};

export function processApptRequest(req: Request, res: Response): void {
  processRequest(req, res, 'appointment', apptBotLookup, apptHandlers);
}
