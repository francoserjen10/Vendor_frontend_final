'use client';
import DownArrowIcon from '@/assets/images/downArrow.svg';

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
                        <DownArrowIcon className="orders-filters__chevron" width={13} height={7} aria-hidden />
                    </div>

                    <div className="orders-filters__section-body">
                        <div className="field field--select">
                            <label htmlFor="pickup" className="orders-filters__label">Pickup location</label>
                            <div className="field__control">
                                <select id="pickup" className="field__input field__select" defaultValue="" required>
                                    <option value="">Location</option>
                                    {/* TODO: llenar con locations reales */}
                                    <option value="denia">Denia</option>
                                    <option value="xabia">Xàbia</option>
                                </select>
                                {/* Tengo un svg tambien 
                                downArrow.svg
                                Podria poner un width y height para darle tama;o 1:1 a figma
                                */}
                                <DownArrowIcon className="field__chevron" width={24} height={24} aria-hidden />
                            </div>
                        </div>

                        <div className="field field--select">
                            <label htmlFor="return" className="orders-filters__label">Pickup location</label>
                            <div className="field__control">
                                <select id="return" className="field__input field__select" defaultValue="" required>
                                    <option value="">Location</option>
                                    {/* TODO: llenar con locations reales */}
                                    <option value="denia">Denia</option>
                                    <option value="xabia">Xàbia</option>
                                </select>
                                {/* Tengo un svg tambien 
                                downArrow.svg
                                Podria poner un width y height para darle tama;o 1:1 a figma
                                */}
                                <DownArrowIcon className="field__chevron" width={24} height={24} aria-hidden />
                            </div>
                        </div>
                    </div>
                </section>
                {/* acá después van los controles de filtros */}
                {/* Ej: status, date range, search, etc. */}
            </div>
        </aside>
    );
}