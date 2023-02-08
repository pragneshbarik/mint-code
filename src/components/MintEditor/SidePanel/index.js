import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { grey } from "@mui/material/colors";
import { sidePanelActions } from "../Store";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Paper, Typography } from "@mui/material";

export default function SidePanel() {
  const dispatch = useDispatch();
  const openTab = useSelector((state) => state.sidePanel.openTab);

  const INPUT_AREA = (
    <Box
      sx={{ minHeight: "calc(100vh - 64px - 48px - 32px)" }}
      contentEditable="true"
    >
      INPUT_TEXT
    </Box>
  );

  const OUTPUT_TEXT = `quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit 
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, 
  sunt in culpa qui officia deserunt mollit anim id est laborum`;

  const EXPLAIN = `But I must explain to you how all this mistaken idea of 
  denouncing pleasure and praising pain was born and I will give you a 
  complete account of the system, and expound the actual teachings of 
  the great explorer of the truth, the master-builder of human happiness. 
  No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, 
  but because those who do not know how to pursue pleasure rationally encounter 
  consequences that are extremely painful. `;

  const DIPLAT_TABS = [INPUT_AREA, OUTPUT_TEXT, EXPLAIN];

  const handleChange = (event, newValue) => {
    dispatch(sidePanelActions.switchTab(newValue));
  };

  return (
    <Paper
      sx={{
        flexGrow: 1,
        maxWidth: "40%",
        minWidth: "40%",
        height: "calc(100vh - 64px)",
        bgcolor: grey[900],
        borderRadius: 0,
      }}
    >
      <Box>
        <Tabs value={openTab} onChange={handleChange}>
          <Tab label="Input" />
          <Tab label="Output" />
          <Tab label="Explanation" />
        </Tabs>

        <Box
          sx={{
            bgcolor: "#363636",
            p: 2,
            minHeight: "calc(100vh - 64px - 48px)",
          }}
        >
          <Typography
            sx={{ opacity: 0.6, fontFamily: "Roboto", fontWeight: 300 }}
          >
            {DIPLAT_TABS[openTab]}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
