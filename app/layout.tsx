import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css'
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voom ",
  description: "Video Call App",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider  appearance={{
        layout: {
          logoImageUrl: '/icons/yoom-logo.svg',
          socialButtonsVariant: "iconButton",
          
        },
        variables: {
          colorBackground: '#1c1f2e',
          colorInputBackground: '#252a41',
          colorInputText: '#fff',
          colorPrimary: '#0e78f9',
          colorText: '#fff'
        }
      }}>
        <body className={`${inter.className} bg-dark-2 `}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
