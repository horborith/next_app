import HomeIcon from "@mui/icons-material/Home";
import BoltIcon from "@mui/icons-material/Bolt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import LightbulbSharpIcon from '@mui/icons-material/LightbulbSharp';
import StorageSharpIcon from '@mui/icons-material/StorageSharp';

export const MENUS = [
  { label: "Home", value: "home", url: "/", icon: <HomeIcon /> },
  { label: "Charts", value: "charts", url: "/charts", icon: <BoltIcon /> },
  { label: "News", value: "news", url: "/news", icon: <LocalOfferIcon /> },
  { label: "Genres", value: "Genres", url: "/Genres", icon: <LightbulbSharpIcon /> },
  { label: "YOUR LIBRARY", value: "YOUR LIBRARY" },

  { label: "Playlists", value: "Playlists", url: "/Playlists", icon: <StorageSharpIcon /> },
  { label: "Songs", value: "Songs", url: "/Songs", icon: <FavoriteIcon /> },
  { label: "Artists", value: "Artists", url: "/Artists", icon: <PersonIcon /> },


];
export const checkCurrentPage = (url: string, cur_url: string) => {
  if (url === cur_url) {
    return true;
  }
  return false;
};
