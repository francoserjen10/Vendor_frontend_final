import { Filters } from '@/app/orders/page';
import React from 'react'
// import { statusData } from '@/shared/constants';

type StatusKey = 'status' | 'payment_status';

interface StatusFiltersProps {
    // label: string;
    className?: string;
    statusArray: string[];
    filters: Filters;
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
    statusData: { [key: string]: number };
    status_key: StatusKey;
    checked?: string[];
}

export default function StatusFilters({
    // label,
    className,
    statusArray,
    filters,
    setFilters,
    statusData,
    status_key,
    checked = filters.status
}: StatusFiltersProps) {

    const handleFilterChange = (key: StatusKey, status: string, setState = setFilters) => {
        setState((prevFilters: Filters) => ({
            ...prevFilters,
            [key]: prevFilters[key].includes(status)
                ? prevFilters[key].filter((item: string) => item !== status)
                : [...prevFilters[key], status],
        }));
    };

    return (
        <>
            <div className={`${className} orders-filters__cards`}>
                {statusArray.map((status, index) => (
                    <div key={index} className="orders-filter__card">
                        <label htmlFor={`filter-${index}-${status}`} className="orders-filters__checkbox main-checkbox">
                            <input
                                type="checkbox"
                                name={`filter-${index}-${status}`}
                                id={`filter-${index}-${status}`}
                                className="form-check-input"
                                checked={checked.includes(status)}
                                onChange={() => handleFilterChange(status_key, status)}
                            />
                            <p>{status}</p>
                        </label>
                        <p className="orders-filters__count">({statusData[status]})</p>
                    </div>
                ))}
            </div>
        </>
    )
}


