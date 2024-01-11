import React, { useEffect, useState } from 'react';
import { Container, Flex, IconButton, Link, Text, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Flex
      as="header"
      width="100%"
      bg={scrolled ? 'chakra-body-bg' : 'transparent'}
      align="center"
      justify="center"
      position="fixed"
      top={0}
      zIndex="docked"
      transition="background-color 0.3s"
    >
      <Container maxW="1440px" height={"80px"} justify={"center"}>
        <Flex justify="space-between" align="center" height={"100%"}>
          <Link to="/" align={"center"} textStyle={'h3'}>
            Alfred
          </Link>
          <Flex align={"center"}>
            <Link to="/" marginRight="4">Home</Link>
            <Link to="/blogs" marginRight="4">Blogs</Link>
            <Link to="/principles" marginRight="4">Principles</Link>
            <Link to="/recommendations">Recommendations</Link>
          </Flex>
          <IconButton
            icon={colorMode === 'light' ? <FaMoon/> : <FaSun/>}
            onClick={toggleColorMode}
            variant="ghost"
          />
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;
