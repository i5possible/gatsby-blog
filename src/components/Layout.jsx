import * as React from "react"
import { Box } from "@chakra-ui/react"
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Box>
      <Header/>
      <Box as={'main'} marginTop={'80px'}>{children}</Box>
      <Footer/>
    </Box>
  )
}

export default Layout
