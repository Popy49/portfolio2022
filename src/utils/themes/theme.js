import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#c7296f",
      contrastText: "#fff",
    },
    neutralLight: {
      main: "#da4185",
      contrastText: "#fff",
    },
  },
})

// theme.typography.h2 = {
//   "@media (max-width:600px)": {
//     fontSize: "3rem",
//   },
// }
