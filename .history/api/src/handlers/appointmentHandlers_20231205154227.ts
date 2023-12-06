// appointmentHandlers.ts
import { ReportHandler } from '../types/koreTypes';

export const handleAppointmentDetailedPdf: ReportHandler = (
  dateStart,
  dateEnd
) => {
  console.log(
    'Handling appointment detailed report in PDF format with dates:',
    dateStart,
    dateEnd
  );
};

export const handleAppointmentDetailedJson: ReportHandler = (
  dateStart,
  dateEnd
) => {
  console.log(
    'Handling appointment detailed report in JSON format with dates:',
    dateStart,
    dateEnd
  );
};

export const handleAppointmentDetailedHtml: ReportHandler = (
  dateStart,
  dateEnd
) => {
  console.log(
    'Handling appointment detailed report in HTML format with dates:',
    dateStart,
    dateEnd
  );
};
