import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Button } from "../../UI";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const DesignerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 20,
  minHeight: "20rem",
  background:
    "linear-gradient(to bottom, rgba(22, 28, 36, 0.8), rgba(22, 28, 36, 0.8))",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
}));

function InviteSection() {
  return (
    <DesignerBox>
      <Typography variant="h5" sx={{ color: "white", fontWeight: "bold" }}>
        Start Now
      </Typography>
      <Typography
        sx={{ fontWeight: "bold", color: "white" }}
        variant="h3"
        align="center"
      >
        Create Your Website Today
      </Typography>
      <Button sx={{ alignSelf: "center" }} type="orange" size="large">
        Purchase Now
      </Button>
    </DesignerBox>
  );
}

export default InviteSection;
