import React, { useState } from "react";
import { Box } from "@mui/material";
import { Button } from "../../UI";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import CancelIcon from "@mui/icons-material/Cancel";

function SettingButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          right: 0,
          minWidth: "20vw",
          transition: "all 0.3s ease",
          backgroundColor: "gray",
          height: `${isOpen ? 100 : 0}vh`,
        }}
      >
        HA HA
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
        }}
      >
        <Button type="black" onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <CancelIcon /> : <SettingsApplicationsIcon />}
        </Button>
      </Box>
    </>
  );
}

export default SettingButton;
