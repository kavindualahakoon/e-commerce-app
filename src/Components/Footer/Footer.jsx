import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <footer className=" fixed bottom-0 left-0 z-[100] w-full py-3 px-3 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
      <FooterIcon Icon={HomeOutlinedIcon} iconText="Home" />
      <FooterIcon Icon={AppsOutlinedIcon} iconText="Categary" />
      <FooterIcon Icon={AccountCircleOutlinedIcon} iconText="Profile" />
    </footer>
  );
};

export default Footer;

const FooterIcon = ({ Icon, iconText }) => (
  <IconButton
    sx={{
      padding: "4px",
      paddingTop: "0",
      borderRadius: "5px",
    }}
  >
    <div className=" text-gray-700 hover:text-red-600 transition-all duration-1000">
      <Icon />
      <p className=" text-xs font-semibold">{iconText}</p>
    </div>
  </IconButton>
);

//04:16:53
