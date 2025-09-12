'use client';
import Search from '@/assets/images/search.svg';
import NotificationBell from '@/assets/images/notificationBell.svg';
import NotificationBellActive from '@/assets/images/notificationBellActive.svg';
import DownArrowSmall from '@/assets/images/downArrow-small.svg';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import CustomAvatar from '../CustomAvatar';
import BurgerMenuIcon from '@/assets/images/burgerMenu.svg';
import Progress from './Progress';

type HeaderProps = {
    onBurgerClick: () => void;
    isSidebarOpen: boolean;
};

export default function Header({ onBurgerClick, isSidebarOpen }: HeaderProps) {

    return (
        <>
            <header className="app-header" data-sidebar-open={isSidebarOpen ? 'true' : undefined}>
                <div className="app-header__inner">
                    {/* Left / Breadcrumb */}
                    <div className="app-header__left">
                        {/* app-header__burger */}
                        <button
                            className="app-header__burger"
                            aria-label="Toggle menu"
                            type="button"
                            onClick={onBurgerClick}
                        >
                            <BurgerMenuIcon />
                        </button>
                        {/* En el proyecto viejo era un componente <Breadcrumbs />.
              Por ahora estático */}
                        <h3 className="app-header__breadcrumb">
                            Dashboard {'>'} Planning
                        </h3>
                    </div>

                    {/* app-header__actions */}
                    <div className="app-header__right app-header__actions">
                        {/* <button className="btn btn--primary btn--sm"> New Order </button> */}
                        <Progress />
                        <div className="header-search">
                            <Search />
                            <input
                                className="search__input"
                                type="text"
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </div>

                        <button
                            className="header-notification-btn"
                            aria-label="Notifications"
                        /* Abrir modal de notification
                        onClick={toggleModal}
                        ref={buttonRef} */
                        >
                            {/* Cuando tenga el estado real: {hasNotification ? <NotificationBellActive/> : <NotificationBell/>} */}
                            <NotificationBellActive />
                        </button>

                        <DropdownButton
                            //ref={dropdownButtonRef}
                            //show={showDropdown}
                            className="header-user__dropdown"
                            title={
                                <div className="header-user">
                                    <CustomAvatar
                                        abbr='XBT'
                                        size={35}
                                    />

                                    <div className="header-user__details">
                                        {/* <span>{user.first_name} {user.last_name}</span> */}
                                        <span>Xablia Bike Denia</span>
                                    </div>
                                    <DownArrowSmall />
                                </div>
                            }
                        //onClick={toggleDropdown}
                        >
                            <Dropdown.Item /*onClick={handleMyProfile}*/ > My Profile </Dropdown.Item>
                            <Dropdown.Item /*onClick={handleLogOut}*/ >Log Out</Dropdown.Item>
                        </DropdownButton>

                    </div>
                </div>
            </header>
        </>
    );
}