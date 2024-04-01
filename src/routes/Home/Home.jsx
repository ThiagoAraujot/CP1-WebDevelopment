import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Categoties from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Products />
      <Categoties />
      <Footer />
    </>
  );
};

export default Home;
