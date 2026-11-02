import { useApp } from '../../context/AppContext.jsx';

export default function EmptyState() {
  const { resetFilters } = useApp();

  return (
    <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300">
      <h3 className="text-lg font-bold text-slate-800 mb-1">No se encontraron alojamientos</h3>
      <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
        Intenta cambiando los términos de búsqueda o seleccionando un rango de presupuesto más amplio.
      </p>
      <button
        type="button"
        onClick={resetFilters}
        className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-sm"
      >
        Ver todos los alojamientos
      </button>
    </div>
  );
}
