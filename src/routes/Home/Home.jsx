import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Products />
      <Categories />
      <Footer />
    </>
  );
};

export default Home;
