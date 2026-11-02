import { useState } from 'react';
import { useApp } from '../../context/AppContext.jsx';

export default function Newsletter() {
  const { showToast } = useApp();
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    showToast('¡Suscripción exitosa! Te enviaremos alertas de disponibilidad.', 'success');
    setEmail('');
  };

  return (
    <section className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center mx-auto mb-4 font-black">
          ✉
        </div>
        <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
          Recibe alertas de nuevos cuartos y depas en tu universidad
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto mb-6">
          Te notificaremos únicamente cuando haya espacios disponibles cerca de tu facultad. Sin spam.
        </p>
        <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo universitario (@unam.mx, @tec.mx...)"
            className="flex-1 px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-brand-500 outline-none"
          />
          <button
            type="submit"
            className="bg-brand-600 hover:bg-brand-700 text-white font-extrabold px-6 py-3 rounded-xl text-sm shadow-md"
          >
            Suscribirme
          </button>
        </form>
        <p className="text-[10px] text-slate-400 mt-3">
          Tus datos están protegidos conforme al Aviso de Privacidad Estudiantil.
        </p>
      </div>
    </section>
  );
}
