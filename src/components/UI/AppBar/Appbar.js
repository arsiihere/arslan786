import { alpha, styled } from "@mui/material/styles";
import { AppBar, CssBaseline, Toolbar } from "@mui/material";
import { useOffSetTop } from "../../hooks";

const AppBarC = styled(AppBar)(({ theme, isOnTop }) => ({
  width: "100%",

  backgroundColor: isOnTop
    ? alpha(theme.palette.common.white, 0.7)
    : theme.palette.common.white,
  height: isOnTop ? 55 : 65,
  padding: 0,
  margin: 0,
  transition:
    "height 250ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, background-color 250ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
  backdropFilter: "blur(6px)",
  zIndex: theme.zIndex.appBar,
}));

export default function CustomAppBar(props) {
  const isOnTop = useOffSetTop();
  return (
    <>
      <CssBaseline />
      <AppBarC isOnTop={isOnTop} {...props} variant="variant" disablegutters>
        <Toolbar>{props.children}</Toolbar>
      </AppBarC>
    </>
  );
}
