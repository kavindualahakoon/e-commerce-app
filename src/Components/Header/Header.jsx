import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IconButton } from "@mui/material";
import { useState } from "react";

const Header = () => {
  console.log("Header Re-rendering");
  const [isSearch, setIsSearch] = useState(false);
  return (
    <header className=" fixed top-0 left-0 z-[100] w-full py-5 px-2 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
      {/* header left */}
      <div className="flex items-center ">
        <IconButton>
          <MenuIcon className="text-white" />
        </IconButton>

        <h1
          style={{
            display:
              window.innerWidth < 640
                ? isSearch
                  ? "none"
                  : "inline-block"
                : "inline-block",
          }}
          className=" ml-2 text-lg text-orange-500 font-bold"
        >
          Bite <span className=" text-black">Me</span>
        </h1>

        <div className=" overflow-hidden ml-2 flex items-center rounded-full bg-[#fcf7f7]">
          <input
            type="text"
            placeholder="search"
            style={{
              display:
                window.innerWidth < 640
                  ? isSearch
                    ? "inline-block"
                    : "none"
                  : "inline-block",
            }}
            className=" ml-1 outline-none p-2 font-semibold text-sm w-[200px] bg-inherit"
          />
          <IconButton
            onClick={() => {
              if (window.innerWidth < 640) {
                setIsSearch(!isSearch);
              }
            }}
          >
            <SearchOutlinedIcon className="text-gray-400 mr-1" />
          </IconButton>
        </div>
      </div>
      {/* header right */}
      <IconButton>
        <ShoppingCartOutlinedIcon className=" text-white" />
      </IconButton>
    </header>
  );
};

export default Header;

//03:45:18
