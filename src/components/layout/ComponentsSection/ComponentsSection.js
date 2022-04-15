import { CustomContainer, Button } from "../../UI";
import classes from "./ComponentSection.module.css";
import {
  Typography,
  Box,
  Card,
  Tabs,
  Tab,
  Stack,
  Chip,
  Avatar,
  AvatarGroup,
  Rating,
  Slider,
  Alert,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import CancelIcon from "@mui/icons-material/Cancel";

const BoxC = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: 15,
  flexDirection: "column",
  gap: 2,
  width: "100%",
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
    width: "100%",
  },
  [theme.breakpoints.only("sm")]: {},
  // justifyItems: "center",
}));

function ComponentsSection() {
  return (
    <CustomContainer>
      <Grid container gap={4} justifyContent="center">
        <Grid item sm={12} md={6}>
          <BoxC>
            <Typography
              variant="caption"
              sx={{
                color: "gray",
                fontSize: 8,
                fontWeight: "bold",
              }}
              component="span"
            >
              INTERFACE STARTER KIT
            </Typography>

            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", lineHeight: 1.5 }}
              component="span"
            >
              Flexible Components
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "gray", letterSpacing: 1.3 }}
              component="span"
            >
              Pre-set components are easy to customize and use.
              <br />
              We collected most popular elements. Menu, sliders, buttons, inputs
              etc. are all here. Just dive in!
            </Typography>
            <span>
              <Button type="white" endIcon={<ChevronRightIcon />} size="large">
                Browse Components
              </Button>
            </span>
          </BoxC>
        </Grid>
        <Grid item>
          <Card
            variant="outlined"
            sx={{
              padding: 5,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Stack direction="row" gap={3}>
              <Button
                type="orange"
                size="small"
                sx={{ padding: 1.3 }}
                startIcon={<AddOutlinedIcon />}
              >
                Add to Cart
              </Button>

              <Button
                type="black"
                size="small"
                startIcon={<BackupOutlinedIcon />}
                sx={{ borderRadius: 10, padding: 1.3 }}
              >
                Upload
              </Button>

              <Button sx={{ borderRadius: 100, backgroundColor: "#22B8CF" }}>
                <SubscriptionsOutlinedIcon sx={{ color: "white" }} />
              </Button>
            </Stack>

            <Grid container>
              <Grid item sm={12} md={6}>
                <Tabs aria-label="basic tabs example">
                  <Tab label="Item One" />
                  <Tab label="Item Two" />
                  <Tab label="Item Three" />
                </Tabs>
              </Grid>
              <Grid item sm={12} md={6}>
                <Chip
                  avatar={<Avatar>P</Avatar>}
                  label="Avatar"
                  variant="outlined"
                  deleteIcon={<CancelIcon />}
                  onDelete={() => console.log("hello")}
                />
              </Grid>
            </Grid>
            <Stack direction="row" spacing={1}>
              <span className={classes.resedue}>
                <AvatarGroup>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
              </span>
              <span className={classes.resedue}>
                <Rating
                  name="simple-controlled"
                  value={2}
                  onChange={(event, newValue) => {
                    console.log("value changed");
                  }}
                />
              </span>
            </Stack>
            <Grid container gap={2}>
              <Grid item sm={12} md={4}>
                <Box sx={{ width: 200 }} component="span">
                  <Slider
                    size="small"
                    aria-label="Temperature"
                    defaultValue={30}
                    color="warning"
                  />
                </Box>
              </Grid>
              <Grid item sm={12} md={6}>
                <Alert severity="success">This is a success alert </Alert>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </CustomContainer>
  );
}

export default ComponentsSection;
