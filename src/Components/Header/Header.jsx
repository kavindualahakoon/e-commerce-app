import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <header className=" fixed top-0 left-0 z-[100] w-full py-5 px-2 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
      {/* header left */}
      <div className="flex items-center ">
        <IconButton>
          <MenuIcon className="text-black" />
        </IconButton>
        <h1 className=" ml-2 text-lg text-white font-bold">
          Bite <span className=" text-black">Me</span>
        </h1>
        <div className=" overflow-hidden ml-2  flex items-center rounded-full bg-[#fcf7f7]">
          <input
            type="text"
            placeholder="search"
            className=" hidden sm:inline-block ml-1 outline-none p-2 font-semibold text-sm w-[200px] bg-inherit"
          />
          <IconButton>
            <SearchOutlinedIcon className="text-gray-400 mr-2" />
          </IconButton>
        </div>
      </div>
      {/* header right */}
      <IconButton>
        <ShoppingCartOutlinedIcon />
      </IconButton>
    </header>
  );
};

export default Header;

//01:26:13
