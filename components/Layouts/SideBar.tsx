import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import MailIcon from "@mui/icons-material/Mail";
import { MENUS } from "./utils";
import Header from "./Header";
import { useRouter } from "next/router";

const SideBar = React.memo(() => {
  const router = useRouter();
  const handleClick = (page: string) => {
    router.push(page);
  };
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={true}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        width: 200,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 200,
          boxSizing: "border-box",
        },
      }}
    >
      <div>
        <Header />
        <List>
          {MENUS.map((menu: any, index: number) => (
            <ListItem
              onClick={() => handleClick(menu.value)}
              selected={menu.value === "charts"}
              button
              key={index}
            >
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={menu.label} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
});
export default SideBar;
