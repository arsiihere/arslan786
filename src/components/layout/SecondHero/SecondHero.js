import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import image from "../../assets/SecondSection.png";
import classes from "./SecondHero.module.css";
const SecondBox = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  flexDirection: "column",
  display: "inline-block",
  margin: 0,
  [theme.breakpoints.only("md")]: {
    marginLeft: 100,
  },
  [theme.breakpoints.only("sm")]: {
    marginLeft: 50,
  },
  [theme.breakpoints.only("lg")]: {
    marginLeft: 150,
  },
  width: "100%",
  gap: 4,
}));

function SecondHero() {
  return (
    <SecondBox
      maxWidth="md"
      sx={{
        marginTop: "5rem",
        marginBottom: "5rem",
        paddingBottom: 10,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
          gap: 3,
        }}
      >
        <img src={image} className={classes.heroImage} />
        <Typography variant="caption" sx={{ color: "gray" }}>
          New Start
        </Typography>
        <Typography sx={{ fontWeight: "bold" }} variant="h4">
          The ZONE UI Kit
        </Typography>
        <Typography variant="body2" align="center" sx={{ color: "gray" }}>
          Modern ui kit to save your time, boost your creativity. Neat and super
          stylish layout ready to help with your projects
        </Typography>
      </Box>
    </SecondBox>
  );
}

export default SecondHero;
