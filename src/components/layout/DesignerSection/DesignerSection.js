import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Button } from "../..//UI";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const DesignerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 20,
  minHeight: "20rem",
  background:
    "linear-gradient(to bottom, rgba(22, 28, 36, 0.8), rgba(22, 28, 36, 0.8)),url(https://zone-assets-api.vercel.app/assets/images/home/for_designer.jpg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
}));

function DesignerSection() {
  return (
    <DesignerBox>
      <Typography variant="caption" sx={{ color: "white", fontSize: 9 }}>
        PROFFESIONAL KIT
      </Typography>
      <Typography sx={{ fontWeight: "bold", color: "white" }} variant="h4">
        For Designer
      </Typography>
      <Button
        sx={{ alignSelf: "center" }}
        type="orange"
        endIcon={<OpenInNewIcon />}
        size="large"
      >
        Figma Workspace
      </Button>
    </DesignerBox>
  );
}

export default DesignerSection;
