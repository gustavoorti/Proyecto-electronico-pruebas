import { useCountdown } from '../../hooks/useCountdown.js';
import { useApp } from '../../context/AppContext.jsx';

export default function TrustBanner() {
  const timer = useCountdown();
  const { setCategoryFilter } = useApp();

  return (
    <section className="bg-gradient-to-r from-teal-900 via-brand-900 to-slate-900 text-white py-12 border-y border-teal-800/50 my-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-extrabold px-3 py-1 rounded-full mb-3">
              Oferta de Inicio de Semestre
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-3">
              Aparta tu lugar 100% en línea y desbloquea el contacto directo del arrendador
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              Tu dinero queda retenido de forma segura en UniHabitat y solo se transfiere al
              arrendador 24 horas después de que revises tu habitación el día de entrada.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-200 mb-3">
              Promoción de cuotas $0 vence en:
            </p>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[
                [timer.days, 'Días'],
                [timer.hours, 'Horas'],
                [timer.minutes, 'Mins'],
                [timer.seconds, 'Segs'],
              ].map(([value, label]) => (
                <div key={label} className="bg-slate-900/80 p-2.5 rounded-xl border border-white/10">
                  <span className="block text-2xl sm:text-3xl font-black text-amber-400">{value}</span>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase">{label}</span>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setCategoryFilter('verified')}
              className="w-full bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow-md"
            >
              Ver Opciones con Garantía Antifraude
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
