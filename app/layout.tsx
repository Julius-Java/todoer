import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "../components/navigation";
import UIProvider from "../components/ui-provider";

const inter = Inter({ subsets: ["latin"] });

const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-workSans" });

export const metadata: Metadata = {
    title: "Todoer",
    description: "Organize your life with Todoer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={(inter.className, workSans.variable)}>
                <UIProvider>
                    <header className="pt-5 md:py-3">
                        <Navigation />
                    </header>
                    {children}
                </UIProvider>
            </body>
        </html>
    );
}
