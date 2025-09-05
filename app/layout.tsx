'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./globals.sass";
import Header from '../components/headers/Header';
import { usePathname } from 'next/navigation';
import Sidebar from '@/components/Sidebar';

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
                <head>
                    <title>AloVago Manager</title>
                </head>
                <body>
                    {hideHeader ? (
                        <>
                            {children}
                        </>
                    ) : (
                        <div className="app-shell">
                            <>
                                <aside className="app-shell__aside">
                                    <Sidebar />
                                </aside>

                                <div className="app-shell__content">
                                    <Header />
                                    <main className="app-shell__main">

                                    </main>
                                </div>
                            </>

                        </div>
                    )}
                </body>
            </html>
        </>
    );
}
