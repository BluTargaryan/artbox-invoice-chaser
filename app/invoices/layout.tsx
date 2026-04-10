import type { Metadata } from "next";
import LoggedInHeader from "../components/atoms/LoggedInHeader";
import Footer from "../components/sections/Footer";


export const metadata: Metadata = {
  title: "Invoice Chaser - Invoices",
  description: "View your invoices for the Invoice Chaser app",
};

export default function InvoicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <div className="flex flex-col relative">
        <LoggedInHeader />
        <main className="flex flex-col py-50 items-center justify-center gap-17">
        {children}
   </main>
        <Footer />
        </div>

  );
}
