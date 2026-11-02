export function formatMoney(value) {
  return `$${Number(value).toLocaleString('es-MX')}`;
}

export function propertyImage(property) {
  return property?.imageRemote || property?.image || '/images/placeholders/property.jpg';
}

export function tagClass(tag) {
  if (tag === 'Verificado') return 'bg-emerald-600';
  if (tag === 'Destacado') return 'bg-amber-500';
  return 'bg-brand-600';
}
