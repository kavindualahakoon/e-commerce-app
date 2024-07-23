import Ads from "./Ads";
import Product from "./Product";

const Home = () => {
  return (
    <div className=" pt-[100px] px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <Ads />
      <Product title="Treadings Product" rowsCount={1} slidesPerView={3} />
    </div>
  );
};

export default Home;

//05:00:08
