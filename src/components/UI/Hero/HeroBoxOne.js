import { Box, Typography } from "@mui/material";
import { Button } from "../../UI";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { styled } from "@mui/material/styles";

const ZoneTypo = styled(Typography)(({ theme }) => ({
  color: theme.palette.warning.main,
  fontWeight: "bold",
}));

const sx = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
};

function HeroBoxOne() {
  return (
    <Box sx={sx}>
      <Typography
        variant="h3"
        component="h1"
        sx={{ fontWeight: "bold", lineHeight: 1.3 }}
        align="left"
      >
        Create Your Website Today with{" "}
        <ZoneTypo component="span" variant="h3">
          Zone
        </ZoneTypo>
      </Typography>
      <Typography
        sx={{ lineHeight: 1.5, letterSpacing: 1.3 }}
        align="left"
        variant="caption"
      >
        The ZONE is built on top of MUI, a powerful library that provides
        flexible, customizable, and easy-to-use components.
      </Typography>
      <Button
        type="black"
        size="medium"
        sx={{ alignSelf: "flex-start" }}
        endIcon={<OpenInNewIcon />}
      >
        Figma WorkSpace
      </Button>
    </Box>
  );
}

export default HeroBoxOne;
