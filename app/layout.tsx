import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import UIProvider from "./components/ui-provider";

const inter = Inter({ subsets: ["latin"] });

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
            <body className={inter.className}>
                <UIProvider>
                    <header className="pt-5">
                        <Navigation />
                    </header>
                    {children}
                </UIProvider>
            </body>
        </html>
    );
}
