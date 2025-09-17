import React, { useEffect, useRef, useState } from 'react';
import AirDatepicker, { AirDatepickerLocale } from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeEn from 'air-datepicker/locale/en';

type DateRangePickerProps = {
    startDate: Date | null;
    setStartDate?: (date: Date | null) => void;
    endDate: Date | null;
    setEndDate?: (date: Date | null) => void;
    onChange: (range: { start: Date | null; end: Date | null }) => void;
    subtitle?: boolean;
    maxWidth?: number;
    className?: string;
    // hasEndDate?: boolean;
    minDate?: Date;
    maxDate?: Date;
};

const DateRangePicker = ({
    startDate,
    setStartDate = () => { },
    endDate,
    setEndDate = () => { },
    onChange = () => { },
    subtitle = false,
    maxWidth,
    className = '',
    // hasEndDate = true,
    minDate,
    maxDate,
}: DateRangePickerProps) => {
    // const [locale, setLocale] = useState<any>(localeEn);
    const startInputRef = useRef<HTMLInputElement | null>(null);
    const endInputRef = useRef<HTMLInputElement | null>(null);
    const datepickerRef = useRef<AirDatepicker | null>(null);

    const baseLocale: AirDatepickerLocale = localeEn;

    const daysMin =
        Array.isArray((baseLocale).daysShort)
            ? (baseLocale).daysShort
            : (baseLocale).daysMin?.map((d: string) => d.slice(0, 3))

    // useEffect(() => {
    //     const loadLocale = async () => {
    //         try {
    //             const userLang = navigator.language.slice(0, 2);
    //             const localeModule = await import(`air-datepicker/locale/${userLang}`);
    //             setLocale(localeModule.default)
    //         } catch {
    //             const defaultLocale = await import('air-datepicker/locale/en');
    //             setLocale(defaultLocale.default)
    //         }
    //     };
    //     loadLocale()
    // }, []);

    useEffect(() => {
        if (startInputRef.current) {
            datepickerRef.current = new AirDatepicker(startInputRef.current, {
                inline: true,
                range: true,
                autoClose: false,
                minDate: minDate,
                maxDate: maxDate,
                locale: { ...baseLocale, daysMin },
                selectedDates: [startDate, endDate].filter(Boolean) as Date[],
                prevHtml: `<span class="drp-navbtn"><img src="/arrowDateRange.svg" width="7.41" height="12" alt=""></span>`,
                nextHtml: `<span class="drp-navbtn drp-navbtn--next"><img src="/arrowDateRange.svg" width="7.41" height="12" alt=""></span>`,
                navTitles: {
                    days: 'MMMM yyyy',
                    months: 'yyyy',
                    years: 'yyyy1 - yyyy2'
                },

                onSelect({ date }) {
                    if (Array.isArray(date)) {
                        const [start, end] = date as Date[];
                        onChange({ start: start || null, end: end || null });
                    } else if (date instanceof Date) {
                        onChange({ start: date, end: null });
                    } else {
                        onChange({ start: null, end: null });
                    }
                },
            });
            return () => {
                datepickerRef.current?.destroy();
                datepickerRef.current = null;
            }
        }
    }, []);

    useEffect(() => {
        const dp: AirDatepicker | null = datepickerRef.current;

        if (!dp) return;
        const dates: Date[] | string | null = [];

        // if (startDate) dates.push(startDate);
        // if (endDate) dates.push(endDate);

        if (dates.length) {
            dp.selectDate(dates)
        } else {
            dp.clear;
        }
    }, [startDate, endDate]);

    return (

        <>

            <div className={`date-range ${className}`} style={maxWidth ? { maxWidth } : undefined}>
                <input ref={startInputRef} type="text" className="date-range__anchor" readOnly aria-hidden />
                <div className="date-range__footer">
                    <button
                        type="button"
                        className="btn btn--primary btn--sm"
                        onClick={() => { }}
                    >
                        Apply
                    </button>

                    <button
                        type="button"
                        className="btn btn--outline btn--sm"
                        onClick={() => onChange({ start: null, end: null })}
                    >
                        Clear all
                    </button>
                </div>
            </div>
        </>
    );
};

export default DateRangePicker;