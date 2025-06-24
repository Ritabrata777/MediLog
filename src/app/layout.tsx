
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { WalletProvider } from '@/context/wallet-context';
import { Providers } from '@/providers';

export const metadata: Metadata = {
  title: 'MediLog - Decentralized Health Records',
  description: 'Securely manage your medical history on the blockchain.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <Providers>
          <WalletProvider>
            {children}
            <Toaster />
          </WalletProvider>
        </Providers>
      </body>
    </html>
  );
}
