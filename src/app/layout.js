import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/custom/Navbar/Navbar";
import { Toaster } from "sonner";
import { Provider as ChakraProvider } from "@/components/ui/provider"

import ReduxProvider from "@/components/ReduxProvider";
import { LocalStorageProvider } from "@/components/LocalStorageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tentlify Rentals",
  description: "Cleveland Ohio's premier tent, table, and chair rental service!",
  keywords: ["tent rental", "party rental", "event rental", "wedding rental", "cleveland tent rental", "ohio tent rental", "tent rental service", "chair rental", "cleveland chair rental", "ohio chair rental", "table rental", "cleveland table rental", "ohio table rental", "tent rental service", "tent rental company", "tent rental near me", "tent rental cleveland", "tent rental ohio", "tent rental for wedding", "tent rental for party", "tent rental for event", "tent rental for graduation", "tent rental for birthday", "tent rental for corporate event", "tent rental for outdoor event", "tent rental for backyard party", "tent rental for outdoor wedding", "tent rental for outdoor party", "tent rental for outdoor graduation", "tent rental for outdoor birthday", "tent rental for outdoor corporate event", "chair rental for indoor event", "chair rental for indoor party", "table rental for indoor party", "table rental for indoor wedding", "chair rental for indoor wedding", "chair rental for indoor graduation", "chair rental for indoor birthday", "table rental for indoor corporate event", "business tent rental", "business table rental", "table rental", "chair rental", "corporate party rental"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tentlifyrentals.com",
    site_name: "Tentlify Rentals",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ReduxProvider>
            
            <LocalStorageProvider>
            <ChakraProvider>
            <Toaster position="top-center" />
            <ThemeProvider 
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              >
              <Navbar />
                {children}
            </ThemeProvider>
              </ChakraProvider>
          </LocalStorageProvider>
          </ReduxProvider>
      </body>
    </html>
  );
}
