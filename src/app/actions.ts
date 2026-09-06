"use server";

import { generateConsultationSummary, GenerateConsultationSummaryInput } from "@/ai/flows/generate-consultation-summary";
import { encryptData } from "@/lib/encryption";
import { z } from "zod";

const formSchema = z.object({
  patientAddress: z.string().min(1, "Patient address is required."),
  doctorNotes: z.string().min(10, "Doctor notes must be at least 10 characters."),
});

export async function handleGenerateSummary(prevState: any, formData: FormData) {
  try {
    const rawFormData = {
      patientAddress: formData.get("patientAddress") as string,
      doctorNotes: formData.get("doctorNotes") as string,
    };

    const validatedFields = formSchema.safeParse(rawFormData);

    if (!validatedFields.success) {
      return {
        message: "Validation failed.",
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { patientAddress, doctorNotes } = validatedFields.data;

    const input: GenerateConsultationSummaryInput = {
      patientAddress,
      doctorNotes,
    };
    
    // Simulate a delay for a better user experience
    await new Promise(resolve => setTimeout(resolve, 1500));

    const result = await generateConsultationSummary(input);

    const secretKey = process.env.ENCRYPTION_MASTER_KEY;
    if (!secretKey) {
      throw new Error("ENCRYPTION_MASTER_KEY is not set in environment variables");
    }

    const { encryptedData } = encryptData(result.rawSummary, secretKey);

    // Placeholder for IPFS upload
    // const ipfsCid = await uploadToIPFS(encryptedData);

    return {
      message: "Summary generated successfully.",
      summary: encryptedData, // we return encryptedData instead of rawSummary
    };
  } catch (error) {
    console.error(error);
    return {
      message: "An unexpected error occurred. Please try again.",
    };
  }
}
