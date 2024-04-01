import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Categoties from "../../components/Categories/Categories";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Products />
      <Categoties />
    </>
  );
};

export default Home;
