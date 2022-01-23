import HomeIcon from "@mui/icons-material/Home";
import BoltIcon from "@mui/icons-material/Bolt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

export const MENUS = [
  { label: "Home", value: "home", url: "/", icon: <HomeIcon /> },
  { label: "Charts", value: "charts", url: "/charts", icon: <BoltIcon /> },
  { label: "News", value: "news", url: "/news", icon: <LocalOfferIcon /> },
  { label: "Songs", value: "songs", url: "/songs", icon: <LocalOfferIcon /> },
];
export const checkCurrentPage = (url: string, cur_url: string) => {
  if (url === cur_url) {
    return true;
  }
  return false;
};
