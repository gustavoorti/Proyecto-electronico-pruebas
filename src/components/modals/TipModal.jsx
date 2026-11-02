import { TIPS } from '../../data/tips.js';
import { useApp } from '../../context/AppContext.jsx';

export default function TipModal() {
  const { activeModal, selectedTipKey, closeModal } = useApp();
  if (activeModal !== 'tip') return null;
  const tip = TIPS[selectedTipKey];
  if (!tip) return null;

  return (
    <div className="modal-wrapper fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" onClick={closeModal} />
      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl p-6 space-y-4">
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
        >
          ✕
        </button>
        <span className="text-xs font-bold text-brand-600 uppercase tracking-widest">
          Guía UniTips
        </span>
        <h3 className="text-lg font-black text-slate-900">{tip.title}</h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{tip.body}</p>
        <button
          type="button"
          onClick={closeModal}
          className="w-full bg-brand-600 text-white font-extrabold py-2.5 rounded-xl text-xs"
        >
          Entendido
        </button>
      </div>
    </div>
  );
}
