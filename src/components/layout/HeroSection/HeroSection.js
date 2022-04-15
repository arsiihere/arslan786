import { HeroBoxOne, HeroBoxTwo } from "../../UI";
import { Box, Grid } from "@mui/material";

function HeroSection() {
  return (
    <Box
      sx={{
        display: "flex",
        marginLeft: "8vw",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "80%",
        gap: 10,
        boxSizing: "content-box",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          <HeroBoxOne />
        </Grid>
        <Grid item xs={12} md={6}>
          <HeroBoxTwo />
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeroSection;
