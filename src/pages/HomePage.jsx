import AnnouncementBar from '../components/layout/AnnouncementBar.jsx';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import MobileNav from '../components/layout/MobileNav.jsx';
import HeroSearch from '../components/home/HeroSearch.jsx';
import CategoryGrid from '../components/home/CategoryGrid.jsx';
import TrustBanner from '../components/home/TrustBanner.jsx';
import ValueProps from '../components/home/ValueProps.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import Newsletter from '../components/home/Newsletter.jsx';
import PropertyGrid from '../components/listings/PropertyGrid.jsx';
import PropertyModal from '../components/modals/PropertyModal.jsx';
import PublishModal from '../components/modals/PublishModal.jsx';
import ProfileModal from '../components/modals/ProfileModal.jsx';
import TipModal from '../components/modals/TipModal.jsx';
import FavoritesDrawer from '../components/drawers/FavoritesDrawer.jsx';
import BookingDrawer from '../components/drawers/BookingDrawer.jsx';
import Toast from '../components/ui/Toast.jsx';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col relative antialiased pb-16 md:pb-0">
      <AnnouncementBar />
      <Header />
      <HeroSearch />
      <CategoryGrid />
      <PropertyGrid />
      <TrustBanner />
      <ValueProps />
      <Testimonials />
      <Newsletter />
      <Footer />
      <MobileNav />

      <FavoritesDrawer />
      <BookingDrawer />
      <PropertyModal />
      <PublishModal />
      <ProfileModal />
      <TipModal />
      <Toast />
    </div>
  );
}
