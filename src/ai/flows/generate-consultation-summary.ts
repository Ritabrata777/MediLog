// src/ai/flows/generate-consultation-summary.ts
'use server';

/**
 * @fileOverview Generates an encrypted draft consultation summary from doctor's notes.
 *
 * - generateConsultationSummary - A function that handles the generation of the consultation summary.
 * - GenerateConsultationSummaryInput - The input type for the generateConsultationSummary function.
 * - GenerateConsultationSummaryOutput - The return type for the generateConsultationSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateConsultationSummaryInputSchema = z.object({
  doctorNotes: z
    .string()
    .describe('The raw, unencrypted notes taken by the doctor during the consultation.'),
  patientAddress: z.string().describe('The address of the patient.'),
});
export type GenerateConsultationSummaryInput = z.infer<typeof GenerateConsultationSummaryInputSchema>;

const GenerateConsultationSummaryOutputSchema = z.object({
  encryptedSummary: z
    .string()
    .describe(
      'The encrypted consultation summary, ready to be stored securely. The encryption algorithm and key used must be pre-negotiated between doctor and patient.'
    ),
});
export type GenerateConsultationSummaryOutput = z.infer<typeof GenerateConsultationSummaryOutputSchema>;

export async function generateConsultationSummary(
  input: GenerateConsultationSummaryInput
): Promise<GenerateConsultationSummaryOutput> {
  return generateConsultationSummaryFlow(input);
}

const consultationSummaryPrompt = ai.definePrompt({
  name: 'consultationSummaryPrompt',
  input: {schema: GenerateConsultationSummaryInputSchema},
  output: {schema: GenerateConsultationSummaryOutputSchema},
  prompt: `You are an AI assistant helping a doctor create a consultation summary.

  Based on the doctor's notes, create a comprehensive yet concise summary of the consultation.
  The summary should be factual, avoid speculation, and focus on key details relevant to the patient's medical record.
  Assume the summary will be encrypted before storage, so there is no need to obfuscate patient identifying information.

  Doctor's Notes: {{{doctorNotes}}}

  Patient Address: {{{patientAddress}}}

  Encrypted Summary:`,
});

const generateConsultationSummaryFlow = ai.defineFlow(
  {
    name: 'generateConsultationSummaryFlow',
    inputSchema: GenerateConsultationSummaryInputSchema,
    outputSchema: GenerateConsultationSummaryOutputSchema,
  },
  async input => {
    const {output} = await consultationSummaryPrompt(input);
    return output!;
  }
);
