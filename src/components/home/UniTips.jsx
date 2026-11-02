import { TIPS } from '../../data/tips.js';
import { useApp } from '../../context/AppContext.jsx';

export default function UniTips() {
  const { openTipModal } = useApp();

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-extrabold text-slate-800">UniTips - Guías Foráneas</h3>
      </div>
      <div className="space-y-3 text-xs">
        {Object.values(TIPS).map((tip) => (
          <button
            key={tip.slug}
            type="button"
            onClick={() => openTipModal(tip.slug)}
            className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-brand-50 border border-slate-200 hover:border-brand-200 transition-all flex items-center justify-between group"
          >
            <span className="font-bold text-slate-700 group-hover:text-brand-700">{tip.teaser}</span>
            <span className="text-slate-400 group-hover:text-brand-600 font-bold">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}
