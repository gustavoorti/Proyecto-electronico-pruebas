import { useApp } from '../../context/AppContext.jsx';

export default function Toast() {
  const { toasts } = useApp();

  return (
    <div className="fixed bottom-16 md:bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`${
            toast.type === 'success' ? 'bg-emerald-800' : 'bg-slate-900'
          } text-white text-xs font-bold px-4 py-3 rounded-2xl shadow-xl pointer-events-auto`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
