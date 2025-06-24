# MediLog: Decentralized Health Records

MediLog is a Next.js application that provides a secure, decentralized platform for managing medical records, putting users back in control of their sensitive health information. It leverages blockchain technology for integrity and decentralized storage for privacy.

![MediLog Screenshot](https://placehold.co/800x400.png)

## Features

-   **Decentralized Identity:** Connect via real crypto wallets (e.g., MetaMask).
-   **Role-based Dashboards:** Separate interfaces for Doctors and Patients.
-   **Secure Record Generation:** Doctors can create consultation summaries.
-   **AI-Powered Summaries:** Uses Genkit and Google's Gemini model to generate summaries from notes.
-   **Patient-Controlled Access:** Patients have full control over their encrypted records.
-   **Built with a Modern Stack:** Next.js, ShadCN UI, Tailwind CSS, and `wagmi` for wallet integration.

## Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) (with App Router)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [ShadCN/UI](https://ui.shadcn.com/)
-   **Wallet Integration:** [Wagmi](https://wagmi.sh/) & [Viem](https://viem.sh/)
-   **Deployment:** [Vercel](https://vercel.com/)

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later recommended)
-   A package manager like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   A browser-based crypto wallet, such as [MetaMask](https://metamask.io/).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/medilog.git
    cd medilog
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the root of your project by copying the example file:
    ```bash
    cp .env.example .env.local
    ```

    You will need to add the following environment variables.

    -   `GOOGLE_API_KEY`: Your API key for Google AI services (Gemini). You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).
    -   `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` (Optional): To enable WalletConnect, get a Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/).

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

---

## Deployment on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fmedilog)

**Before deploying**, make sure to:

1.  Push your code to a GitHub repository.
2.  In your Vercel project settings, add the environment variables defined in `.env.example` (`GOOGLE_API_KEY`, etc.).
