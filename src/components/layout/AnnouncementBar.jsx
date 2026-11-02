import { useApp } from '../../context/AppContext.jsx';

export default function AnnouncementBar() {
  const { announcementVisible, setAnnouncementVisible } = useApp();
  if (!announcementVisible) return null;

  return (
    <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-teal-900 text-white text-xs md:text-sm py-2.5 px-4 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 pr-8">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="bg-amber-400 text-brand-900 text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full tracking-wide">
            Temporada Escolar 2026
          </span>
          <p className="font-medium">
            ¡Prepárate para el nuevo ciclo escolar! Reserva tu espacio sin comisiones de apertura.
          </p>
          <span className="hidden lg:inline-block text-teal-200">|</span>
          <p className="hidden lg:flex items-center gap-1 text-teal-100 text-xs">
            Garantía de Protección Antifraude para estudiantes foráneos
          </p>
        </div>
        <button
          type="button"
          onClick={() => setAnnouncementVisible(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-200 hover:text-white p-1 rounded-md"
          title="Cerrar aviso"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
