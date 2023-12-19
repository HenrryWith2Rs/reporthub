import {
  generateApptDetailedHtml,
  generateApptSummaryHtml,
  generateApptSmmrJson,
  generateApptDtldJson,
} from './serviceUtils';

// Appt Detailed
function handleAppointmentDetailedJson(dateStart: string, dateEnd: string) {
  return generateApptDtldJson();
}

function handleAppointmentDetailedHtml(
  dateStart: string,
  dateEnd: string
): string {
  return generateApptDetailedHtml();
}

function handleAppointmentDetailedPdf(
  dateStart: string,
  dateEnd: string
): string {
  return `Handling appointment detailed report in PDF format with dates: ${dateStart}, ${dateEnd}`;
}

// Appt Summary
function handleAppointmentSummaryJson(dateStart: string, dateEnd: string) {
  return generateApptSmmrJson();
}

function handleAppointmentSummaryHtml(
  dateStart: string,
  dateEnd: string
): string {
  return generateApptSummaryHtml();
}

function handleAppointmentSummaryPdf(
  dateStart: string,
  dateEnd: string
): string {
  return `Handling appointment summary report in PDF format with dates: ${dateStart}, ${dateEnd}`;
}

export const apptServiceFunctions = {
  handleAppointmentDetailedJson,
  handleAppointmentDetailedHtml,
  handleAppointmentDetailedPdf,
  handleAppointmentSummaryJson,
  handleAppointmentSummaryHtml,
  handleAppointmentSummaryPdf,
};
