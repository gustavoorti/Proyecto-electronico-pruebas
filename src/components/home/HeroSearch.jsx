import { useState } from 'react';
import { BUDGET_OPTIONS, CAMPUSES, PREFERENCE_OPTIONS } from '../../data/campuses.js';
import { HERO_TABS } from '../../data/categories.js';
import { useApp } from '../../context/AppContext.jsx';

export default function HeroSearch() {
  const { applyHeroSearch } = useApp();
  const [tab, setTab] = useState('todos');
  const [campus, setCampus] = useState('');
  const [budget, setBudget] = useState('all');
  const [preference, setPreference] = useState('all');

  const activeTab = HERO_TABS.find((t) => t.id === tab);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900 text-white py-12 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
              Encuentra tu Casa o al{' '}
              <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-amber-300 bg-clip-text text-transparent">
                roomie ideal
              </span>{' '}
              cerca de tu Escuela/trabajo.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mb-8 leading-relaxed">
              Ahorra tiempo y comparte gastos de renta y servicios de forma transparente, sin
              intermediarios abusivos y con garantía de protección antifraude.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-5 sm:p-6 text-slate-800 shadow-2xl border border-white/20">
              <div className="flex p-1 bg-slate-100 rounded-2xl mb-5">
                {HERO_TABS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTab(item.id)}
                    className={`flex-1 py-2 text-xs sm:text-sm rounded-xl transition-all ${
                      tab === item.id
                        ? 'bg-white text-brand-700 shadow-sm font-bold'
                        : 'text-slate-600 font-semibold hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Universidad / Campus
                  </label>
                  <select
                    value={campus}
                    onChange={(e) => setCampus(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium outline-none focus:border-brand-500"
                  >
                    <option value="">Todas las universidades</option>
                    {CAMPUSES.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Presupuesto Máx.
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm outline-none focus:border-brand-500"
                    >
                      {BUDGET_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferencia
                    </label>
                    <select
                      value={preference}
                      onChange={(e) => setPreference(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm outline-none focus:border-brand-500"
                    >
                      {PREFERENCE_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    applyHeroSearch({
                      campus,
                      budget,
                      preference,
                      type: activeTab?.filter || 'all',
                    })
                  }
                  className="w-full bg-gradient-to-r from-brand-600 to-teal-600 hover:from-brand-700 hover:to-teal-700 text-white font-extrabold py-3 px-4 rounded-xl shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2"
                >
                  Explorar Alojamientos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
