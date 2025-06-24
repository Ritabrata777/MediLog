
'use client';

import { useWallet } from '@/context/wallet-context';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, LogOut, Loader2 } from 'lucide-react';
import type { Connector } from 'wagmi';

export default function ConnectWalletButton() {
  const { isConnected, isConnecting, userAddress, role, disconnectWallet, connectors, connectWallet } = useWallet();

  const handleConnect = (connector: Connector, selectedRole: 'doctor' | 'patient') => {
    connectWallet({ connector, role: selectedRole });
  };

  if (isConnected && userAddress) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <span className="font-code">{userAddress}</span>
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Connected as {role}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => disconnectWallet()}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Disconnect</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  if (isConnecting) {
      return (
        <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Connecting...
        </Button>
      )
  }

  return (
     <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          Connect Wallet
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Connect as</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Doctor</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {connectors.map((connector) => (
                <DropdownMenuItem
                  key={connector.uid}
                  onClick={() => handleConnect(connector, 'doctor')}
                  disabled={isConnecting}
                >
                  {connector.name}
                </DropdownMenuItem>
              ))}
               {connectors.length === 0 && <DropdownMenuItem disabled>No wallets found</DropdownMenuItem>}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Patient</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {connectors.map((connector) => (
                <DropdownMenuItem
                  key={connector.uid}
                  onClick={() => handleConnect(connector, 'patient')}
                  disabled={isConnecting}
                >
                  {connector.name}
                </DropdownMenuItem>
              ))}
              {connectors.length === 0 && <DropdownMenuItem disabled>No wallets found</DropdownMenuItem>}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}
