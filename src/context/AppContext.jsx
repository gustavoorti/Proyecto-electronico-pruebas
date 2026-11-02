import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { PROPERTIES } from '../data/properties.js';
import { loadJson, saveJson } from '../lib/storage.js';

const AppContext = createContext(null);

function filterProperties({ category, query, maxBudget, preference }) {
  return PROPERTIES.filter((p) => {
    const matchCategory =
      category === 'all' ||
      p.type === category ||
      (category === 'cerca' && p.distance.toLowerCase().includes('mins')) ||
      (category === 'verified' && p.tag === 'Verificado') ||
      p.amenities.includes(category);

    const q = query.toLowerCase().trim();
    const matchSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.campus.toLowerCase().includes(q) ||
      p.distance.toLowerCase().includes(q);

    const matchBudget = p.price <= maxBudget;
    const matchPref = preference === 'all' || p.amenities.includes(preference);

    return matchCategory && matchSearch && matchBudget && matchPref;
  });
}

export function AppProvider({ children }) {
  const [favorites, setFavorites] = useState(() => loadJson('bh_favorites', []));
  const [bookings, setBookings] = useState(() => loadJson('bh_bookings', []));
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [maxBudget, setMaxBudget] = useState(Infinity);
  const [preference, setPreference] = useState('all');
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [activeModal, setActiveModal] = useState(null);
  const [activeDrawer, setActiveDrawer] = useState(null);
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const [selectedTipKey, setSelectedTipKey] = useState(null);
  const [toasts, setToasts] = useState([]);

  useEffect(() => saveJson('bh_favorites', favorites), [favorites]);
  useEffect(() => saveJson('bh_bookings', bookings), [bookings]);

  useEffect(() => {
    const open = Boolean(activeModal || activeDrawer);
    document.body.classList.toggle('overflow-hidden', open);
  }, [activeModal, activeDrawer]);

  const showToast = useCallback((message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  const openModal = useCallback((id) => setActiveModal(id), []);
  const closeModal = useCallback(() => {
    setActiveModal(null);
    setSelectedPropertyId(null);
    setSelectedTipKey(null);
  }, []);
  const openDrawer = useCallback((id) => setActiveDrawer(id), []);
  const closeDrawer = useCallback(() => setActiveDrawer(null), []);

  const filteredProperties = useMemo(
    () => filterProperties({ category, query, maxBudget, preference }),
    [category, query, maxBudget, preference]
  );

  const isFavorite = useCallback(
    (id) => favorites.some((item) => item.id === id),
    [favorites]
  );

  const toggleFavorite = useCallback(
    (id) => {
      const prop = PROPERTIES.find((p) => p.id === id);
      if (!prop) return;
      setFavorites((prev) => {
        const exists = prev.some((item) => item.id === id);
        if (exists) {
          showToast(`Removido de favoritos: ${prop.title}`, 'info');
          return prev.filter((item) => item.id !== id);
        }
        showToast(`Añadido a favoritos: ${prop.title}`, 'success');
        return [...prev, prop];
      });
    },
    [showToast]
  );

  const addToBookings = useCallback(
    (id) => {
      const prop = PROPERTIES.find((p) => p.id === id);
      if (!prop) return;
      setBookings((prev) => {
        if (prev.some((b) => b.id === id)) return prev;
        showToast(`Añadido a tu solicitud de apartado: ${prop.title}`, 'success');
        return [...prev, prop];
      });
      setActiveDrawer('booking');
    },
    [showToast]
  );

  const removeFromBookings = useCallback(
    (id) => {
      setBookings((prev) => prev.filter((b) => b.id !== id));
      showToast('Alojamiento eliminado de tu apartado', 'info');
    },
    [showToast]
  );

  const confirmCheckout = useCallback(() => {
    setActiveDrawer(null);
    setBookings([]);
    showToast('¡Solicitud enviada! Te redirigiremos al portal de pago seguro SPEI...', 'success');
  }, [showToast]);

  const openPropertyModal = useCallback(
    (id) => {
      setSelectedPropertyId(id);
      setActiveModal('property');
    },
    []
  );

  const openTipModal = useCallback((key) => {
    setSelectedTipKey(key);
    setActiveModal('tip');
  }, []);

  const resetFilters = useCallback(() => {
    setCategory('all');
    setQuery('');
    setMaxBudget(Infinity);
    setPreference('all');
  }, []);

  const scrollToListings = useCallback(() => {
    document.getElementById('listingsSection')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const applyHeroSearch = useCallback(
    ({ campus, budget, preference: pref, type }) => {
      setQuery(campus || '');
      setMaxBudget(budget === 'all' || !budget ? Infinity : Number(budget));
      setPreference(pref || 'all');
      if (type && type !== 'all') setCategory(type);
      showToast('Filtros aplicados con éxito', 'success');
      setTimeout(scrollToListings, 50);
    },
    [scrollToListings, showToast]
  );

  const setCategoryFilter = useCallback(
    (value) => {
      setCategory(value);
      setTimeout(scrollToListings, 50);
    },
    [scrollToListings]
  );

  const searchByTerm = useCallback(
    (term) => {
      setQuery(term);
      setTimeout(scrollToListings, 50);
    },
    [scrollToListings]
  );

  const value = {
    favorites,
    bookings,
    category,
    setCategory,
    query,
    setQuery,
    maxBudget,
    preference,
    announcementVisible,
    setAnnouncementVisible,
    activeModal,
    activeDrawer,
    selectedPropertyId,
    selectedTipKey,
    toasts,
    filteredProperties,
    showToast,
    openModal,
    closeModal,
    openDrawer,
    closeDrawer,
    isFavorite,
    toggleFavorite,
    addToBookings,
    removeFromBookings,
    confirmCheckout,
    openPropertyModal,
    openTipModal,
    resetFilters,
    scrollToListings,
    applyHeroSearch,
    setCategoryFilter,
    searchByTerm,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
