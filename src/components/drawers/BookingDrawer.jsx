import { formatMoney, propertyImage } from '../../lib/format.js';
import { useApp } from '../../context/AppContext.jsx';

export default function BookingDrawer() {
  const {
    activeDrawer,
    bookings,
    closeDrawer,
    removeFromBookings,
    confirmCheckout,
  } = useApp();

  if (activeDrawer !== 'booking') return null;

  const subtotal = bookings.reduce((sum, item) => sum + item.deposit, 0);

  return (
    <div className="drawer-wrapper fixed inset-0 z-50">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={closeDrawer} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <h3 className="font-extrabold text-slate-800">Solicitudes de apartado</h3>
          <button type="button" onClick={closeDrawer} className="p-2 text-slate-400 hover:text-slate-600">
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
          {bookings.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <p className="text-xs font-bold">Tu carrito de apartado está vacío</p>
            </div>
          ) : (
            bookings.map((item) => (
              <div
                key={item.id}
                className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-2"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={propertyImage(item)}
                    alt={item.title}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-slate-800 truncate">{item.title}</h4>
                    <p className="text-[10px] text-slate-500">{item.campus}</p>
                    <span className="text-xs font-black text-brand-700">
                      Apartado hoy: {formatMoney(item.deposit)}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromBookings(item.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-500"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500 font-medium">Subtotal de apartados</span>
            <span className="font-bold text-slate-800">{formatMoney(subtotal)} MXN</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="font-extrabold text-slate-900">Total a pagar hoy</span>
            <span className="font-black text-brand-700">{formatMoney(subtotal)} MXN</span>
          </div>
          <button
            type="button"
            disabled={bookings.length === 0}
            onClick={confirmCheckout}
            className="w-full bg-brand-600 hover:bg-brand-700 disabled:bg-slate-300 text-white font-extrabold py-3 rounded-xl text-sm shadow-md"
          >
            Confirmar y pagar con SPEI
          </button>
        </div>
      </div>
    </div>
  );
}
