import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "./NavLink";
import { NavLogo } from "./NavLogo";

const Navbar = () => {
     return (
          <Box as="nav" bg="blackAlpha.700" h="450px" color="white" position="relative" mb={5}>
               <Box position="absolute" top="0" w="100%">
                    <Flex justifyContent="space-between" p="2rem">
                         <NavLogo />
                         <NavLink />
                    </Flex>
               </Box>

               <Image src={require("../../../images/heroimage.jpg")} height="100%" w="100%" objectFit="cover" />
          </Box>
     );
};
export default Navbar;
