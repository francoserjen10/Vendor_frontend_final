'use client';
import React, { useState, useRef, useEffect } from 'react';
import DownArrowIcon from '@/assets/images/downArrow.svg';

type MainSelectProps = {
    options: string[];
    onChange: (value: string) => void;
    value: string;
    error?: boolean;
    errorText?: string;
    maxWidth?: number;
    disabled?: boolean;
    className?: string;
    placeholder?: string;
};

export default function MainSelect({
    options,
    onChange,
    value,
    error,
    errorText,
    maxWidth,
    disabled = false,
    className = '',
    placeholder = 'Select an option'
}: MainSelectProps) {

    //===================MENU SETTINGS===============
    const [isDropUp, setIsDropUp] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);
    const toggleDropdown = () => setIsOpen(!isOpen);

    //==================OUTSIDE CLICK FUNCTION=============
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    //==================DROPDOWN POSITION================
    useEffect(() => {
        if (isOpen) {
            const rect = selectRef.current?.getBoundingClientRect();
            if (!rect) return;
            const spaceBelow = window.innerHeight - rect.bottom;
            const spaceAbove = rect.top;

            if (spaceBelow < 200 && spaceAbove > spaceBelow) {
                setIsDropUp(true);
            } else {
                setIsDropUp(false);
            }
        }
    }, [isOpen]);

    const isPlaceholder = !value;

    return (
        <div
            ref={selectRef}
            className={`field field--select ${disabled ? 'is-disabled' : ''} ${error ? 'is-error' : ''} ${className || ''}`}
            style={maxWidth ? { maxWidth } : undefined}
        >
            <button
                type="button"
                className="field__control field__control--select"
                onClick={toggleDropdown}
                disabled={disabled}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span className={`field__value ${isPlaceholder ? 'is-placeholder' : ''}`}>
                    {value || placeholder}
                </span>

                <span className={`field__arrow ${isOpen ? 'is-open' : ''}`} aria-hidden>
                    <DownArrowIcon />
                </span>
            </button>

            {isOpen && (
                <div
                    className={`select__dropdown ${isDropUp ? 'select__dropdown--up' : 'select__dropdown--down'}`}
                    role="listbox"
                >
                    {options?.length > 0 ? (
                        options.map((opt) => (
                            <button
                                type="button"
                                key={opt}
                                className={`select__option ${value === opt ? 'is-selected' : ''}`}
                                onClick={() => {
                                    onChange(opt);
                                    // close();
                                }}
                            >
                                {opt}
                            </button>
                        ))
                    ) : (
                        <div className="select__empty">No options available</div>
                    )}
                </div>
            )}
            {error && <div className="field__error">{errorText}</div>}
        </div>
    );
}