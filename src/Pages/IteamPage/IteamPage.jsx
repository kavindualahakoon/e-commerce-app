import { IconButton } from "@mui/material";
import { useRef } from "react";

const iteamImageArr = [
  "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
  "https://c4.wallpaperflare.com/wallpaper/407/764/990/restaurant-cafes-urban-city-wallpaper-preview.jpg",
  "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg",
  "https://c4.wallpaperflare.com/wallpaper/407/764/990/restaurant-cafes-urban-city-wallpaper-preview.jpg",
];

const IteamPage = () => {
  console.log("iteam page reRender");
  const mainImageRef = useRef();
  const subImageRef = useRef([]);

  return (
    <div className=" pt-[100px] px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <h1 className=" text-lg font-bold px-3 mb-7 ">Iteam Title</h1>
      <img
        ref={mainImageRef}
        src={iteamImageArr[0]}
        alt="main iteam"
        className=" w-full object-contain  rounded-md"
      />

      <div className=" w-full mt-5 grid grid-cols-4 text-center grid-rows-1 gap-3 ">
        {iteamImageArr.map((ele, index) => (
          <IconButton
            key={index}
            sx={{
              padding: "0",
              borderRadius: "2px",
            }}
            onClick={() => {
              subImageRef.current[index].style.border = "2px solid orange";
              mainImageRef.current.src = subImageRef.current[index].src;
              for (let i = 0; i < iteamImageArr.length; i++) {
                if (i !== index) {
                  subImageRef.current[i].style.border = "none";
                }
              }
            }}
          >
            <img
              ref={(refEle) => (subImageRef.current[index] = refEle)}
              name={`iteam imaage ref :${index}`}
              src={ele}
              alt={ele}
              className=" w-full object-contain rounded-sm"
            />
          </IconButton>
        ))}
      </div>
    </div>
  );
};

export default IteamPage;
