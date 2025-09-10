'use client'
import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.sass";
import Header from '../components/headers/Header';
import { usePathname } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import { useEffect, useState } from 'react';

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

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [hideMenu, setHideMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const pathname = usePathname();
    const hideHeader = HIDE_HEADER_ROUTES.has(pathname);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            if (!mobile) {
                setIsSidebarOpen(false);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setIsSidebarOpen(false);
    }, [pathname]);

    const handleBurgerClick = () => {
        if (isMobile) {
            setIsSidebarOpen(prev => !prev);
        } else {
            setHideMenu(prev => !prev);
        }
    };

    const closeMobileOverlay = () => setIsSidebarOpen(false);

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
                        <div className={`app-shell ${hideMenu ? 'app-shell--hideMenu' : ''}`}>
                            <>
                                <aside className={`app-shell__aside ${isSidebarOpen ? 'is-open' : ''}`}>
                                    <Sidebar
                                        hideMenu={hideMenu}
                                        isOpen={isSidebarOpen}
                                        isMobile={isMobile}
                                        onBurgerClick={handleBurgerClick}
                                        onAnyItemClick={closeMobileOverlay}
                                    />
                                </aside>

                                <button
                                    className={`app-shell__backdrop ${isSidebarOpen ? 'is-visible' : ''}`}
                                    aria-label="Close sidebar"
                                    aria-hidden={!isSidebarOpen}
                                    onClick={closeMobileOverlay}
                                />

                                <div className="app-shell__content">
                                    <Header
                                        onBurgerClick={handleBurgerClick}
                                        isSidebarOpen={isSidebarOpen}
                                    />
                                    <main className="app-shell__main">
                                        {children}
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
