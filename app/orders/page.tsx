import OrdersFilters from "@/components/orders/OrdersFilters";

export default function OrdersPage() {
    return (
        <section className="orders">
            <div className="orders__layout">
                <OrdersFilters />

                <div className="orders__content">
                    {/* acá después agregamos: título+descripción+New Order, 
              filtro centrado, 4 cards de métricas y la tabla */}
                </div>
            </div>
        </section>
    );
}
