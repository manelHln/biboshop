import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Newsletter from "./components/newsletter/Newsletter";
import Features from "./components/Features";
import Products from "./components/Products";
import OfferBanner from "./components/offer/OfferBanner";
import Banners from "./components/Banners";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <OfferBanner />
      <Products />
      <Banners />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
