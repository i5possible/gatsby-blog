import * as React from "react";
import Section from "./Section";
import { Box } from "@chakra-ui/react";

const Footer = () => (
  <Section >
    <Box as={'footer'} position={'fixed'} bottom={0}>
      © {new Date().getFullYear()} CopyRight
    </Box>
  </Section>
)

export default Footer
