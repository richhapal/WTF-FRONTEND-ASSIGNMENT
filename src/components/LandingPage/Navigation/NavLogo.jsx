import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
export const NavLogo = () => {
     const location = useLocation();
     return (
          <Box>
               <Flex alignItems="center" gap={4}>
                    {location.pathname === "/gym" && (
                         <Link to="/">
                              <HStack>
                                   <AiOutlineArrowLeft />
                                   <Text>Back</Text>
                              </HStack>
                         </Link>
                    )}

                    <Link to="/">
                         <Image objectFit="cover" alt="wtflogo.png" src={require("../../../images/wtflogo.png")} height="30px" />
                    </Link>
               </Flex>
          </Box>
     );
};
