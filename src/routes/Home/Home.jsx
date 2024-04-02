import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Categories from "../../components/Categories/Categories";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Products />
      <Categories />
    </>
  );
};

export default Home;
