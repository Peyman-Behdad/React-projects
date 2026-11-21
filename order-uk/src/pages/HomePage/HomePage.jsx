import Copyright from "../../components/layout/Copyright";
import Footer from "../../components/layout/Footer";
import GetDiscount from "../../components/layout/GetDiscount";
import Navbar from "../../components/layout/Navbar";
import AboutUs from "./components/AboutUs";
import GetApp from "./components/GetApp";
import Hero from "./components/Hero";
import PopularCategories from "./components/PopularCategories";
import PopularRestaurants from "./components/PopularRestaurants";
import Stats from "./components/Stats";
import UpTo from "./components/UpTo";
import WithUs from "./components/WithUs";

function HomePage() {
  return (
    <>
      <GetDiscount />
      <Navbar />
      <main>
        <Hero />
        <UpTo />
        <PopularCategories />
        <PopularRestaurants />
        <GetApp />
        <WithUs />
        <AboutUs />
        <Stats />
      </main>
      <Footer />
      <Copyright />
    </>
  );
}

export default HomePage;
