import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardIcon from '@/assets/images/dashboard.svg';
import OrderIcon from '@/assets/images/orders.svg';
import CalendarIcon from '@/assets/images/calendar.svg';
import CustomersIcon from '@/assets/images/customers.svg';
import InventoryIcon from '@/assets/images/inventory.svg';
import DocumentIcon from '@/assets/images/document.svg';
import ReportIcon from '@/assets/images/report.svg';
import ProfileIcon from '@/assets/images/profile.svg';
import SettingIcon from '@/assets/images/setting.svg';
import OnlineStoreIcon from '@/assets/images/onlineStore.svg';
import HelpCenterIcon from '@/assets/images/helpCenter.svg';
import LogoutIcon from '@/assets/images/logOut.svg';
import BurgerMenuIcon from '@/assets/images/burgerMenu.svg';
import Search from '@/assets/images/search.svg';
import NotificationBellActive from '@/assets/images/notificationBellActive.svg';
import DownArrowSmall from '@/assets/images/downArrow-small.svg';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import CustomAvatar from "./CustomAvatar";
import { useState } from "react";

type Item = { href: string; label: string; icon: React.ReactNode; variant?: string };

type TTip = { text: string; top: number; left: number } | null;

// Modificar los void
type SidebarProps = {
    hideMenu: boolean
    isOpen: boolean
    isMobile: boolean
    onBurgerClick: () => void
    onAnyItemClick: () => void
};

const topNav: Item[] = [
    { href: '/', label: 'Dashboard', icon: <DashboardIcon /> },
    { href: '/orders', label: 'Orders', icon: <OrderIcon /> },
    { href: '/calendar', label: 'Calendar', icon: <CalendarIcon /> },
    { href: '/customers', label: 'Customers', icon: <CustomersIcon /> },
    { href: '/inventory', label: 'Inventory', icon: <InventoryIcon /> },
    { href: '/documents', label: 'Documents', icon: <DocumentIcon /> },
    { href: '/reports', label: 'Reports', icon: <ReportIcon /> },
];

const middleNav: Item[] = [
    { href: '/my-profile', label: 'Profile', icon: <ProfileIcon /> },
    { href: '/settings', label: 'Settings', icon: <SettingIcon /> },
    { href: '/online-store', label: 'Online Store', icon: <OnlineStoreIcon /> },
];

const bottomNav: Item[] = [
    { href: '/help-center', label: 'Help Center', icon: <HelpCenterIcon /> },
    { href: '/logout', label: 'Log Out', icon: <LogoutIcon />, variant: 'danger' },
];

function SidebarList({ items, onAnyItemClick, hideMenu, onItemHover }: { items: Item[], onAnyItemClick?: () => void, hideMenu?: boolean, onItemHover?: (label: string | null, rect?: DOMRect) => void }) {
    const pathname = usePathname();

    return (
        <>
            <ul className="sidebar__list">
                {items.map((item) => {
                    const active = item.href === '/'
                        ? pathname === '/'
                        : pathname === item.href || pathname.startsWith(item.href + '/');

                    return (
                        <li key={item.href} className={`sidebar__item ${active ? 'is-active' : ''}`}>
                            <Link
                                href={item.href}
                                className="sidebar__link"
                                onClick={onAnyItemClick}
                                aria-label={item.label}
                                onMouseEnter={(e) => {
                                    if (hideMenu && !active && onItemHover) {
                                        onItemHover(item.label, e.currentTarget.getBoundingClientRect());
                                    }
                                }}
                                onMouseLeave={() => onItemHover?.(null)}
                                onFocus={(e) => {
                                    if (hideMenu && !active && onItemHover) {
                                        onItemHover(item.label, e.currentTarget.getBoundingClientRect());
                                    }
                                }}
                                onBlur={() => onItemHover?.(null)}
                            >
                                <span className={`sidebar__icon ${item.variant === 'danger' ? 'sidebar__icon--danger' : ''}`} aria-hidden>{item.icon}</span>
                                <span className={`sidebar__text ${item.variant === 'danger' ? 'sidebar__text--danger' : ''}`}>{item.label}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default function Sidebar({ hideMenu, isOpen, isMobile, onBurgerClick, onAnyItemClick }: SidebarProps) {

    const [tt, setTt] = useState<TTip>(null);

    const handleItemHover = (label: string | null, rect?: DOMRect) => {
        if (!hideMenu || !label || !rect) { setTt(null); return; }
        setTt({
            text: label,
            top: rect.top + rect.height / 2 + -15,
            left: rect.right - 18
        });
    };
    return (
        <>
            <nav className={`sidebar ${hideMenu ? 'sidebar--hideMenu' : ''}`} aria-label="Main" data-open={isOpen}>
                <div className="sidebar__header">
                    <div className="sidebar__brand">
                        <span className="sidebar__brand-alo">Alo</span>
                        <span className="sidebar__brand-manager">Manager</span>
                    </div>
                    <button
                        className="sidebar__burger"
                        aria-label="Toggle menu"
                        type="button"
                        onClick={onBurgerClick}
                    >
                        <BurgerMenuIcon />
                    </button>
                </div>
                <div className="sidebar__body">
                    {isMobile && isOpen && (
                        <div className="sidebar__overlay-header">
                            <button
                                className="sidebar__burger"
                                aria-label="Toggle menu"
                                type="button"
                                onClick={onBurgerClick}
                            >
                                <BurgerMenuIcon />
                            </button>

                            <div className="sidebar__brand-wrap">
                                <div className="sidebar__brand">
                                    <span className="sidebar__brand-alo">Alo</span>
                                    <span className="sidebar__brand-manager">Manager</span>
                                </div>
                            </div>

                            <div className="sidebar__overlay-toprow">
                                <button className="header-notification-btn" aria-label="Notifications">
                                    <NotificationBellActive />
                                </button>

                                <DropdownButton
                                    className="header-user__dropdown"
                                    title={
                                        <div className="header-user">
                                            <CustomAvatar abbr="XBD" size={32} />
                                            <div className="header-user__details">
                                                <span>Xablia Bike Denia</span>
                                            </div>
                                            <DownArrowSmall />
                                        </div>
                                    }
                                >
                                    <Dropdown.Item>My Profile</Dropdown.Item>
                                    <Dropdown.Item>Log Out</Dropdown.Item>
                                </DropdownButton>
                            </div>

                            <div className="sidebar__overlay-actions">
                                <button className="btn btn--primary btn--sm">New Order</button>

                                <div className="header-search">
                                    <Search />
                                    <input
                                        className="search__input"
                                        type="text"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="sidebar__sections">
                        <div className="sidebar__section">
                            <SidebarList items={topNav} hideMenu={hideMenu} onAnyItemClick={onAnyItemClick} onItemHover={handleItemHover} />
                        </div>

                        <div className="sidebar__section">
                            <SidebarList items={middleNav} hideMenu={hideMenu} onAnyItemClick={onAnyItemClick} onItemHover={handleItemHover} />
                        </div>

                        <div className="sidebar__section">
                            <SidebarList items={bottomNav} hideMenu={hideMenu} onAnyItemClick={onAnyItemClick} onItemHover={handleItemHover} />
                        </div>
                    </div>
                </div>
                {tt && (
                    <div className={`sb-tooltip is-visible`} style={{ top: tt.top, left: tt.left }}>
                        {tt.text}
                    </div>
                )}
            </nav>
        </>
    );
}