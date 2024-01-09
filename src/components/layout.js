import * as React from "react"
import { Box } from "@chakra-ui/react"
import Header from "./Header";

const Layout = ({ title, children }) => {
  return (
    <Box>
      <Header/>
      <Box as={'main'} marginTop={100}>{children}</Box>
      <footer>
        © {new Date().getFullYear()} CopyRight
      </footer>
    </Box>
  )
}

export default Layout
