import { Box, Image, Link } from "@chakra-ui/react";
import React from "react";

export const NavLogo = () => {
     return (
          <Box boxSize="70px">
               <Link href="/">
                    <Image objectFit="cover" alt="wtflogo.png" src={require("../../../images/wtflogo.png")} />
               </Link>
          </Box>
     );
};
