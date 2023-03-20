import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import LeftLayout from "./LeftLayout";
import RightLayout from "./RightLayout";

const GymDetailLayout = () => {
     return (
          <Box h={350} px={6}>
               {/* TAG IMPLEMENTATION */}
               <Flex height="100%">
                    {/* Box Left Layout */}
                    <LeftLayout />
                    {/* Box right Layout */}
                    <RightLayout />
               </Flex>
          </Box>
     );
};
export default GymDetailLayout;
