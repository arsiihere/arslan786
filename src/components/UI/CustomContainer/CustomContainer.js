import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const BoxC = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "auto",
  marginBottom: 40,
  justifyContent: "center",
  justifyContent: "center",
}));

export default function CustomContainer(props) {
  return <BoxC {...props}>{props.children}</BoxC>;
}
