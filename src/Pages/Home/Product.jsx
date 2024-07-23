import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { IconButton } from "@mui/material";
import "./style.css";

const productArr = [
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    price: "100",
    productTitle: "product title 1",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    price: "100",
    productTitle: "product title 2",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    price: "100",
    productTitle: "product title 3",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    price: "100",
    productTitle: "product title 4",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    price: "100",
    productTitle: "product title 5",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    price: "100",
    productTitle: "product title 6",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    price: "100",
    productTitle: "product title 7",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    price: "100",
    productTitle: "product title 8",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    price: "100",
    productTitle: "product title 9",
  },
];
const Product = ({ title, rowsCount, slidesPerView }) => {
  return (
    <section className=" w-full mt-6">
      <h1 className=" text-lg font-bold mb-3">{title}</h1>
      <Swiper
        slidesPerView={Number(slidesPerView)}
        grid={{
          rows: Number(rowsCount),
        }}
        spaceBetween={2}
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
      <h3 className=" text-lg font-bold text-stone-900">Rs.{price}.00/-</h3>
    </div>
  </IconButton>
);
