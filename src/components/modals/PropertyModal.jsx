import { PROPERTIES } from '../../data/properties.js';
import { formatMoney, propertyImage, tagClass } from '../../lib/format.js';
import { useApp } from '../../context/AppContext.jsx';

export default function PropertyModal() {
  const {
    activeModal,
    selectedPropertyId,
    closeModal,
    toggleFavorite,
    addToBookings,
  } = useApp();

  if (activeModal !== 'property') return null;
  const p = PROPERTIES.find((item) => item.id === selectedPropertyId);
  if (!p) return null;

  return (
    <div className="modal-wrapper fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" onClick={closeModal} />
      <div className="relative bg-white w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-100">
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-3 right-3 z-20 bg-slate-900/60 hover:bg-slate-900 text-white p-2 rounded-full"
        >
          ✕
        </button>

        <div className="overflow-y-auto custom-scrollbar">
          <div className="relative h-64 sm:h-80 bg-slate-100">
            <img src={propertyImage(p)} alt={p.title} className="w-full h-full object-cover" />
            <span
              className={`absolute top-4 left-4 ${tagClass(
                p.tag
              )} text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full`}
            >
              {p.tag}
            </span>
          </div>

          <div className="p-5 sm:p-6 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
                    {p.category}
                  </span>
                  <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                    {p.gender}
                  </span>
                </div>
                <h2 className="text-2xl font-black text-slate-900 leading-tight">{p.title}</h2>
                <p className="text-xs font-medium text-slate-500 mt-1">
                  {p.distance} ({p.campus})
                </p>
              </div>
              <div className="text-left sm:text-right bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">
                  Renta Mensual
                </span>
                <span className="text-2xl font-black text-brand-700">
                  {formatMoney(p.price)} / mes
                </span>
                <span className="text-[11px] text-slate-500 block">
                  Cuota de apartado seguro hoy: {formatMoney(p.deposit)} MXN
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                Amenidades e Inclusiones
              </h4>
              <div className="flex flex-wrap gap-2">
                {p.amenities.map((a) => (
                  <span
                    key={a}
                    className="bg-brand-50 text-brand-800 text-xs font-semibold px-3 py-1 rounded-lg border border-teal-200"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                Descripción del Espacio
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.description}</p>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-lg">
                ✓
              </div>
              <div className="text-xs">
                <h5 className="font-bold text-teal-900">Arrendador Verificado por UniHabitat</h5>
                <p className="text-teal-700">
                  Identificación oficial y escrituras revisadas antes de su publicación.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => toggleFavorite(p.id)}
            className="p-3 border border-slate-300 rounded-2xl hover:bg-slate-100"
          >
            ♥
          </button>
          <button
            type="button"
            onClick={() => {
              closeModal();
              addToBookings(p.id);
            }}
            className="flex-1 bg-brand-600 hover:bg-brand-700 text-white font-extrabold py-3.5 px-6 rounded-2xl text-sm shadow-md"
          >
            Apartar Espacio Ahora
          </button>
        </div>
      </div>
    </div>
  );
}
