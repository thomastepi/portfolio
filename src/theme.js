import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  colors: {
    lightModeBg: "#f7f7f7",
    darkModeBg: "#1a202c",
    modalDarkBg: "#344955",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "light" ? "lightModeBg" : "darkModeBg",
        color: props.colorMode === "light" ? "gray.800" : "whiteAlpha.900",
        transition: "background-color 0.8s ease-in-out, color 0.8s ease-in-out",
        margin: 0,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      },
      input: {
        borderRadius: "0!important",
        border: "none!important",
      },
      textarea: {
        borderRadius: "0!important",
        border: "none!important",
      },
      select: {
        borderRadius: "0!important",
        border: "none!important",
      },
      button: {
        border: "none!important",
        borderRadius: "0!important",
      },
      "a:hover": {
        textDecoration: "underline",
      },
      code: {
        fontFamily:
          'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
      },
    }),
  },
  components: {
    Modal: {
      baseStyle: (props) => ({
        dialog: {
          bg: props.colorMode === "dark" ? "modalDarkBg" : "white",
          color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
          boxShadow: "lg",
        },
      }),
    },
  },
});

export default theme;
