import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Stack, TextField, Typography } from "@mui/material";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { drawerActions } from "../Store";
import Autocomplete from "@mui/material/Autocomplete";

const DrawerItems = () => {
  const dispatch = useDispatch();
  const initialFieldText = {
    oai: "",
    jd: "",
    plang: null,
    elang: null,
  };
  const [fieldText, setFieldText] = React.useState(initialFieldText);

  const resetHandler = () => {
    setFieldText(initialFieldText);
  };


  const inputChangeHandler = (inputType) => (event, value) => {
    if (inputType === "oai" || inputType === "jd") {
      setFieldText((prevState) => {
        return {
          ...prevState,
          [inputType]: event.target.value,
        };
      });
    } else {
      setFieldText((prevState) => {
        return {
          ...prevState,
          [inputType]: value,
        };
      });
    }
  };

  const drawerHandler = () => {
    dispatch(drawerActions.toggleDrawer("close"));
  };

  const submitHandler = () => {
    console.log(fieldText);
  }

  const pLangs = [" C", "C++", "Java", "JavaScript", "Python"];
  const eLangs = ["English", "Hindi", "Gujarati", "Odia"];

  return (
    <Box sx={{ pt: 0, width: 300 }} role="presentation">
      <List>
        <ListItem>
          <ListItemText
            sx={{ pl: 1 }}
            primary={<Typography variant="h5">Settings</Typography>}
          ></ListItemText>
          <IconButton onClick={drawerHandler}>
            <CloseIcon />
          </IconButton>
        </ListItem>
        {/* <Divider /> */}
        <ListItem>
          <ListItemText
            sx={{ pl: 1 }}
            primary={<Typography variant="h6">Credentials</Typography>}
          ></ListItemText>
        </ListItem>
        <ListItem>
          <TextField
            onChange={inputChangeHandler("oai")}
            value={fieldText.oai}
            fullWidth
            type="password"
            label="OpenAI"
          />
        </ListItem>
        <ListItem>
          <TextField
            onChange={inputChangeHandler("jd")}
            value={fieldText.jd}
            fullWidth
            type="password"
            label="JDoodle"
          />
        </ListItem>
      </List>
      {/* <Divider /> */}
      <List>
        <ListItem>
          <ListItemText
            sx={{ pl: 1 }}
            primary={<Typography variant="h6">Languages</Typography>}
          ></ListItemText>
        </ListItem>
        <ListItem>
          <Autocomplete
            disablePortal
            options={pLangs}
            onChange={inputChangeHandler("plang")}
            value={fieldText.plang}
            sx={{ minWidth: "100%" }}
            renderInput={(params) => (
              <TextField {...params} fullWidth label="Programming Language" />
            )}
          />
        </ListItem>
        <ListItem>
          <Autocomplete
            disablePortal
            options={eLangs}
            onChange={inputChangeHandler("elang")}
            value={fieldText.elang}
            sx={{ minWidth: "100%" }}
            renderInput={(params) => (
              <TextField {...params} fullWidth label="Explanation Language" />
            )}
          />
        </ListItem>
      </List>
      {/* <Divider /> */}

      <ListItem>
        <Stack direction="row" width="100%">
          <Button
            sx={{ mr: 1.5, my: 1 }}
            onClick={resetHandler}
            endIcon={<RotateLeftIcon />}
          >
            Reset
          </Button>
          <Button
            sx={{ my: 1 }}
            endIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
            onClick={submitHandler}
          >
            Submit
          </Button>
        </Stack>
      </ListItem>
      {/* <Divider /> */}
    </Box>
  );
};

export default DrawerItems;
