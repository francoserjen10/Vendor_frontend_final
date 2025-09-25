//============== STATUSES ==============================

export const ORDER_STATUSES = ['draft', 'reserved', 'picked up', 'returned', 'cancelled', 'archived'] as const;
export type OrderStatus = typeof ORDER_STATUSES[number];

export const statusColor: Record<OrderStatus, string> = {
    draft: '--draft',
    returned: '--returned',
    reserved: '--reserved',
    'picked up': '--picked_up',
    cancelled: '--cancelled',
    archived: '--archived',
};