'use client';
import Search from '@/assets/images/search.svg';
import NotificationBell from '@/assets/images/notificationBell.svg';
import NotificationBellActive from '@/assets/images/notificationBellActive.svg';
import DownArrowSmall from '@/assets/images/downArrow-small.svg';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import CustomAvatar from '../CustomAvatar';

export default function Header() {

    return (
        <>
            <header className="app-header">
                <div className="app-header__inner">
                    {/* Left / Breadcrumb */}
                    <div className="app-header__left">
                        {/* En el proyecto viejo era un componente <Breadcrumbs />.
              Por ahora estático */}
                        <h3 className="app-header__breadcrumb">
                            Dashboard {'>'} Planning
                        </h3>
                    </div>

                    <div className="app-header__right">
                        <button className="btn btn--primary btn--sm"> New Order </button>

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