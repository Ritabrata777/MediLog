"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { handleGenerateSummary } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles, Copy } from "lucide-react";

const formSchema = z.object({
  patientAddress: z.string().min(1, "Patient address is required."),
  doctorNotes: z.string().min(10, "Doctor notes must be at least 10 characters."),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate & Sign Summary
        </>
      )}
    </Button>
  );
}

export default function AddConsultationForm() {
  const initialState = { message: "", errors: {}, summary: null };
  const [state, dispatch] = useFormState(handleGenerateSummary, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [summary, setSummary] = useState<string | null>(null);

  useEffect(() => {
    if (state.message && !state.summary) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
    if (state.summary) {
      toast({
        title: "Success",
        description: state.message,
      });
      setSummary(state.summary);
      formRef.current?.reset();
    }
  }, [state, toast]);

  const copyToClipboard = () => {
    if (summary) {
      navigator.clipboard.writeText(summary);
      toast({
        title: "Copied!",
        description: "Encrypted summary copied to clipboard.",
      });
    }
  };


  if (summary) {
    return (
      <Card className="bg-secondary">
        <CardHeader>
          <CardTitle>Summary Generated</CardTitle>
          <CardDescription>
            The encrypted summary is ready. Copy and store it securely.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Textarea
              readOnly
              value={summary}
              className="pr-10 font-mono text-xs h-32 bg-background"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-7 w-7"
              onClick={copyToClipboard}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setSummary(null)} variant="outline" className="w-full">
            Create Another
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <form ref={formRef} action={dispatch} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="patientAddress">Patient Wallet Address</Label>
        <Input
          id="patientAddress"
          name="patientAddress"
          placeholder="0x..."
          required
          className="font-code"
        />
        {state.errors?.patientAddress && (
          <p className="text-sm font-medium text-destructive">
            {state.errors.patientAddress[0]}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="doctorNotes">Doctor's Notes</Label>
        <Textarea
          id="doctorNotes"
          name="doctorNotes"
          placeholder="Enter consultation details, observations, and prescription..."
          required
          className="min-h-[120px]"
        />
        {state.errors?.doctorNotes && (
          <p className="text-sm font-medium text-destructive">
            {state.errors.doctorNotes[0]}
          </p>
        )}
      </div>
      <SubmitButton />
    </form>
  );
}
