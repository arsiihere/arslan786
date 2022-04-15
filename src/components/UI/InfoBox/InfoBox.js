import { Box, Typography } from "@mui/material";

function InfoBox({ Button }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Have Everything You Need
      </Typography>
      <Typography variant="caption" component="p" align="left">
        Let's see what makes our theme super powerful and user-friendly!
      </Typography>
      <Button type="orange" variant="lg">
        Purchase Now
      </Button>
    </Box>
  );
}

export default InfoBox;

// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
// import FontDownloadIcon from '@mui/icons-material/FontDownload';
// import ColorLensIcon from '@mui/icons-material/ColorLens';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
