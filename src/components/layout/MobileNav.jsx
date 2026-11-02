import { useApp } from '../../context/AppContext.jsx';

function IconHome() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
}

function IconBag() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
  );
}

function IconUser() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );
}

export default function MobileNav() {
  const { favorites, bookings, resetFilters, scrollToListings, openDrawer, openModal } = useApp();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-3 py-2 flex items-center justify-around shadow-lg">
      <button
        type="button"
        onClick={() => {
          resetFilters();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="flex flex-col items-center gap-1 text-slate-600 hover:text-brand-600"
      >
        <IconHome />
        <span className="text-[10px] font-bold">Inicio</span>
      </button>
      <button
        type="button"
        onClick={scrollToListings}
        className="flex flex-col items-center gap-1 text-slate-600 hover:text-brand-600"
      >
        <IconSearch />
        <span className="text-[10px] font-bold">Buscar</span>
      </button>
      <button
        type="button"
        onClick={() => openDrawer('favorites')}
        className="flex flex-col items-center gap-1 text-slate-600 hover:text-rose-600 relative"
      >
        <IconHeart />
        <span className="text-[10px] font-bold">Guardados</span>
        {favorites.length > 0 && (
          <span className="absolute -top-1 right-1 bg-rose-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            {favorites.length}
          </span>
        )}
      </button>
      <button
        type="button"
        onClick={() => openDrawer('booking')}
        className="flex flex-col items-center gap-1 text-slate-600 hover:text-brand-600 relative"
      >
        <IconBag />
        <span className="text-[10px] font-bold">Apartados</span>
        {bookings.length > 0 && (
          <span className="absolute -top-1 right-1 bg-brand-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            {bookings.length}
          </span>
        )}
      </button>
      <button
        type="button"
        onClick={() => openModal('profile')}
        className="flex flex-col items-center gap-1 text-slate-600 hover:text-brand-600"
      >
        <IconUser />
        <span className="text-[10px] font-bold">Perfil</span>
      </button>
    </div>
  );
}
