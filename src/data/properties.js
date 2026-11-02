/**
 * Seed de propiedades (extraído de prueba_3.html).
 * En producción: GET /api/properties
 */
export const PROPERTIES = [
  {
    id: 1,
    title: 'Loft Moderno CU UNAM con Balcón',
    type: 'departamento',
    category: 'Departamentos Completos',
    price: 8500,
    deposit: 1200,
    campus: 'UNAM CU',
    distance: '5 mins a UNAM CU (Coyoacán)',
    gender: 'Mixto',
    tag: 'Verificado',
    image: '/images/properties/prop-01.jpg',
    imageRemote:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    amenities: ['WiFi Alta Velocidad', 'Amueblado', 'Seguridad 24/7', 'Servicios Incluidos'],
    description:
      'Hermoso loft totalmente amueblado cerca de Metro Universidad. Incluye luz, agua, gas e internet. Ideal para estudiantes de licenciatura o posgrado que buscan privacidad y silencio.',
  },
  {
    id: 2,
    title: 'Habitación Privada Tec Santa Fe',
    type: 'habitacion',
    category: 'Habitación Privada',
    price: 6200,
    deposit: 900,
    campus: 'Tec Santa Fe',
    distance: '8 mins caminando a Tec Santa Fe',
    gender: 'Solo Chicas',
    tag: 'Destacado',
    image: '/images/properties/prop-02.jpg',
    imageRemote:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
    amenities: ['Baño Privado', 'WiFi 500MB', 'Limpieza Semanal', 'Servicios Incluidos', 'Solo Chicas'],
    description:
      'Habitación amplia con cama matrimonial, closet espacioso y escritorio ergonómico de estudio. Ambiente tranquilo, limpio y muy seguro.',
  },
  {
    id: 3,
    title: 'Roomie Compartido IPN Zacatenco',
    type: 'roomie',
    category: 'Busco Roomie',
    price: 4500,
    deposit: 600,
    campus: 'IPN Zacatenco',
    distance: '10 mins IPN Zacatenco / Lindavista',
    gender: 'Mixto',
    tag: 'Nuevo',
    image: '/images/properties/prop-03.jpg',
    imageRemote:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    amenities: ['WiFi Incluido', 'Cocina Equipada', 'Lavadora', 'Pet Friendly'],
    description:
      'Buscamos roomie para departamento de 3 recámaras. Ambiente estudioso, respetuoso y organizado cerca de la plaza Lindavista.',
  },
  {
    id: 4,
    title: 'Suite Individual UAM Xochimilco',
    type: 'habitacion',
    category: 'Habitación Privada',
    price: 5800,
    deposit: 850,
    campus: 'UAM Xochimilco',
    distance: '12 mins UAM Xochimilco',
    gender: 'Mixto',
    tag: 'Verificado',
    image: '/images/properties/prop-04.jpg',
    imageRemote:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    amenities: ['Servicios Incluidos', 'Amueblado', 'Roof Garden', 'Seguridad'],
    description:
      'Suite independiente con cocineta propia y escritorio para proyectos. Zona muy tranquila en Calzada del Hueso.',
  },
  {
    id: 5,
    title: 'Depa Exclusivo Anáhuac Norte Interlomas',
    type: 'departamento',
    category: 'Departamentos Completos',
    price: 12000,
    deposit: 1800,
    campus: 'Anahuac Norte',
    distance: '5 mins Anáhuac Norte',
    gender: 'Solo Chicas',
    tag: 'Destacado',
    image: '/images/properties/prop-05.jpg',
    imageRemote:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    amenities: ['2 Recámaras', 'Gimnasio', 'Alberca', 'Seguridad 24/7', 'Solo Chicas'],
    description:
      'Departamento de lujo compartido entre 2 estudiantes. Acabados de primera, estacionamiento subterráneo e increíble vista.',
  },
  {
    id: 6,
    title: 'Depa Amplio Zona UdeG Guadalajara',
    type: 'departamento',
    category: 'Departamentos Completos',
    price: 7200,
    deposit: 1000,
    campus: 'UdeG Guadalajara',
    distance: '7 mins UdeG CUCEI / Centro',
    gender: 'Mixto',
    tag: 'Verificado',
    image: '/images/properties/prop-06.jpg',
    imageRemote:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    amenities: ['Amueblado', 'WiFi Incluido', 'Balcón', 'Servicios Incluidos'],
    description:
      'Espacioso departamento con iluminación natural, excelente ventilación y transporte público directo a campus universitario.',
  },
  {
    id: 7,
    title: 'Habitación Económica Ubicada en CU',
    type: 'habitacion',
    category: 'Habitación Privada',
    price: 5100,
    deposit: 750,
    campus: 'FIC',
    distance: '10 mins',
    gender: 'Solo Chicas',
    tag: 'Nuevo',
    image: '/images/properties/prop-07.jpg',
    imageRemote:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    amenities: ['Aire Acondicionado', 'Servicios Incluidos', 'WiFi High-Speed', 'Solo Chicas'],
    description:
      'Habitación climatizada a solo 2 calles de CU. Incluye todos los servicios básicos y mantenimiento.',
  },
  {
    id: 8,
    title: 'Roomie en 6 de enero',
    type: 'roomie',
    category: 'Busco Roomie',
    price: 5500,
    deposit: 800,
    campus: 'CU UAS',
    distance: '20 min',
    gender: 'Mixto',
    tag: 'Verificado',
    image: '/images/properties/prop-08.jpg',
    imageRemote:
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80',
    amenities: ['Terraza', 'WiFi 500MB', 'Servicios Incluidos', 'Estudio'],
    description:
      'Cuarto disponible en hermoso penthouse con terraza panorámica. Buscamos estudiante o profesionista joven responsable.',
  },
];

export function getPropertyById(id) {
  return PROPERTIES.find((p) => p.id === Number(id)) ?? null;
}
