'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./globals.sass";
import Header from '../components/headers/Header';
import { usePathname } from 'next/navigation';

const HIDE_HEADER_ROUTES = new Set([
    "/login",
    "/signup",
    "/forgot-password",
    "/reset-password",
    "/questionary",
    "/signup-member",
    "/signup-success",
]);

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

    const pathname = usePathname();
    const hideHeader = HIDE_HEADER_ROUTES.has(pathname);

    return (
        <>
            <html lang="en">
                <body>
                    {!hideHeader && <Header />}
                    {children}
                </body>
            </html>
        </>
    );
}
