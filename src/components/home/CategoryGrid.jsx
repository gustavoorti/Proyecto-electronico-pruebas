import { CATEGORIES } from '../../data/categories.js';
import { useApp } from '../../context/AppContext.jsx';

const toneMap = {
  brand: {
    box: 'bg-teal-50 text-brand-600 group-hover:bg-brand-600',
    title: 'group-hover:text-brand-700',
    link: 'text-brand-600',
  },
  amber: {
    box: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600',
    title: 'group-hover:text-amber-700',
    link: 'text-amber-600',
  },
  indigo: {
    box: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600',
    title: 'group-hover:text-indigo-700',
    link: 'text-indigo-600',
  },
  emerald: {
    box: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600',
    title: 'group-hover:text-emerald-700',
    link: 'text-emerald-600',
  },
};

export default function CategoryGrid() {
  const { setCategoryFilter } = useApp();

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Explora por Categoría</h2>
          <p className="text-sm text-slate-500 font-medium">
            Elige la modalidad de hospedaje que mejor se adapte a tu presupuesto
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => {
            const tone = toneMap[cat.tone] || toneMap.brand;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategoryFilter(cat.filter)}
                className="group text-left cursor-pointer bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm card-hover-effect flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:text-white transition-all ${tone.box}`}
                  >
                    <span className="text-xl font-black">{cat.title.charAt(0)}</span>
                  </div>
                  <h3 className={`font-extrabold text-slate-800 text-base mb-1 ${tone.title}`}>
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-500">{cat.description}</p>
                </div>
                <span
                  className={`mt-4 inline-flex items-center text-xs font-bold group-hover:translate-x-1 transition-transform ${tone.link}`}
                >
                  Ver opciones →
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
