import { useSelector } from "react-redux";
import { categorySelector } from "../../Store/ReduxSlice/categorySlice";
import { useParams } from "react-router-dom";

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
    </div>
  );
};

export default CategoryItems;
