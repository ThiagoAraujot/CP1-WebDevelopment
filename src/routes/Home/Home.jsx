import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import TopBrands from "../../components/TopBrands/TopBrands";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Products />
      <Categories />
      <TopBrands />
      <Products />
      <Footer />
    </>
  );
};

export default Home;
