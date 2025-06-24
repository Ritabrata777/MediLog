import { http, createConfig, type Connector } from 'wagmi'
import { polygon } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

// To use WalletConnect, you MUST get a project ID from https://cloud.walletconnect.com
// and add it to your .env file as NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

const connectors: Connector[] = [
    injected(),
    metaMask(),
    safe(),
];

if (projectId) {
  connectors.push(walletConnect({ projectId }));
} else {
    // This warning will show in the server logs, not the browser console.
    console.warn("WalletConnect connector is disabled. To enable it, add NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID to your .env file.");
}

export const config = createConfig({
  chains: [polygon],
  connectors,
  transports: {
    [polygon.id]: http(),
  },
  ssr: true,
})
