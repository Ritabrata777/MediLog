
'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { LogOut, PanelLeft, Stethoscope, VenetianMask } from 'lucide-react';
import { IconLogo } from '@/components/icons';
import { useWallet } from '@/context/wallet-context';
import ConnectWalletButton from '@/components/connect-wallet-button';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isConnected, disconnectWallet } = useWallet();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    disconnectWallet();
  };
  
  const navLinks = (
    <>
      <SidebarMenuItem>
        <SidebarMenuButton href="/doctor/dashboard" tooltip="Doctor Dashboard" isActive={pathname.startsWith('/doctor')}>
          <Stethoscope />
          <span>Doctor</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton href="/patient/dashboard" tooltip="Patient Dashboard" isActive={pathname.startsWith('/patient')}>
          <VenetianMask />
          <span>Patient</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </>
  );

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar collapsible="icon" className="hidden md:flex">
          <SidebarContent>
            <SidebarHeader>
              <Link href="/" className="flex items-center gap-2 text-primary-foreground">
                <IconLogo className="w-6 h-6" />
                <span className="font-bold font-headline text-lg">MediLog</span>
              </Link>
            </SidebarHeader>
            <SidebarMenu>
              {navLinks}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={handleLogout} tooltip="Logout">
                  <LogOut />
                  <span>Logout</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <div className="flex flex-col flex-1 w-full">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="sm:max-w-xs bg-sidebar text-sidebar-foreground border-none p-0">
                  <SidebarContent className="p-4">
                    <SidebarHeader>
                      <Link href="/" className="flex items-center gap-2 text-primary-foreground">
                        <IconLogo className="w-6 h-6" />
                        <span className="font-bold font-headline text-lg">MediLog</span>
                      </Link>
                    </SidebarHeader>
                     <SidebarMenu>
                      {navLinks}
                    </SidebarMenu>
                  </SidebarContent>
              </SheetContent>
            </Sheet>
            <div className="ml-auto">
              <ConnectWalletButton />
            </div>
          </header>
          <main className="flex-1 p-4 sm:px-6 sm:py-0">
            {isConnected ? children : (
                <div className="flex items-center justify-center h-[calc(100vh-10rem)]">
                    <Card className="w-full max-w-md">
                        <CardHeader>
                            <CardTitle>Connect Your Wallet</CardTitle>
                            <CardDescription>
                                Please connect your wallet to access the dashboard. Select a role from the "Connect Wallet" button in the header.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            )}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
