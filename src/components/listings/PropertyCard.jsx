import { formatMoney, propertyImage, tagClass } from '../../lib/format.js';
import { useApp } from '../../context/AppContext.jsx';

export default function PropertyCard({ property }) {
  const { isFavorite, toggleFavorite, openPropertyModal, addToBookings } = useApp();
  const fav = isFavorite(property.id);

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm card-hover-effect flex flex-col justify-between">
      <div>
        <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
          <img
            src={propertyImage(property)}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/600x400/14b8a6/fff?text=UniHabitat';
            }}
          />
          <span
            className={`absolute top-3 left-3 ${tagClass(
              property.tag
            )} text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm`}
          >
            {property.tag}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(property.id);
            }}
            className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full shadow-md text-slate-600 hover:text-rose-500"
          >
            <svg
              className={`w-4 h-4 ${fav ? 'text-rose-500 fill-current' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span className="font-bold text-brand-600 uppercase tracking-wider">
              {property.category}
            </span>
            <span className="font-medium">{property.gender}</span>
          </div>
          <h3
            className="font-extrabold text-slate-900 text-base leading-snug mb-2 hover:text-brand-700 cursor-pointer"
            onClick={() => openPropertyModal(property.id)}
          >
            {property.title}
          </h3>
          <p className="text-xs text-slate-500 flex items-center gap-1 mb-3">
            <span className="truncate">{property.distance}</span>
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {property.amenities.slice(0, 3).map((a) => (
              <span
                key={a}
                className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2 py-0.5 rounded-md"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <div>
          <span className="text-[10px] text-slate-400 font-bold uppercase block">Renta desde</span>
          <span className="text-lg font-black text-slate-900">
            {formatMoney(property.price)}{' '}
            <span className="text-xs font-normal text-slate-500">/mes</span>
          </span>
        </div>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={() => openPropertyModal(property.id)}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-3 py-2 rounded-xl text-xs"
          >
            Detalles
          </button>
          <button
            type="button"
            onClick={() => addToBookings(property.id)}
            className="bg-brand-600 hover:bg-brand-700 text-white font-extrabold px-3.5 py-2 rounded-xl text-xs shadow-sm"
          >
            Apartar
          </button>
        </div>
      </div>
    </div>
  );
}
