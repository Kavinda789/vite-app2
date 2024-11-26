import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Category from "./Components/Category/Category";
import Category2 from "./Components/Category/Category2";
import Services from "./Components/Services/Services";
import Banner from "./Components/Banner/Banner";
import { SliderData } from "./assets/assets";
import Products from "./Components/Products/Products";
import Blogs from "./Components/Blogs/Blogs";
import Partners from "./Components/Partners/Partners";
import Footer from "./Components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const BannerData = {
    discount: "30% OFF",
    title: "Fine Smile",
    date: "10 Jan to 23 Jan",
    image: SliderData[0].img,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4: "Looking for the best? Look no further than AAA's Value deals!",
    bgColor: "#f42c37",
  };

  const BannerData2 = {
    discount: "30% OFF",
    title: "Happy Hours",
    date: "10 Jan to 23 Jan",
    image: SliderData[2].img,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4: "Looking for the best? Look no further than AAA's Value deals!",
    bgColor: "#2dcc6f",
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
