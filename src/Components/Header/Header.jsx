import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IconButton } from "@mui/material";
import { useState } from "react";

const Header = () => {
  console.log("Header Re-rendering");
  const [isSearch, setIsSearch] = useState(false);
  return (
    <header className=" fixed top-0 left-0 z-[100] w-full p-2 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
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

        <div
          style={{
            backgroundColor:
              window.innerWidth < 640
                ? isSearch
                  ? "#fcf7f7"
                  : "inherit"
                : "#fcf7f7",
          }}
          className=" overflow-hidden ml-2 flex items-center rounded-full"
        >
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
              transition: "all 400ms ease-in-out",
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
            <SearchOutlinedIcon
              sx={{
                color:
                  window.innerWidth < 640
                    ? isSearch
                      ? "rgb(156 163 175)"
                      : "black"
                    : "rgb(156 163 175)",
              }}
            />
          </IconButton>
        </div>
      </div>
      {/* header right */}
      <IconButton>
        <div className=" relative  p-1">
          <ShoppingCartOutlinedIcon className=" text-black" />
          <div className=" absolute top-[2px] right-0 text-[7px] font-semibold text-white  bg-black flex items-center justify-center w-3 h-3 rounded-full  ">
            2
          </div>
        </div>
      </IconButton>
    </header>
  );
};

export default Header;
