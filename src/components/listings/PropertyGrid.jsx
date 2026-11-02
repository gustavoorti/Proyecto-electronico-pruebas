import { useApp } from '../../context/AppContext.jsx';
import EmptyState from './EmptyState.jsx';
import FilterBar from './FilterBar.jsx';
import PropertyCard from './PropertyCard.jsx';

export default function PropertyGrid() {
  const { filteredProperties } = useApp();

  return (
    <section id="listingsSection" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <FilterBar />
      {filteredProperties.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </section>
  );
}
