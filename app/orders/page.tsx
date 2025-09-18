'use client';
import DownArrowIcon from '@/assets/images/downArrow.svg';
import DateRangePicker from '@/components/DateRangePicker';
import MainSelect from '@/components/MainSelect';
import StatusFilters from '@/components/StatusFilters';
import React, { useState } from 'react';

export type Filters = {
    location: { pick_up: string; return: string };
    status: string[];
    payment_status: string[];
    date_range: { start: Date | null; end: Date | null };
};

export default function OrdersPage() {

    const [filters, setFilters] = React.useState<Filters>({
        location: {
            pick_up: '',
            return: ''
        },
        status: [],
        payment_status: [],
        date_range: {
            start: null,
            end: null
        }
    });
    const [statusData, setStatusData] = useState({
        draft: 0,
        reserved: 0,
        'picked up': 0,
        returned: 0,
        cancelled: 0
    })
    const [paymentStatusData, setPaymentsStatusData] = useState({
        'payment due': 0,
        'partially paid': 0,
        paid: 0,
        overpaid: 0,
        'process deposit': 0
    })

    const statuses = ['draft', 'reserved', 'picked up', 'returned', 'cancelled'];
    const paymentStatuses = ['payment due', 'partially paid', 'paid', 'overpaid', 'process deposit'];
    const [activeTab, setActiveTab] = useState<OrdersTab>();
    const tabs = ['All', 'Upcoming', 'Late', 'With Shortage'] as const;
    type OrdersTab = typeof tabs[number];

    return (
        <section className="orders">
            <div className="orders__layout">
                <aside className="orders-filters" aria-labelledby="orders-filters-title">
                    <div className="orders-filters__header">
                        <h2 id="orders-filters-title" className="orders-filters__title">Filters</h2>
                    </div>

                    <div className="orders-filters__body">
                        <section className="orders-filters__section" aria-labelledby="filters-location-title">
                            <div className="orders-filters__section-header">
                                <h3 id="filters-location-title" className="orders-filters__section-title">Location</h3>
                                <DownArrowIcon className="orders-filters__arrow" width={13} height={7} aria-hidden />
                            </div>

                            <div className="orders-filters__section-body">
                                <div className="field">
                                    <label htmlFor="pickup" className="orders-filters__label">Pickup location</label>
                                    <MainSelect
                                        options={['Denia', 'Xàbia']}
                                        value=""
                                        placeholder='Location'
                                        onChange={() => { }}
                                    />
                                </div>

                                <div className="field">
                                    <label htmlFor="return" className="orders-filters__label">Return location</label>
                                    <MainSelect
                                        options={[]}
                                        value=""
                                        placeholder='Location'
                                        onChange={() => { }}
                                    />
                                </div>
                            </div>
                        </section>
                        <section className="orders-filters__section" aria-labelledby="filters-status-title">
                            <div className="orders-filters__section-header">
                                <h3 id="filters-status-title" className="orders-filters__section-title">Status</h3>
                                <DownArrowIcon className="orders-filters__arrow" width={13} height={7} aria-hidden />
                            </div>
                            <StatusFilters className='orders-filters__section-body' statusArray={statuses} filters={filters} setFilters={setFilters} statusData={statusData} status_key={'status'} />
                        </section>

                        <section className="orders-filters__section" aria-labelledby="filters-statusPayments-title">
                            <div className="orders-filters__section-header">
                                <h3 id="filters-status-title" className="orders-filters__section-title">Payment status</h3>
                                <DownArrowIcon className="orders-filters__arrow" width={13} height={7} aria-hidden />
                            </div>
                            <StatusFilters className='orders-filters__section-body' statusArray={paymentStatuses} filters={filters} setFilters={setFilters} statusData={paymentStatusData} status_key={'payment_status'} checked={filters.payment_status} />
                        </section>

                        <section className="orders-filters__section orders-filters__section--status" aria-labelledby="filters-status-title">
                            <div className="orders-filters__section-header">
                                <h3 id="filters-status-title" className="orders-filters__section-title">Date range</h3>
                                <DownArrowIcon className="orders-filters__arrow" width={13} height={7} aria-hidden />
                            </div>
                            <DateRangePicker
                                startDate={filters.date_range.start}
                                endDate={filters.date_range.end}
                                onChange={({ start, end }) =>
                                    setFilters(prev => ({ ...prev, date_range: { start, end } }))}
                            />
                        </section>
                    </div>
                </aside>
                <div className="orders__content">
                    <header
                        className="orders__header"
                        aria-labelledby="orders-title"
                        aria-describedby="orders-subtitle"
                    >
                        <div className="orders__headings">
                            <h1 id="orders-title" className="orders__title">Orders</h1>
                            <p id="orders-subtitle" className="orders__subtitle">
                                View and manage all rental orders, including status updates, rental periods, and customer details
                            </p>
                        </div>
                        <button type="button" className="btn btn--primary btn--sm">
                            New Order
                        </button>
                    </header>

                    <nav className="orders-tabs" role="tablist" aria-label="Order sets">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                type='button'
                                role="tab"
                                aria-selected={activeTab === tab}
                                className={`orders-tab ${activeTab === tab ? 'is-active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    );
}