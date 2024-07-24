import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { IconButton, Rating } from "@mui/material";
import "./style.css";

const productArr = [
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    price: "100",
    productTitle: "product title 01",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    price: "100",
    productTitle: "product title 02",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    price: "100",
    productTitle: "product title 03",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    price: "100",
    productTitle: "product title 04",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    price: "100",
    productTitle: "product title 05",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    price: "100",
    productTitle: "product title 06",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    price: "100",
    productTitle: "product title 07",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    price: "100",
    productTitle: "product title 08",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    price: "100",
    productTitle: "product title 09",
  },
];
const Product = ({ title, rowsCount, slidesPerView }) => {
  return (
    <section
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
      className=" w-full mt-6  p-2"
    >
      <h1 className=" text-lg font-bold mb-3 ml-2 mt-2 ">{title}</h1>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 1,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Grid, Pagination, Mousewheel]}
      >
        {productArr.map(({ imageUrl, price, productTitle }, index) => (
          <SwiperSlide key={index}>
            <ProductUnit
              imageUrl={imageUrl}
              price={price}
              productTitle={productTitle}
              id={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Product;

const ProductUnit = ({ imageUrl, price, productTitle, id }) => (
  <IconButton
    sx={{
      padding: "4px",
      borderRadius: "5px",
      margin: "3px",
      marginBottom: "30px",
    }}
  >
    <div className=" w-full ">
      <img
        src={imageUrl}
        alt={`product_unit_${id}`}
        className="w-full object-contain "
      />
      <h3 className=" text-sm font-semibold text-stone-900">{productTitle}</h3>
      <Rating
        name={imageUrl}
        value={3.5}
        precision={0.1}
        size="small"
        readOnly
      />
      <h3 className=" text-lg font-bold text-stone-900">Rs.{price}/-</h3>
    </div>
  </IconButton>
);
