import {Stack } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from "react-redux/es/exports.js";
import SearchAppBar from "../components/MintEditor/SearchAppBar.js";
import Editor from "../components/MintEditor/Editor/index.js";
import TemporaryDrawer from "../components/MintEditor/Drawer/index.js";
import SidePanel from "../components/MintEditor/SidePanel/index.js";
import store from "../components/MintEditor/Store/index.js";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function MintEditor() {
  return (
    <>
    <Provider store={store}>
    <ThemeProvider theme={darkTheme} >
        <SearchAppBar />
        <TemporaryDrawer />
        <Stack direction='row'>
        <Editor />
        <SidePanel />
        </Stack>
        </ThemeProvider>
    </Provider>
    </>
  );
}

export default MintEditor;
