import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import { AlertProvider } from "./context/alertContext";
import "./index.css";
import "./config/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AlertProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </AlertProvider>
    </ChakraProvider>
  </React.StrictMode>
);
