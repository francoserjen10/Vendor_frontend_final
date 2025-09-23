import React from 'react'
import DownArrowIcon from '@/assets/images/downArrow-small.svg';

type SortArrowsProps = {
    value?: "ASC" | "DESC";
    onChange: (value: "ASC" | "DESC") => void;
};

export default function SortArrows({ value = "ASC", onChange }: SortArrowsProps) {

    return (
        <div className="sort-arrows" aria-label="Sort control">
            <button
                type="button"
                className={`sort-arrow sort-arrow--up ${value === 'ASC' ? 'is-active' : ''}`}
                aria-pressed={value === 'ASC'}
                onClick={() => onChange('ASC')}
            >
                <DownArrowIcon aria-hidden />
            </button>

            <button
                type="button"
                className={`sort-arrow sort-arrow--down ${value === 'DESC' ? 'is-active' : ''}`}
                aria-pressed={value === 'DESC'}
                onClick={() => onChange('DESC')}
            >
                <DownArrowIcon aria-hidden />
            </button>
        </div>
    )
}
