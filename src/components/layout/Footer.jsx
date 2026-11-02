import { useApp } from '../../context/AppContext.jsx';

export default function Footer() {
  const { searchByTerm, showToast, openModal } = useApp();

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold">
              U
            </div>
            <span className="text-lg font-black text-white">UniHabitat</span>
          </div>
          <p className="text-slate-400 leading-relaxed mb-4 max-w-xs">
            Plataforma especializada en soluciones de hospedaje seguro y transparente para la
            comunidad universitaria de México.
          </p>
          <div className="flex items-center gap-3 text-slate-400">
            <span className="bg-slate-800 px-2 py-1 rounded text-[10px] font-mono border border-slate-700">
              Pago por SPEI
            </span>
            <span className="bg-slate-800 px-2 py-1 rounded text-[10px] font-mono border border-slate-700">
              Visa / Mastercard
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">Ciudades</h4>
          <ul className="space-y-2">
            {[
              ['UNAM', 'Ciudad de México'],
              ['Guadalajara', 'Guadalajara'],
              ['MTY', 'Monterrey'],
              ['Puebla', 'Puebla'],
            ].map(([term, label]) => (
              <li key={term}>
                <button
                  type="button"
                  onClick={() => searchByTerm(term)}
                  className="hover:text-teal-400 transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">
            Universidades
          </h4>
          <ul className="space-y-2">
            {[
              ['UNAM CU', 'UNAM CU'],
              ['Tec', 'Tec de Monterrey'],
              ['IPN', 'IPN Zacatenco'],
              ['UAM', 'UAM Xochimilco'],
            ].map(([term, label]) => (
              <li key={term}>
                <button
                  type="button"
                  onClick={() => searchByTerm(term)}
                  className="hover:text-teal-400 transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">
            Legal & Soporte
          </h4>
          <ul className="space-y-2">
            <li>
              <button
                type="button"
                onClick={() => showToast('Guía Antifraude en actualización', 'info')}
                className="hover:text-teal-400"
              >
                Guía Antifraude
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => showToast('Términos de servicio para estudiantes', 'info')}
                className="hover:text-teal-400"
              >
                Términos de Servicio
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => showToast('Aviso de Privacidad 2026', 'info')}
                className="hover:text-teal-400"
              >
                Privacidad
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => openModal('profile')}
                className="hover:text-teal-400"
              >
                Soporte Estudiantil
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
        <p>© 2026 UniHabitat México. Todos los derechos reservados.</p>
        <p className="text-slate-500">Diseñado con enfoque en accesibilidad y seguridad estudiantil.</p>
      </div>
    </footer>
  );
}
