import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: "dark",
  },
  colors: {
    lightModeBg: "#f7f7f7",
    darkModeBg: "#1a202c",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "light" ? "lightModeBg" : "darkModeBg",
        color: props.colorMode === "light" ? "gray.800" : "whiteAlpha.900",
        margin: 0,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      },
      code: {
        fontFamily:
          'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
      },
    }),
  },
});

export default theme;
