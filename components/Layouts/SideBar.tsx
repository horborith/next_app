import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { MENUS, checkCurrentPage } from "./utils";
import Header from "./Header";
import { useRouter } from "next/router";
import styled from "styled-components";

const SideBar = React.memo(() => {
  const router = useRouter();
  const handleClick = (item: any) => {
    router.push(item.url);
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
          {MENUS.map((menu: any, index: number) => {
            const isSelected = checkCurrentPage(menu.url, router?.pathname);
            return (
              <StyledListItem
                onClick={() => handleClick(menu)}
                selected={isSelected}
                key={index}
              >
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText primary={menu.label} />
              </StyledListItem>
            );
          })}
        </List>
      </div>
    </Drawer>
  );
});

const StyledListItem = styled(ListItem)`
  &.Mui-selected {
    background-color: red;
  }
`;
export default SideBar;
