import { useSelector } from "react-redux";
import { categorySelector } from "../../Store/ReduxSlice/categorySlice";
import { useParams } from "react-router-dom";
import { IconButton, Rating } from "@mui/material";

const categoryItemArr = [
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

const CategoryItems = () => {
  const category = useSelector(categorySelector);
  const { categoryId } = useParams();
  const [categoryTitle] = category.filter((ele) => ele.id === categoryId);
  console.log("category", categoryTitle);

  return (
    <div className="pt-[100px] px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <h1 className="text-lg font-bold mb-3 ml-2 mt-2  ">
        {categoryTitle.title}
      </h1>
      <div className=" w-full grid grid-cols-3 grid-rows[auto] gap-4">
        {categoryItemArr.map(({ imageUrl, title }, index) => (
          <CategoryItemUnit key={index} imageUrl={imageUrl} title={title} />
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;

const CategoryItemUnit = ({ imageUrl, title }) => (
  <IconButton sx={{ color: "gray", padding: "1px", borderRadius: "6px" }}>
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
      className=" w-full "
    >
      <img src={imageUrl} alt={title} className=" w-full object-contain " />
      <h3 className="ml-2 inline-block text-left text-sm font-bold">{title}</h3>
      <Rating
        name={imageUrl}
        value={3.5}
        precision={0.1}
        size="small"
        readOnly
      />
    </div>
  </IconButton>
);
