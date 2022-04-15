import {
  MainHeader,
  HeroSection,
  SecondHero,
  ComponentsSection,
  DesignerSection,
  MemberShipSection,
  InviteSection,
} from "./components/layout";
import { SettingButton } from "./components/UI";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
// import "./App.css";

const Help = styled(Container)(({ theme }) => ({
  marginTop: "10%",
  [theme.breakpoints.down("md")]: {
    marginTop: "15%",
  },
}));

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Help maxWidth="lg" disableGutters>
        <HeroSection />
        <SecondHero />
        <ComponentsSection />
      </Help>
      <DesignerSection />
      <MemberShipSection />
      <InviteSection />
      <SettingButton />
    </div>
  );
}

export default App;
