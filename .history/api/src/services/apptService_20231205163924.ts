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

export const apptControllerFunctions = {
  handleAppointmentDetailedJson,
  handleAppointmentDetailedHtml,
  handleAppointmentDetailedPdf,
  handleAppointmentSummaryJson,
  handleAppointmentSummaryHtml,
  handleAppointmentSummaryPdf,
};
