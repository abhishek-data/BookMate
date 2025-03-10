import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Infyni Scheduler",
  description: "Effortless Class Scheduling",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body className={inter.className}>
          <Header />
          <main className="container overflow-hidden bg-white pt-16 pb-5 mx-auto">
              {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}