import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import CreateEventDrawer from "@/components/create-event";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Schedulrr",
  description: "Efficient scheduling tool for your events",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body className={inter.className}>
          <Header />
          {/* Add padding-top to accommodate fixed header */}
          <main className="container overflow-hidden bg-white pt-16 pb-5 mx-auto">
              {children}
          </main>
          <footer className="bg-white py-4 border-t border-[#E0E0E0]">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-center text-xs md:text-sm text-[#2A2A2A] font-primary-font-medium">
                © 2018-2025, Infyni & all affiliates - All rights reserved
              </p>
            </div>
          </footer>
          <CreateEventDrawer />
        </body>
      </html>
    </ClerkProvider>
  );
}