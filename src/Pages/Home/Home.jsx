import { useState } from "react";
import Loading from "../../Components/Loading/Loading";
import Ads from "./Ads";
import ElecProcuts from "./ElecProcuts";
import Product from "./Product";

const Home = () => {
  const [loading, setLoading] = useState(false);
  if (loading) return <Loading />;

  return (
    <div className=" pt-[100px] px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <Ads />
      <Product title="Trending Products" />
      <ElecProcuts title="Electronic Items" />
      <Product title="Laptop Items " />
    </div>
  );
};

export default Home;
