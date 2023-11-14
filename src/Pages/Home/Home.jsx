import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import Featured from "../../components/Featured/Featured";
import Popular from "../../components/Popular/Popular";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Popular></Popular>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
