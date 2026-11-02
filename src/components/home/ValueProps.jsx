const ITEMS = [
  {
    title: 'Ahorro de Tiempo',
    body: 'Sin visitas innecesarias ni llamadas interminables. Recorridos fotográficos reales y proceso 100% digital.',
    color: 'bg-teal-100 text-brand-700',
  },
  {
    title: 'Cero Depósitos Ocultos',
    body: 'Precios claros con desglose de servicios (WiFi, luz, agua, mantenimiento) sin sorpresas a fin de mes.',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    title: 'Pago Seguro SPEI y Tarjeta',
    body: 'Aceptamos transferencias SPEI sin comisión y tarjetas de débito/crédito con comprobante oficial inmediato.',
    color: 'bg-indigo-100 text-indigo-700',
  },
  {
    title: 'Anfitriones Verificados',
    body: 'Validamos la identidad del propietario y la titularidad de la propiedad antes de publicar cualquier inmueble.',
    color: 'bg-emerald-100 text-emerald-700',
  },
];

export default function ValueProps() {
  return (
    <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-extrabold text-brand-600 uppercase tracking-widest">
          ¿Por qué BuscandoHogar?
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
          La forma más transparente y segura de rentar como estudiante
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ITEMS.map((item) => (
          <div
            key={item.title}
            className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-start"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.color}`}>
              ✓
            </div>
            <h3 className="font-extrabold text-slate-800 text-base mb-2">{item.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
