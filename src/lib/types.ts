export type Consultation = {
  id: string;
  patientAddress: string;
  doctorAddress: string;
  timestamp: string;
  date: string;
  summaryLink: string;
  encryptedSummary?: string;
};
