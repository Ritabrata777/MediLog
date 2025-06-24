
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import AddConsultationForm from './add-consultation-form';
import { mockDoctorConsultations } from '@/lib/data';
import { Stethoscope, FileText, PlusCircle } from "lucide-react";
import { useWallet } from "@/context/wallet-context";

export default function DoctorDashboardPage() {
  const consultations = mockDoctorConsultations;
  const { userAddress } = useWallet();

  return (
    <div className="grid flex-1 items-start gap-4 md:gap-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Doctor Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Your Address</CardTitle>
              <Stethoscope className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold font-code">{userAddress || 'Not Connected'}</div>
              <p className="text-xs text-muted-foreground">
                Polygon Network
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
          <Card className="lg:col-span-1">
             <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle className="flex items-center gap-2"><PlusCircle /> Add Consultation Log</CardTitle>
                <CardDescription>
                  Enter patient details and notes to generate a secure summary.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <AddConsultationForm />
            </CardContent>
          </Card>

           <Card className="lg:col-span-1">
            <CardHeader className="px-7">
              <CardTitle className="flex items-center gap-2"><FileText /> Past Consultations</CardTitle>
              <CardDescription>
                A list of your recent consultation logs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Date
                    </TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {consultations.map((consultation) => (
                    <TableRow key={consultation.id}>
                      <TableCell>
                        <div className="font-medium font-code">{consultation.patientAddress}</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        {consultation.date}
                      </TableCell>
                      <TableCell className="text-right">
                         <Button size="sm" variant="outline">View</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
