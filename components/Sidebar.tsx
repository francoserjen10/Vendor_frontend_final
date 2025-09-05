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

type Item = { href: string; label: string; icon: React.ReactNode; variant?: string };

const topNav: Item[] = [
    { href: '/', label: 'Dashboard', icon: <DashboardIcon /> },
    { href: '/orders', label: 'Orders', icon: <OrderIcon /> },
    { href: '/calendar', label: 'Calendar', icon: <CalendarIcon />  },
    { href: '/customers', label: 'Customers', icon: <CustomersIcon />  },
    { href: '/inventory', label: 'Inventory', icon: <InventoryIcon />  },
    { href: '/documents', label: 'Documents', icon: <DocumentIcon />  },
    { href: '/reports', label: 'Reports', icon: <ReportIcon />  },
];

const middleNav: Item[] = [
    { href: '/my-profile', label: 'Profile', icon: <ProfileIcon />  },
    { href: '/settings', label: 'Settings', icon: <SettingIcon />  },
    { href: '/online-store', label: 'Online Store', icon: <OnlineStoreIcon />  },
];

const bottomNav: Item[] = [
    { href: '/help-center', label: 'Help Center', icon: <HelpCenterIcon />  },
    { href: '/logout', label: 'Log Out', icon: <LogoutIcon />, variant: 'danger' },
];

function SidebarList({ items }: { items: Item[] }) {
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
                            <Link href={item.href} className="sidebar__link">
                                <span className={`sidebar__icon ${item.variant === 'danger' ? 'sidebar__icon--danger' : ''}`} aria-hidden>{item.icon}</span>
                                <span className="sidebar__text">{item.label}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default function Sidebar() {

    return (
        <>
            <nav className="sidebar" aria-label="Main">
                <div className="sidebar__sections">
                    <div className="sidebar__section">
                        <SidebarList items={topNav} />
                    </div>

                    <div className="sidebar__section">
                        <SidebarList items={middleNav} />
                    </div>

                    <div className="sidebar__section">
                        <SidebarList items={bottomNav} />
                    </div>
                </div>
            </nav>

        </>
    );
}