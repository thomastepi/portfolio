import { Box, useColorMode } from "@chakra-ui/react";
import s from "./TitleWrapper.module.css";

const TitleWrapper = ({ children, ...boxProps }) => {
  const { colorMode } = useColorMode();
  const borderColor = colorMode === "light" ? "#1A202C" : "#EDF2F7";
  return (
    <Box
      className={s["section-title"]}
      {...boxProps}
      _before={{ borderBottom: `1px solid ${borderColor}` }}
      _after={{ borderBottom: `1px solid ${borderColor}` }}
    >
      {children}
    </Box>
  );
};

export default TitleWrapper;
