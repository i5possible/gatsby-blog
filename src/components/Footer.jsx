import * as React from "react";
import { Box } from "@chakra-ui/react";

const Footer = () => (
  <Box >
    <footer>
      © {new Date().getFullYear()} CopyRight
    </footer>
  </Box>
)

export default Footer
