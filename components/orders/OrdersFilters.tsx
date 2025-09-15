'use client';
import DownArrowIcon from '@/assets/images/downArrow.svg';
import MainSelect from '../MainSelect';

export default function OrdersFilters() {
    return (
        <aside className="orders-filters" aria-labelledby="orders-filters-title">
            <div className="orders-filters__header">
                <h2 id="orders-filters-title" className="orders-filters__title">Filters</h2>
            </div>

            <div className="orders-filters__body">
                <section className="orders-filters__section orders-filters__section--location" aria-labelledby="filters-location-title">
                    <div className="orders-filters__section-header">
                        <h3 id="filters-location-title" className="orders-filters__section-title">Location</h3>
                        {/* Aca tengo un svg */}
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
                <section className="orders-filters__section orders-filters__section--status" aria-labelledby="filters-status-title">
                    <div className="orders-filters__section-header">
                        <h3 id="filters-status-title" className="orders-filters__section-title">Status</h3>
                        <DownArrowIcon className="orders-filters__arrow" width={13} height={7} aria-hidden />
                    </div>
                    <div className="orders-filters__section-body orders-filters__checks">
                        <div className="orders-filters__check">
                            <label className="orders-filters__checkbox main-checkbox">
                                <input type="checkbox" className="form-check-input" defaultChecked />
                                <span>Draft</span>
                            </label>
                            {/* TODO: Cantidad de ordenes reales */}
                            <span className="orders-filters__count">(0)</span>
                        </div>

                        <div className="orders-filters__check">
                            <label className="orders-filters__checkbox main-checkbox">
                                <input type="checkbox" className="form-check-input" defaultChecked />
                                <span>Reserved</span>
                            </label>
                            {/* TODO: Cantidad de ordenes reales */}
                            <span className="orders-filters__count">(0)</span>
                        </div>

                        <div className="orders-filters__check">
                            <label className="orders-filters__checkbox main-checkbox">
                                <input type="checkbox" className="form-check-input" defaultChecked />
                                <span>Picked Up</span>
                            </label>
                            {/* TODO: Cantidad de ordenes reales */}
                            <span className="orders-filters__count">(0)</span>
                        </div>

                        <div className="orders-filters__check">
                            <label className="orders-filters__checkbox main-checkbox">
                                <input type="checkbox" className="form-check-input" defaultChecked />
                                <span>Returned</span>
                            </label>
                            {/* TODO: Cantidad de ordenes reales */}
                            <span className="orders-filters__count">(0)</span>
                        </div>

                        <div className="orders-filters__check">
                            <label className="orders-filters__checkbox main-checkbox">
                                <input type="checkbox" className="form-check-input" defaultChecked />
                                <span>Cancelled</span>
                            </label>
                            {/* TODO: Cantidad de ordenes reales */}
                            <span className="orders-filters__count">(0)</span>
                        </div>
                    </div>
                </section>

                <section className="orders-filters__section orders-filters__section--status" aria-labelledby="filters-status-title">
                    <div className="orders-filters__section-header">
                        <h3 id="filters-status-title" className="orders-filters__section-title">Payment status</h3>
                        <DownArrowIcon className="orders-filters__arrow" width={13} height={7} aria-hidden />
                    </div>
                    <div className="orders-filters__section-body orders-filters__checks">
                        <div className="orders-filters__check">
                            <label className="orders-filters__checkbox main-checkbox">
                                <input type="checkbox" className="form-check-input" defaultChecked />
                                <span>Payment due</span>
                            </label>
                            {/* TODO: Cantidad de ordenes reales */}
                            <span className="orders-filters__count">(0)</span>
                        </div>

                        <div className="orders-filters__check">
                            <label className="orders-filters__checkbox main-checkbox">
                                <input type="checkbox" className="form-check-input" defaultChecked />
                                <span>Partially paid</span>
                            </label>
                            {/* TODO: Cantidad de ordenes reales */}
                            <span className="orders-filters__count">(0)</span>
                        </div>

                        <div className="orders-filters__check">
                            <label className="orders-filters__checkbox main-checkbox">
                                <input type="checkbox" className="form-check-input" defaultChecked />
                                <span>Paid</span>
                            </label>
                            {/* TODO: Cantidad de ordenes reales */}
                            <span className="orders-filters__count">(0)</span>
                        </div>

                        <div className="orders-filters__check">
                            <label className="orders-filters__checkbox main-checkbox">
                                <input type="checkbox" className="form-check-input" defaultChecked />
                                <span>Overpaid</span>
                            </label>
                            {/* TODO: Cantidad de ordenes reales */}
                            <span className="orders-filters__count">(0)</span>
                        </div>

                        <div className="orders-filters__check">
                            <label className="orders-filters__checkbox main-checkbox">
                                <input type="checkbox" className="form-check-input" defaultChecked />
                                <span>Process deposit</span>
                            </label>
                            {/* TODO: Cantidad de ordenes reales */}
                            <span className="orders-filters__count">(0)</span>
                        </div>
                    </div>
                </section>

                <section className="orders-filters__section orders-filters__section--status" aria-labelledby="filters-status-title">
                    <div className="orders-filters__section-header">
                        <h3 id="filters-status-title" className="orders-filters__section-title">Date range</h3>
                        <DownArrowIcon className="orders-filters__arrow" width={13} height={7} aria-hidden />
                    </div>
                    {/* FILTROS */}
                </section>
            </div>
        </aside>
    );
}