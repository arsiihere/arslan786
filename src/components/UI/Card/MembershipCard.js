import { Card, CardContent, Typography, Box } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { Button } from "../../UI";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";

const MembershipCardBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
  },
}));

function MemberShipType(membership = "standard") {
  switch (membership.toLowerCase()) {
    case "standard":
      return [
        { value: "One end products", allow: true },
        { value: "12 months updates", allow: true },
        { value: "6 months of support", allow: true },
        { value: "JavaScript version", allow: true },
        { value: "TypeScript version", allow: false },
        { value: "Design resources", allow: false },
        { value: "Commercial applications", allow: false },
      ];
    case "plus":
      return [
        { value: "One end products", allow: true },
        { value: "12 months updates", allow: true },
        { value: "6 months of support", allow: true },
        { value: "JavaScript version", allow: true },
        { value: "TypeScript version", allow: true },
        { value: "Design resources", allow: true },
        { value: "Commercial applications", allow: false },
      ];
    case "extended":
      return [
        { value: "One end products", allow: true },
        { value: "12 months updates", allow: true },
        { value: "6 months of support", allow: true },
        { value: "JavaScript version", allow: true },
        { value: "TypeScript version", allow: true },
        { value: "Design resources", allow: true },
        { value: "Commercial applications", allow: true },
      ];
  }
}

const MembCard = styled(Card)(({ theme, membership }) => ({
  boxShadow: membership === "plus" ? theme.shadows[20] : 0,
  [theme.breakpoints.down("md")]: {
    width: 300,
  },
}));

function MembershipCard({ membership = "standard", name, price }) {
  return (
    <MembCard
      membership={membership.toString()}
      sx={{
        padding: 3,
        borderRadius: 3,
        paddingBottom: 5,
        marginTop: membership === "plus" ? -2 : 0,
      }}
    >
      <MembershipCardBox>
        <CardContent>
          <Typography>
            {name.toUpperCase()}
            <Typography
              component="span"
              sx={{ fontWeight: "bold", fontSize: 20, marginLeft: 5 }}
            >
              ${price}
            </Typography>
          </Typography>
        </CardContent>
        <CardContent>
          {MemberShipType(membership).map((pros, i) => (
            <Typography
              component="span"
              sx={{ display: "flex", gap: 1, fontSize: 12, marginTop: 2 }}
            >
              {pros.allow ? (
                <CheckCircleOutlineIcon color="warning" sx={{ fontSize: 20 }} />
              ) : (
                <CancelIcon color="disable" sx={{ fontSize: 20 }} />
              )}
              {pros.value}
            </Typography>
          ))}
        </CardContent>
        <Button
          type={`${membership === "plus" ? "orange" : "black"}`}
          size="medium"
          sx={{ fontSize: 13 }}
        >
          Choose Package
        </Button>
      </MembershipCardBox>
    </MembCard>
  );
}

export default MembershipCard;
