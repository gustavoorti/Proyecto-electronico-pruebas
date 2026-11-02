import UniTips from './UniTips.jsx';

const TESTIMONIALS = [
  {
    initials: 'SR',
    name: 'Sofia Ramírez',
    role: 'Estudiante de Medicina, UNAM',
    quote:
      'Venir de Oaxaca a estudiar a UNAM CU me daba mucho miedo por las estafas. Con UniHabitat aparté mi habitación con total tranquilidad y todo estaba exactamente como en las fotos.',
    avatar: 'bg-slate-300 text-slate-700',
  },
  {
    initials: 'CM',
    name: 'Carlos Mendoza',
    role: 'Ingeniería, Tec Santa Fe',
    quote:
      'Encontré a mi roomie actual en menos de 3 días. La plataforma nos ayudó a dividir los gastos de internet y luz con contratos super claros. ¡10/10!',
    avatar: 'bg-teal-200 text-teal-800',
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-slate-100/70 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-brand-100 text-brand-800 text-xs font-extrabold px-2.5 py-0.5 rounded-full">
                Testimonios Reales
              </span>
              <h2 className="text-xl font-extrabold text-slate-800">Lo que dicen otros alumnos</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
                >
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full font-bold text-xs flex items-center justify-center ${t.avatar}`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">{t.name}</h4>
                      <p className="text-[10px] text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <UniTips />
          </div>
        </div>
      </div>
    </section>
  );
}
