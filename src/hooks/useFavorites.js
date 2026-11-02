import { useApp } from '../context/AppContext.jsx';

export function useFavorites() {
  const { favorites, isFavorite, toggleFavorite, openDrawer } = useApp();
  return { favorites, isFavorite, toggleFavorite, openFavorites: () => openDrawer('favorites') };
}
