'use client';
import React from 'react';
import DownArrowIcon from '@/assets/images/downArrow.svg';

type Props = {
    id: string;
    title: string;
    defaultOpen?: boolean;
    children: React.ReactNode;
};

export default function FilterSection({
    id,
    title,
    defaultOpen = true,
    children
}: Props) {
    const [open, setOpen] = React.useState(defaultOpen);
    const bodyId = `${id}-body`;
    const titleId = `${id}-title`;

    return (
        <section
            className="orders-filters__section"
            aria-labelledby={titleId}
            data-open={open ? 'true' : 'false'}
        >
            <button
                type="button"
                className="orders-filters__section-header"
                aria-expanded={open}
                aria-controls={bodyId}
                onClick={() => setOpen(o => !o)}
            >
                <h3 id={titleId} className="orders-filters__section-title">{title}</h3>
                <DownArrowIcon className="orders-filters__arrow" width={13} height={7} aria-hidden />
            </button>

            <div id={bodyId} className="orders-filters__section-body collapsible">
                <div className="collapsible__inner">
                    {children}
                </div>
            </div>
        </section>
    );
}