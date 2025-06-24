
'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { type Connector } from 'wagmi';

type WalletContextType = {
  isConnected: boolean;
  isConnecting: boolean;
  userAddress: string | null;
  role: 'doctor' | 'patient' | null;
  connectors: readonly Connector[];
  connectWallet: (args: { connector: Connector; role: 'doctor' | 'patient' }) => void;
  disconnectWallet: () => void;
};

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<'doctor' | 'patient' | null>(null);
  const router = useRouter();

  const { address, isConnected, isConnecting } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  
  const userAddress = isConnected && address ? `${address.slice(0, 6)}...${address.slice(-4)}` : null;

  const connectWallet = useCallback((args: { connector: Connector; role: 'doctor' | 'patient' }) => {
    setRole(args.role);
    connect({ connector: args.connector });
  }, [connect]);

  const disconnectWallet = useCallback(() => {
    disconnect();
    setRole(null);
    router.push('/');
  }, [disconnect, router]);

  useEffect(() => {
    if (isConnected && role) {
      if (role === 'doctor') {
        router.push('/doctor/dashboard');
      } else {
        router.push('/patient/dashboard');
      }
    }
  }, [isConnected, role, router]);

  // If the user disconnects from the wallet provider itself (e.g. MetaMask extension)
  useEffect(() => {
    if (!isConnected && role !== null) {
      setRole(null);
      router.push('/');
    }
  }, [isConnected, role, router]);

  return (
    <WalletContext.Provider value={{
      isConnected,
      isConnecting,
      userAddress,
      role,
      connectors,
      connectWallet,
      disconnectWallet,
     }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};
