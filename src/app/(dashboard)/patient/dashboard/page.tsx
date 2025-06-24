
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
import { mockPatientConsultations } from '@/lib/data';
import { VenetianMask, FileText, Download } from "lucide-react";
import { useWallet } from "@/context/wallet-context";

export default function PatientDashboardPage() {
  const consultations = mockPatientConsultations;
  const { userAddress } = useWallet();

  return (
    <div className="grid flex-1 items-start gap-4 md:gap-8">
      <div className="space-y-4">
         <h1 className="text-3xl font-bold tracking-tight font-headline">Patient Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Your Address</CardTitle>
              <VenetianMask className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold font-code">{userAddress || 'Not Connected'}</div>
              <p className="text-xs text-muted-foreground">
                Polygon Network
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><FileText /> Consultation History</CardTitle>
            <CardDescription>
              Your secure and private medical log. Only you can decrypt these records.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Doctor</TableHead>
                  <TableHead className="hidden sm:table-cell">Date</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {consultations.map((consultation) => (
                  <TableRow key={consultation.id}>
                    <TableCell>
                      <div className="font-medium font-code">{consultation.doctorAddress}</div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">{consultation.date}</TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Decrypt
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
