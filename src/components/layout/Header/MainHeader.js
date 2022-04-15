// COMPONENTS IMPORT
import { Button, AppBar } from "../../UI";

// MUI IMPORTS
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { Typography, Box, Divider, IconButton } from "@mui/material";

const NavBarItemsDiv = styled(Box)(({ theme }) => ({
  minWidth: "70vw",
  display: "flex",
  alignItems: "center",
  gap: 50,
  margin: "auto",
}));
const CustomTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[700],
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.grey[500],
  },
}));
const sx = {
  fontSize: 20,
  "&:hover": {
    transform: "scale(1.1)",
    transition: "all 0.1s ease-in",
  },
};

const menus = ["Home", "Components", "Pages", "Documentation"];

function MainHeader() {
  return (
    <AppBar color="primary" variant="string">
      <NavBarItemsDiv>
        <Box sx={{ display: "flex", flexGrow: "1", gap: 5 }}>
          {menus.map((menu) => (
            <CustomTypography variant="caption" component="p">
              {menu}
            </CustomTypography>
          ))}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton sx={sx} size="small">
            <SearchIcon fontSize="inherit" />
          </IconButton>
          <IconButton sx={sx} size="small">
            <TravelExploreIcon fontSize="inherit" />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <Button type="white" size="small">
            Join Us
          </Button>
          <Button type="orange" size="small">
            Buy Now
          </Button>
        </Box>
      </NavBarItemsDiv>
    </AppBar>
  );
}

export default MainHeader;
