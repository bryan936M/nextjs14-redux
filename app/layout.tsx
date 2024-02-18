import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/redux/provider";

export const metadata: Metadata = {
  title: "Task Manager",
  description: "A simple task manager with Next.js and Prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen bg-slate-400">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
