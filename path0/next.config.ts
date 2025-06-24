import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Add this to ensure Genkit's ESM modules are transpiled correctly by Next.js.
  transpilePackages: [
    '@genkit-ai/ai',
    '@genkit-ai/core',
    '@genkit-ai/googleai',
    '@genkit-ai/next',
    '@opentelemetry/instrumentation',
    '@opentelemetry/sdk-node',
    'genkit',
    'dotprompt',
    'handlebars',
  ],
};

export default nextConfig;
