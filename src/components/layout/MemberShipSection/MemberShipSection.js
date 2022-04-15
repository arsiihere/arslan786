import { Box, Typography, Grid } from "@mui/material";
import { MembershipCard } from "../../UI";

function MemberShipSection() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: 5,
        padding: 5,
        marginTop: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          alignSelf: "center",
          marginBottom: 4,
        }}
      >
        <Typography variant="caption" align="center" sx={{ color: "gray" }}>
          PRICING PLANS
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          The Righ Plan For Your Business
        </Typography>
        <Typography variant="body2 paragraph" align="center">
          Choose the perfect plan for your needs. Always flexible to grow{" "}
        </Typography>
      </Box>
      <Grid
        container
        sx={{ display: "flex", gap: 5, justifyContent: "center" }}
        alignItems="center"
      >
        <Grid item sm={12} md={6} lg={3}>
          <MembershipCard membership="standard" name="standard" price={69} />
        </Grid>
        <Grid item sm={12} md={6} lg={3}>
          <MembershipCard membership="plus" name="plus" price={129} />
        </Grid>
        <Grid item sm={12} md={6} lg={3}>
          <MembershipCard membership="extended" name="extended" price={599} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default MemberShipSection;
