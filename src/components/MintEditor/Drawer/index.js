import * as React from "react";
import Drawer from "@mui/material/Drawer";
import DrawerItems from "../DrawerItems";
import { drawerActions } from "../Store";
import { useDispatch, useSelector } from "react-redux/es/exports";

export default function TemporaryDrawer() {
  const isOpen = useSelector((state) => state.drawer.isDrawerOpen);
  const dispatch = useDispatch();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    dispatch(drawerActions.toggleDrawer(open));
  };

  return (
    <React.Fragment>
      <Drawer anchor={"left"} open={isOpen} onClose={toggleDrawer("close")}>
        <DrawerItems />
      </Drawer>
    </React.Fragment>
  );
}
