const DarkTheme = {
  palette: {
    mode: "dark" as const,
    primary: {
      light: "#A8FBD7",
      main: "#A8FBD7",
      dark: "#A8FBD7",
      contrastText: "#000",
    },
    secondary: {
      light: "#A8FBD7",
      main: "#A8FBD7",
      dark: "#A8FBD7",
      contrastText: "#000",
    },
    background: {
      default: "#000",
      paper: "#000",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
      secondary: "rgba(255, 255, 255, 0.54)",
      disabled: "rgba(255, 255, 255, 0.38)",
    },
    divider: "rgba(255, 255, 255, 0.27)",
    action: {
      hover: "#16191f",
      focus: "#16191f",
    },
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 13,
    fontFamily: "ClashGrotesk-Variable",
  },
  components: {
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            border: "1px solid rgb(255,255,255,0.3)",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: "#090d12!important",
        },
        body: {
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "rgb(255, 255, 255, 0.6)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          "&.Mui-disabled": {
            background: "rgb(255, 255, 255, 0.7)",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "rgb(255, 255, 255, 0.7)",
          "&.Mui-disabled": {
            color: "rgba(90,90,90,0.6)",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          "&$open": {
            opacity: 0.85,
            backgroundColor: "#000",
            color: "#fff",
          },
          fontSize: 12,
          backgroundColor: "#000",
          color: "#fff",
        },
      },
    },
  },
};

export default DarkTheme;
