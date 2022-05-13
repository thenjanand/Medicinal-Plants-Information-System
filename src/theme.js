import { createTheme } from "@mui/material/styles";
import orange from "@mui/material/colors/orange";
import green from "@mui/material/colors/green";
import grey from "@mui/material/colors/grey";

const theme = createTheme({
  palette: {
    primary: {
      main: green[800],
      optional: grey[100]
    },
    secondary: {
      main: orange[600],
    },
  },
});

export default theme;