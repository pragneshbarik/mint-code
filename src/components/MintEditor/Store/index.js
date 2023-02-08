import { configureStore, createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawer",
  initialState: { isDrawerOpen: false },
  reducers: {
    toggleDrawer(prevState, action) {
      switch (action.payload) {
        case "open":
          prevState.isDrawerOpen = true;
          break;
        case "close":
          prevState.isDrawerOpen = false;
          break;
        case "toggle":
          prevState.isDrawerOpen = !prevState.isDrawerOpen;
          break;
        default:
          break;
      }
    },
  },
});

const sidePanelSlice = createSlice({
  name: "sidePanel",
  initialState: { openTab: 0 },
  reducers: {
    switchTab(prevState, action) {
      prevState.openTab = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { drawer: drawerSlice.reducer, sidePanel: sidePanelSlice.reducer },
});

export const drawerActions = drawerSlice.actions;
export const sidePanelActions = sidePanelSlice.actions;
export default store;
