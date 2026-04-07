import type { Metadata } from "next";
import AuthHeader from "../components/atoms/AuthHeader";
import Footer from "../components/sections/Footer";


export const metadata: Metadata = {
  title: "Invoice Chaser - Account Setup",
  description: "Setup your account for the Invoice Chaser app",
};

export default function AcctSetupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <div className="flex flex-col relative">
        <AuthHeader />
        <main className="flex flex-col py-50 items-center justify-center gap-17">
        {children}
   </main>
        <Footer />
        </div>

  );
}
