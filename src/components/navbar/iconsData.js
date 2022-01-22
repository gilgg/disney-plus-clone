import { AiFillHome } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
import { RiMovie2Line } from "react-icons/ri";
import { BsCameraReelsFill } from "react-icons/bs";

const icons = {
  home: <AiFillHome className="nav-item-icon" />,
  search: <BiSearchAlt2 className="nav-item-icon" />,
  watchlist: <AiOutlinePlus className="nav-item-icon" />,
  originals: <AiTwotoneStar className="nav-item-icon" />,
  movies: <RiMovie2Line className="nav-item-icon" />,
  series: <BsCameraReelsFill className="nav-item-icon" />,
};

export default icons;