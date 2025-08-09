import type { Metadata } from "next";
import "./globals.sass";

export const metadata: Metadata = {
    title: "Vendor Frontend Final",
    description: "Maquetación versión final en Next.js + TypeScript",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
