import { FILTER_CHIPS } from '../../data/categories.js';
import { useApp } from '../../context/AppContext.jsx';

export default function FilterBar() {
  const { category, setCategory } = useApp();

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Alojamientos Destacados
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 font-medium">
          Mostrando opciones verificadas con disponibilidad inmediata
        </p>
      </div>
      <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 custom-scrollbar">
        {FILTER_CHIPS.map((chip) => (
          <button
            key={chip.id}
            type="button"
            onClick={() => setCategory(chip.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              category === chip.id
                ? 'bg-brand-600 text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            {chip.label}
          </button>
        ))}
      </div>
    </div>
  );
}
