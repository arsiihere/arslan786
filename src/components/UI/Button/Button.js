import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ButtonVariant = styled(Button)(({ type, theme }) => ({
  ...(type === "orange" && {
    backgroundColor: theme.palette.warning.main,
    color: "white",
    fontSize: 10,
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
    },
  }),

  ...(type === "white" && {
    backgroundColor: theme.palette.grey[50],
    color: "black",
    border: `1px solid ${theme.palette.grey[200]}`,
    fontSize: 10,
    "&:hover": {
      backgroundColor: theme.palette.grey[100],
      border: "1px solid black",
    },
  }),

  ...(type === "black" && {
    backgroundColor: theme.palette.grey[900],
    color: "white",
    fontSize: 10,
    "&:hover": {
      backgroundColor: theme.palette.grey[800],
    },
  }),
}));

export default function CustomButton(props) {
  return <ButtonVariant {...props}>{props.children}</ButtonVariant>;
}
