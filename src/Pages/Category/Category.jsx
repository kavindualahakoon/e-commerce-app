import { IconButton } from "@mui/material";
const categoryArr = [
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    title: "Category Title 1",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    title: "Category Title 2",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    title: "Category Title 3",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    title: "Category Title 4",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    title: "Category Title 5",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
    title: "Category Title 6",
  },
];

const Category = () => {
  return (
    <div className=" pt-[100px] px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <section
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        className=" w-full p-2"
      >
        <h1 className=" text-lg font-bold mb-3 ml-2 mt-2 ">Main Categories</h1>
        <div className="grid grid-cols-3 grid-rows-[auto] gap-5">
          {categoryArr.map(({ imageUrl, title }, index) => (
            <CategoryItems key={index} imageUrl={imageUrl} title={title} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Category;
const CategoryItems = ({ imageUrl, title }) => (
  <IconButton sx={{ color: "gray", padding: "1px", borderRadius: "6px" }}>
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
      className=" m-1 w-full py-6 px-3 rounded-md  flex flex-col items-center "
    >
      <img
        src={imageUrl}
        alt={title}
        className=" rounded-full w-[50px] h-[50px]"
      />
      <h2 className=" text-[10px] text-black mt-3 font-bold">{title}</h2>
    </div>
  </IconButton>
);

//08:02:54
