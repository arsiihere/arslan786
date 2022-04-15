import React from "react";
import image from "../../assets/HeroSectionImage.png";
import { Box } from "@mui/material";
import classes from "./HeroBoxTwo.module.css";

function HeroBoxTwo() {
  return (
    <>
      <Box sx={{ display: "inline-block" }}>
        <img className={classes.HeroImage} src={image} />
      </Box>
    </>
  );
}

export default HeroBoxTwo;
