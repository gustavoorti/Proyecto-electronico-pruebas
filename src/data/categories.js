export const CATEGORIES = [
  {
    id: 'departamento',
    title: 'Casas Completas',
    description: 'Privacidad total para ti o con tus amigos organizados.',
    filter: 'departamento',
    tone: 'brand',
  },
  {
    id: 'habitacion',
    title: 'Habitaciones Privadas',
    description: 'Cuartos amueblados con servicios e internet incluidos.',
    filter: 'habitacion',
    tone: 'amber',
  },
  {
    id: 'roomie',
    title: 'Busco Roomie',
    description: 'Conecta con estudiantes compatibles para compartir depa.',
    filter: 'roomie',
    tone: 'indigo',
  },
  {
    id: 'cerca',
    title: 'A 10 mins de tu destino',
    description: 'Camina a tus clases sin preocuparte por el tráfico.',
    filter: 'cerca',
    tone: 'emerald',
  },
];

export const FILTER_CHIPS = [
  { id: 'all', label: 'Todos' },
  { id: 'departamento', label: 'Departamentos' },
  { id: 'habitacion', label: 'Habitaciones' },
  { id: 'roomie', label: 'Busco Roomie' },
  { id: 'Solo Chicas', label: 'Solo Chicas' },
  { id: 'Servicios Incluidos', label: 'Servicios Incluidos' },
];

export const PROPERTY_TYPES = [
  { value: 'departamento', label: 'Departamento Completo' },
  { value: 'habitacion', label: 'Habitación Privada' },
  { value: 'roomie', label: 'Busco Roomie' },
];

export const HERO_TABS = [
  { id: 'todos', label: 'Todos', filter: 'all' },
  { id: 'departamento', label: 'Depas', filter: 'departamento' },
  { id: 'habitacion', label: 'Cuartos', filter: 'habitacion' },
  { id: 'roomie', label: 'Roomies', filter: 'roomie' },
];
