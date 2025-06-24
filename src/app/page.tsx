
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Stethoscope, Shield, Database, User, Server, FileText, Upload, Download, VenetianMask } from 'lucide-react';
import { IconPolygon, IconIpfs, IconCeramic, IconLogo } from '@/components/icons';
import ConnectWalletButton from '@/components/connect-wallet-button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <Link href="#" className="flex items-center justify-center gap-2" prefetch={false}>
          <IconLogo className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-headline">MediLog</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <ConnectWalletButton />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-card">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Your Health, Your Data, Your Control
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    MediLog provides a secure, decentralized platform for managing medical records, putting you back in control of your sensitive health information.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Link href="/doctor/dashboard" className="w-full">
                    <Button size="lg" className="w-full">
                      <Stethoscope className="mr-2 h-5 w-5" /> Doctor Dashboard
                    </Button>
                  </Link>
                  <Link href="/patient/dashboard" className="w-full">
                    <Button size="lg" variant="secondary" className="w-full">
                      <User className="mr-2 h-5 w-5" /> Patient Dashboard
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                 <Stethoscope className="h-48 w-48 text-primary/10" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Technology</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Built on a Foundation of Trust</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We leverage cutting-edge decentralized technologies to ensure your data is secure, private, and always accessible to you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 pt-12">
              <div className="grid gap-1 text-center">
                 <IconPolygon className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-lg font-bold font-headline">Polygon</h3>
                <p className="text-sm text-muted-foreground">For fast, low-cost, and secure transactions on the blockchain, ensuring the integrity of your medical log entries.</p>
              </div>
              <div className="grid gap-1 text-center">
                <IconIpfs className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-lg font-bold font-headline">IPFS</h3>
                <p className="text-sm text-muted-foreground">Your encrypted medical documents are stored on the InterPlanetary File System for resilient, decentralized storage.</p>
              </div>
              <div className="grid gap-1 text-center">
                <IconCeramic className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-lg font-bold font-headline">Ceramic</h3>
                <p className="text-sm text-muted-foreground">Manages decentralized identities and dynamic data, linking your records to you without a central server.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">A Simple & Secure Process</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Follow how MediLog protects and manages your data at every step.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl gap-12 pt-12">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <Card className="w-full max-w-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Stethoscope /> For Doctors</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center">1</div>
                      <p className="flex-1 pt-1">Add a new consultation log using the patient's public wallet address.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center">2</div>
                      <p className="flex-1 pt-1">Upload an encrypted summary of the consultation. Only the patient can decrypt it.</p>
                    </div>
                     <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center">3</div>
                      <p className="flex-1 pt-1">The record is immutably stored on the blockchain, linked to both doctor and patient.</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="w-full max-w-sm">
                   <CardHeader>
                    <CardTitle className="flex items-center gap-2"><User /> For Patients</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center">1</div>
                      <p className="flex-1 pt-1">Connect your wallet to securely access your personal dashboard.</p>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center">2</div>
                      <p className="flex-1 pt-1">View a complete history of your consultation logs from various doctors.</p>
                    </div>
                     <div className="flex items-start gap-4">
                       <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center">3</div>
                      <p className="flex-1 pt-1">Download and decrypt your medical summaries with your private key anytime.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 MediLog. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
