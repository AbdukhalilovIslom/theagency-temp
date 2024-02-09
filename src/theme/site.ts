import { createTheme } from "@mui/material";
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 768,
      md: 992,
      lg: 1200,
      1440: 1440,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      disableRipple: true,
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          textAlign: "left",
          minWidth: "auto",
          padding: 0,
          "& .MuiAccordionSummary-content": {
            flexGrow: 0
          }
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: "none",
          padding: 0,
          margin: 0
        },
      },
    },
    MuiSelect: {
      styleOverrides: {

        border: "none",
        "& fieldset": {
          border: "none",
        },

      },
    },
    // MuiTypography: {
    //   styleOverrides: {
    //     root: {
    //       fontFamily: "Helvetica, sans-serif"
    //     }

    //   },
    // }

  }
});

export { theme };