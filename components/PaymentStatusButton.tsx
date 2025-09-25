import React from 'react'
import PlusIcon from '@/assets/images/table/plus.svg';

type PaymentStatusButtonProps = {
    status: string,
    onClick?: () => void,
    className?: string,
}

export default function PaymentStatusButton({ status, onClick, className }: PaymentStatusButtonProps) {

    const statusColorClassName: { [key: string]: string } = {
        'paid': '--paid',
        'payment_due': '--payment-due',
        'overpaid': '--overpaid',
        'partially_paid': '--partially-paid',
        'process_deposit': '--process-deposit',
    }

    const key = (status || '').toLowerCase().replace(/\s+/g, '_');
    const variant = statusColorClassName[key] || '';
    return (
        <button
            type='button'
            onClick={onClick}
            className={`table__payment ${variant} ${className || ''}`}
        >
            <span className="payment">
                <span className="payment__dot" aria-hidden />
                <span className="payment__text">{status.split('_').join(' ')}</span>
            </span>

            <PlusIcon className="payment__plus" aria-hidden width={12} height={12} />
        </button>
    )
}
