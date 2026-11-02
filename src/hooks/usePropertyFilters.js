import { useApp } from '../context/AppContext.jsx';

export function usePropertyFilters() {
  const {
    category,
    setCategory,
    query,
    setQuery,
    filteredProperties,
    resetFilters,
    setCategoryFilter,
    applyHeroSearch,
    searchByTerm,
    scrollToListings,
  } = useApp();

  return {
    category,
    setCategory,
    query,
    setQuery,
    filteredProperties,
    resetFilters,
    setCategoryFilter,
    applyHeroSearch,
    searchByTerm,
    scrollToListings,
  };
}
