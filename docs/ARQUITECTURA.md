# BuscandoHogar / UniHabitat — Arquitectura del proyecto

Marketplace de renta de departamentos, habitaciones y roomies universitarios.
Derivado del prototipo `prueba_3.html`.

## Stack propuesto (fase 1)

| Capa | Tecnología |
|------|------------|
| UI | React + Vite |
| Estilos | Tailwind CSS (paleta `brand` / `accent` del prototipo) |
| Rutas | React Router |
| Estado | Context + hooks (`favorites`, `bookings`, filtros) |
| Datos | JSON/JS local → después API |
| Persistencia local | `localStorage` (favoritos y apartados) |

## Mapa del prototipo → módulos

| Sección HTML | Componente / página |
|--------------|---------------------|
| Announcement Bar | `AnnouncementBar` |
| Header + búsqueda | `Header` |
| Hero + widget búsqueda | `HeroSearch` |
| Categorías (4 cards) | `CategoryGrid` |
| Listados + filtros | `FilterBar` + `PropertyGrid` + `PropertyCard` |
| Countdown / garantía | `TrustBanner` |
| Value props | `ValueProps` |
| Testimonials + UniTips | `Testimonials` + `UniTips` |
| Newsletter | `Newsletter` |
| Footer | `Footer` |
| Mobile bottom nav | `MobileNav` |
| Favoritos / Apartados | `FavoritesDrawer` / `BookingDrawer` |
| Detalle / Publicar / Perfil / Tips | modales → luego páginas |

## Rutas de la app

| Ruta | Página | Origen en prototipo |
|------|--------|---------------------|
| `/` | `HomePage` | Landing completa |
| `/buscar` | `SearchPage` | Hero search + filtros |
| `/buscar?tipo=departamento\|habitacion\|roomie` | `SearchPage` | Chips / nav categorías |
| `/propiedad/:id` | `PropertyDetailPage` | `propertyModal` |
| `/publicar` | `PublishPage` | `publishModal` |
| `/favoritos` | `FavoritesPage` | `favDrawer` |
| `/apartados` | `BookingsPage` | `bookingDrawer` |
| `/cuenta` | `ProfilePage` | `profileModal` |
| `/guias/:slug` | (opcional) | `tipModal` |

## Árbol de archivos

```
/
├── index.html
├── public/
│   └── images/
│       ├── brand/           # logo, favicon
│       ├── properties/      # fotos de listados (prop-01…08)
│       └── placeholders/    # fallbacks
├── src/
│   ├── main.jsx
│   ├── App.jsx              # Router + providers
│   ├── styles/globals.css
│   ├── context/AppContext.jsx
│   ├── data/                # seed del prototipo
│   ├── hooks/
│   ├── lib/
│   ├── components/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── listings/
│   │   ├── modals/
│   │   ├── drawers/
│   │   └── ui/
│   └── pages/
└── docs/ARQUITECTURA.md
```

## Modelo de datos (Property)

```js
{
  id, title, type,        // departamento | habitacion | roomie
  category, price, deposit,
  campus, distance, gender,
  tag,                    // Verificado | Destacado | Nuevo
  image, amenities[], description
}
```

## Imágenes

| Uso | Ruta sugerida |
|-----|---------------|
| Logo / marca | `public/images/brand/logo.svg` |
| Propiedades 1–8 | `public/images/properties/prop-0{n}.jpg` |
| Fallback card | `public/images/placeholders/property.jpg` |
| Remotas (dev) | Unsplash del dataset (ver `src/data/properties.js`) |

## Flujos clave

1. **Buscar** → hero/header → filtros → grid
2. **Favorito** → toggle → badge → drawer/página
3. **Apartar** → booking list → checkout toast
4. **Publicar** → formulario → verificación (mock)
5. **Perfil** → estado estudiante verificado (mock)

## Fases siguientes

1. Rellenar datos seed + estilos Tailwind
2. Montar `HomePage` portando el HTML por componentes
3. Activar React Router y páginas reales
4. Conectar backend (API listings, auth, apartados)
