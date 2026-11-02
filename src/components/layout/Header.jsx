import { useState } from 'react';
import { useApp } from '../../context/AppContext.jsx';

export default function Header() {
  const {
    favorites,
    bookings,
    setQuery,
    resetFilters,
    scrollToListings,
    setCategoryFilter,
    openDrawer,
    openModal,
  } = useApp();
  const [search, setSearch] = useState('');

  const runSearch = () => {
    setQuery(search);
    scrollToListings();
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        <button type="button" onClick={resetFilters} className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 to-teal-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-brand-800 to-teal-600 bg-clip-text text-transparent">
                BuscandoHogar
              </span>
              <span className="bg-teal-100 text-teal-800 text-[10px] font-bold px-1.5 py-0.5 rounded border border-teal-200">
                2026
              </span>
            </div>
            <p className="text-[10px] text-slate-500 font-medium hidden sm:block">
              Alojamientos Universitarios
            </p>
          </div>
        </button>

        <div className="hidden md:flex flex-1 max-w-md mx-4 relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && runSearch()}
            placeholder="Buscar por universidad, zona o colonia..."
            className="w-full pl-10 pr-10 py-2 text-sm bg-slate-100 border border-transparent rounded-full focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
          />
          <svg
            className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <button
            type="button"
            onClick={runSearch}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-brand-600 hover:bg-brand-700 text-white p-1.5 rounded-full"
          >
            →
          </button>
        </div>

        <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold text-slate-600">
          <button
            type="button"
            onClick={() => setCategoryFilter('departamento')}
            className="px-3 py-1.5 rounded-lg hover:text-brand-700 hover:bg-slate-100"
          >
            Departamentos
          </button>
          <button
            type="button"
            onClick={() => setCategoryFilter('habitacion')}
            className="px-3 py-1.5 rounded-lg hover:text-brand-700 hover:bg-slate-100"
          >
            Habitaciones
          </button>
          <button
            type="button"
            onClick={() => setCategoryFilter('roomie')}
            className="px-3 py-1.5 rounded-lg hover:text-brand-700 hover:bg-slate-100"
          >
            Busco Roomie
          </button>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => openModal('publish')}
            className="hidden sm:flex items-center gap-1.5 bg-brand-50 text-brand-700 hover:bg-brand-100 border border-teal-200 px-3 py-2 rounded-xl text-xs font-bold"
          >
            + Publicar Espacio
          </button>

          <button
            type="button"
            onClick={() => openDrawer('favorites')}
            className="relative p-2.5 text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-xl"
            title="Favoritos"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span
              className={`absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white transition-transform ${
                favorites.length ? 'scale-100' : 'scale-0'
              }`}
            >
              {favorites.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => openDrawer('booking')}
            className="relative p-2.5 text-slate-600 hover:text-brand-600 hover:bg-brand-50 rounded-xl"
            title="Apartados"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span
              className={`absolute -top-1 -right-1 bg-brand-600 text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white transition-transform ${
                bookings.length ? 'scale-100' : 'scale-0'
              }`}
            >
              {bookings.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => openModal('profile')}
            className="flex items-center gap-2 p-1.5 rounded-xl border border-slate-200 hover:bg-slate-50"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-800 text-white font-bold text-xs flex items-center justify-center">
              MX
            </div>
            <div className="text-left hidden lg:block pr-1">
              <p className="text-xs font-bold text-slate-800 leading-tight">Mi Cuenta</p>
              <p className="text-[10px] text-emerald-600 font-semibold">Estudiante Verificado</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
