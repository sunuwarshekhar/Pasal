import React from "react";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import CarouselSlide from "../components/Carousel";
import CatAndCarousel from "../components/CatAndCarousel";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CatAndCarousel />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />

    </div>
  );
};

export default Home;
