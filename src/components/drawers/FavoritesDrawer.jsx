import { formatMoney, propertyImage } from '../../lib/format.js';
import { useApp } from '../../context/AppContext.jsx';

export default function FavoritesDrawer() {
  const {
    activeDrawer,
    favorites,
    closeDrawer,
    toggleFavorite,
    openPropertyModal,
  } = useApp();

  if (activeDrawer !== 'favorites') return null;

  return (
    <div className="drawer-wrapper fixed inset-0 z-50">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={closeDrawer} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <h3 className="font-extrabold text-slate-800">Favoritos guardados</h3>
          <button type="button" onClick={closeDrawer} className="p-2 text-slate-400 hover:text-slate-600">
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
          {favorites.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <p className="text-xs font-bold">No tienes alojamientos guardados</p>
            </div>
          ) : (
            favorites.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 bg-slate-50 p-2.5 rounded-2xl border border-slate-200"
              >
                <img
                  src={propertyImage(item)}
                  alt={item.title}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-slate-800 truncate">{item.title}</h4>
                  <p className="text-[11px] text-slate-500">
                    {formatMoney(item.price)} / mes
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      closeDrawer();
                      openPropertyModal(item.id);
                    }}
                    className="text-[10px] font-bold text-brand-600 hover:underline"
                  >
                    Ver detalles
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => toggleFavorite(item.id)}
                  className="p-1.5 text-slate-400 hover:text-rose-500"
                >
                  🗑
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
