import { useApp } from '../../context/AppContext.jsx';
import { PROPERTY_TYPES } from '../../data/categories.js';

export default function PublishModal() {
  const { activeModal, closeModal, showToast } = useApp();
  if (activeModal !== 'publish') return null;

  const onSubmit = (e) => {
    e.preventDefault();
    closeModal();
    showToast(
      '¡Tu publicación ha sido enviada! Un asesor validará la propiedad en menos de 2 horas.',
      'success'
    );
  };

  return (
    <div className="modal-wrapper fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" onClick={closeModal} />
      <div className="relative bg-white w-full max-w-xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <h3 className="font-extrabold text-slate-800 text-lg">
            Publicar un Espacio Universitario
          </h3>
          <button type="button" onClick={closeModal} className="p-1.5 text-slate-400 hover:text-slate-600">
            ✕
          </button>
        </div>
        <form onSubmit={onSubmit} className="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm custom-scrollbar">
          <div>
            <label className="block font-bold text-slate-700 mb-1">Título de la publicación</label>
            <input
              required
              type="text"
              placeholder="Ej: Habitación amueblada a 5 min de UNAM CU"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-brand-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Modalidad</label>
              <select
                required
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-brand-500"
              >
                {PROPERTY_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Renta Mensual ($ MXN)</label>
              <input
                required
                type="number"
                placeholder="6500"
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-brand-500"
              />
            </div>
          </div>
          <div>
            <label className="block font-bold text-slate-700 mb-1">Universidad / Campus Cercano</label>
            <input
              required
              type="text"
              placeholder="Ej: Tec de Monterrey Santa Fe"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-brand-500"
            />
          </div>
          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Descripción corta y reglas de casa
            </label>
            <textarea
              required
              rows="3"
              placeholder="Indica amenidades, si incluye servicios, ambiente estudiantil..."
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-brand-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brand-600 hover:bg-brand-700 text-white font-extrabold py-3 rounded-xl shadow-md mt-2"
          >
            Enviar a Verificación y Publicar
          </button>
        </form>
      </div>
    </div>
  );
}
