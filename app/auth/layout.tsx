import type { Metadata } from "next";
import AuthHeader from "../components/atoms/AuthHeader";
import Footer from "../components/sections/Footer";


export const metadata: Metadata = {
  title: "Invoice Chaser - Auth",
  description: "Logins, registrations, and password resets for the Invoice Chaser app",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <div className="flex flex-col relative">
        <AuthHeader />
        <main className="flex flex-col  py-50 items-center justify-center gap-30">
        {children}
   </main>
        <Footer />
        </div>

  );
}
