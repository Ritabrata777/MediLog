import type { Consultation } from './types';

export const mockDoctorConsultations: Consultation[] = [
  {
    id: '1',
    patientAddress: '0x1234...abcd',
    doctorAddress: '0xDocA...ddr1',
    timestamp: '2024-07-28 10:00 AM',
    date: 'July 28, 2024',
    summaryLink: '#',
  },
  {
    id: '2',
    patientAddress: '0x5678...efgh',
    doctorAddress: '0xDocA...ddr1',
    timestamp: '2024-07-27 02:30 PM',
    date: 'July 27, 2024',
    summaryLink: '#',
  },
];

export const mockPatientConsultations: Consultation[] = [
  {
    id: '1',
    patientAddress: '0x5678...efgh',
    doctorAddress: '0xDocA...ddr1',
    timestamp: '2024-07-27 02:30 PM',
    date: 'July 27, 2024',
    summaryLink: '#',
  },
   {
    id: '3',
    patientAddress: '0x5678...efgh',
    doctorAddress: '0xDocB...ddr2',
    timestamp: '2024-06-15 09:15 AM',
    date: 'June 15, 2024',
    summaryLink: '#',
  },
];
