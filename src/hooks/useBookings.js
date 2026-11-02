import { useApp } from '../context/AppContext.jsx';

export function useBookings() {
  const { bookings, addToBookings, removeFromBookings, confirmCheckout, openDrawer } = useApp();
  const subtotal = bookings.reduce((sum, item) => sum + item.deposit, 0);
  return {
    bookings,
    subtotal,
    addToBookings,
    removeFromBookings,
    confirmCheckout,
    openBookings: () => openDrawer('booking'),
  };
}
