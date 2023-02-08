import * as React from "react";
import { grey } from "@mui/material/colors";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { drawerActions } from "../Store";
import { sidePanelActions } from "../Store";
import "../fonts.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "31ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const [searchText, setSearchText] = React.useState("");

  const dispatch = useDispatch();
  const navRef = React.useRef();

  const sidePanelHandler = (toOpen) => (event) => {
    dispatch(sidePanelActions.switchTab(toOpen));
  };

  const searchInputHandler = (event) => {
    setSearchText(event.target.value);
  };

  const searchKeyDownHandler = (event) => {
    if (event.key === "Enter") console.log(searchText);
  };

  const drawerHandler = () => {
    dispatch(drawerActions.toggleDrawer("open"));
  };

  return (
    <nav ref={navRef}>
      <Box sx={{ flexGrow: 1, padding: 0, color: "white" }}>
        <AppBar sx={{ backgroundColor: grey[900] }} position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={drawerHandler}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: "Work Sans",
                display: { xs: "none", sm: "block" },
              }}
            >
              mint
            </Typography>
            <Toolbar>
              <Button
                color="inherit"
                onClick={sidePanelHandler(1)}
                sx={{ m: 0.5 }}
              >
                RUN
              </Button>
              <Button color="inherit" sx={{ m: 0.5 }}>
                DEBUG
              </Button>
              <Button
                color="inherit"
                onClick={sidePanelHandler(2)}
                sx={{ m: 0.5 }}
              >
                EXPLAIN
              </Button>
            </Toolbar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={searchText}
                onChange={searchInputHandler}
                onKeyDown={searchKeyDownHandler}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
}
