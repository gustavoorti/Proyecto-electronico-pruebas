import { useApp } from '../../context/AppContext.jsx';

export default function ProfileModal() {
  const { activeModal, closeModal, showToast, bookings } = useApp();
  if (activeModal !== 'profile') return null;

  return (
    <div className="modal-wrapper fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" onClick={closeModal} />
      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl p-6 space-y-5">
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
        >
          ✕
        </button>
        <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
          <div className="w-14 h-14 rounded-2xl bg-slate-800 text-white font-extrabold text-xl flex items-center justify-center shadow-md">
            GO
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-lg">Usuario prueba</h3>
            <p className="text-xs text-emerald-600 font-bold">Facultad de informática</p>
            <p className="text-[11px] text-slate-400">ga.ortizt233@prueba.com</p>
          </div>
        </div>
        <div className="space-y-3 text-xs">
          <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
            <span className="font-bold text-slate-700">Garantía de depósito activo</span>
            <span className="text-emerald-600 font-extrabold">Protegido $0 cuotas</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
            <span className="font-bold text-slate-700">Historial de reservas</span>
            <span className="text-slate-500 font-medium">{bookings.length} activas</span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            showToast('Sesión de prueba activa', 'info');
            closeModal();
          }}
          className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 rounded-xl text-xs"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
