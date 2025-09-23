'use client';
import OrderIcon from '@/assets/images/orders.svg';
import OrderListIcon from '@/assets/images/orderlist.svg';
import DueIcon from '@/assets/images/due.svg';
import DocumentIcon from '@/assets/images/document.svg';
import DateRangePicker from '@/components/DateRangePicker';
import MainSelect from '@/components/MainSelect';
import StatusFilters from '@/components/StatusFilters';
import React, { useState } from 'react';
import FilterSection from '@/components/FilterSection';
import PaginationRows from '@/components/PaginationRows';

export type Filters = {
    location: { pick_up: string; return: string };
    status: string[];
    payment_status: string[];
    date_range: { start: Date | null; end: Date | null };
};

type Metric = {
    key: string;
    label: string;
    value: number | string;
    tone: 'violet' | 'amber' | 'blue' | 'orange';
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
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
    const [activeTab, setActiveTab] = useState<OrdersTab>();
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    //===================PAGINATION==================
    const [page, setPage] = useState<number | null>(null);
    const [take, setTake] = useState<number | null>(10);
    const [itemsCount, setItemsCount] = useState<number | null>(0);

    const statuses = ['draft', 'reserved', 'picked up', 'returned', 'cancelled'];
    const paymentStatuses = ['payment due', 'partially paid', 'paid', 'overpaid', 'process deposit'];
    const tabs = ['All', 'Upcoming', 'Late', 'With Shortage'] as const;
    type OrdersTab = typeof tabs[number];

    const metrics: Metric[] = [
        { key: 'orders', label: 'Orders', value: 100, tone: 'violet', Icon: OrderIcon },
        { key: 'items', label: 'Items ordered', value: 50, tone: 'amber', Icon: OrderListIcon },
        { key: 'revenue', label: 'Revenue', value: '$500', tone: 'blue', Icon: DocumentIcon },
        { key: 'due', label: 'Due', value: '$500', tone: 'orange', Icon: DueIcon },
    ];

    const handleClearSelection = () => setSelectedIds([]);
    const handleExport = () => {
        // TODO: reemplazar por el real
        console.log('Exporting IDs:', selectedIds);
    };

    return (
        <>
            <section className="orders__layout">
                <aside className="orders-filters" aria-labelledby="orders-filters-title">
                    <div className="orders-filters__header">
                        <h2 id="orders-filters-title" className="orders-filters__title">Filters</h2>
                    </div>

                    <div className="orders-filters__body">
                        <FilterSection id='filters-location' title='Location' defaultOpen={true}>
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
                        </FilterSection>

                        <FilterSection id='filters-status' title='Status' defaultOpen={true}>
                            <StatusFilters
                                className='orders-filters__section-body'
                                statusArray={statuses}
                                filters={filters}
                                setFilters={setFilters}
                                statusData={statusData}
                                status_key={'status'} />
                        </FilterSection>

                        <FilterSection id='filters-ayments' title='Payment status' defaultOpen={true}>
                            <StatusFilters
                                className='orders-filters__section-body'
                                statusArray={paymentStatuses}
                                filters={filters}
                                setFilters={setFilters}
                                statusData={paymentStatusData}
                                status_key={'payment_status'}
                                checked={filters.payment_status}
                            />
                        </FilterSection>

                        <FilterSection id='filters-dateRange' title='Date range' defaultOpen={true}>
                            <DateRangePicker
                                startDate={filters.date_range.start}
                                endDate={filters.date_range.end}
                                onChange={({ start, end }) =>
                                    setFilters(prev => ({ ...prev, date_range: { start, end } }))}
                            />
                        </FilterSection>
                    </div>
                </aside >
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

                    <div className="orders-metrics" role="list">
                        {metrics.map(m => (
                            <article key={m.key} className={`metric-card metric-card--${m.tone}`} role="listitem" aria-label={m.label}>
                                <div className="metric-card__meta">
                                    <h3 className="metric-card__label">{m.label}</h3>
                                    <p className="metric-card__value">{m.value}</p>
                                </div>

                                <div className="metric-card__icon" aria-hidden>
                                    <m.Icon className="metric-card__svg"
                                        aria-hidden
                                        focusable="false"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        style={{ color: 'currentColor' }}
                                    />
                                </div>
                            </article>
                        ))}
                    </div>

                    <section className="orders-table" aria-label="Orders list">
                        <header className="orders-table__header">
                            <div className="orders-table__bulk">
                                <span className="orders-table__bulk-count">
                                    {selectedIds.length} {selectedIds.length === 1 ? 'order' : 'orders'} selected
                                </span>

                                <button
                                    type="button"
                                    className="orders-table__bulk-clear"
                                    onClick={handleClearSelection}
                                    disabled={selectedIds.length === 0}
                                >
                                    Clear selection
                                </button>
                            </div>

                            <div className="orders-table__actions">
                                <button
                                    type="button"
                                    className="btn btn--outline btn--xs"
                                    onClick={handleExport}
                                    disabled={selectedIds.length === 0}
                                >
                                    Export
                                </button>
                            </div>
                        </header>

                        {/* tabla/lista de órdenes */}
                        <div className="orders-list">
                            <table className="orders-list__table" aria-label="Orders">
                                <thead>
                                    <tr>
                                        <th className="col-select">
                                            <label className="main-checkbox" aria-label="Select all">
                                                <input type="checkbox" className="form-check-input" />
                                            </label>
                                        </th>
                                        <th className="col-idx">#</th>

                                        <th className="col-name">
                                            <div className="th-with-sort">
                                                <span>Name</span>
                                                <span className="sort" aria-hidden />
                                            </div>
                                        </th>

                                        <th className="col-status">Status</th>
                                        <th className="col-channel">Channel</th>

                                        <th className="col-price">
                                            <div className="th-with-sort">
                                                <span>Price</span>
                                                <span className="sort" aria-hidden />
                                            </div>
                                        </th>

                                        <th className="col-pickup">Pick up</th>
                                        <th className="col-return">Return</th>
                                        <th className="col-payment">Payment</th>
                                        <th className="col-actions">Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="orders-row">
                                        <td className="col-select">
                                            <label className="main-checkbox">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    // checked={…}
                                                    // onChange={…}
                                                    aria-label="Select order #1"
                                                />
                                            </label>
                                        </td>

                                        <td className="col-idx">1</td>

                                        <td className="col-name">
                                            <div className="td-name">
                                                <div className="avatar" aria-hidden>F</div>
                                                <span>Federico Alonso</span>
                                            </div>
                                        </td>

                                        <td className="col-status">
                                            <span className="badge badge--green">Reserved</span>
                                        </td>

                                        <td className="col-channel">Manual</td>
                                        <td className="col-price">$4500</td>
                                        <td className="col-pickup">10-03-2024 1-10:50 Denia</td>
                                        <td className="col-return">10-03-2024 1-10:50 Denia</td>

                                        <td className="col-payment">
                                            <span className="payment payment--due">
                                                <span className="payment__dot" />
                                                Payment due
                                            </span>
                                        </td>

                                        <td className="col-actions">
                                            <button type="button" className="icon-btn" aria-label="View">
                                                <span className="icon-btn__glyph" aria-hidden />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <PaginationRows
                            items_count={78}           // total real
                            page={page}                // tu estado de página
                            onPageChange={setPage}
                            onTakeChange={setTake}
                        />
                    </section >
                </div>
            </section >
        </>
    );
}