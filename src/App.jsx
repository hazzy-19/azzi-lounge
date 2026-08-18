import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import LocationMap from './components/LocationMap';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function App() {
  return (
    <div className="min-h-screen bg-midnight text-ice-blue font-inter">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <LocationMap />
        <Gallery />
        <Reviews />
      </main>
      <Footer />
      
      {/* Global Overlays & Modals */}
      <FloatingActions />
    </div>
  );
}

export default App;
