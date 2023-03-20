import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "./NavLink";
import { NavLogo } from "./NavLogo";

const Navbar = () => {
     return (
          <Box as="nav" bg="blackAlpha.700" h="350px" color="white">
               <Flex justifyContent="space-between" p="2rem">
                    <NavLogo />
                    <NavLink />
               </Flex>
          </Box>
     );
};
export default Navbar;
