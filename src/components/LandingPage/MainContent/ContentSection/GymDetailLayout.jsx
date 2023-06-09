import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import LeftLayout from "./LeftLayout";
import RightLayout from "./RightLayout";

const GymDetailLayout = (props) => {
     return (
          <Box h={350} px={6}>
               {/* TAG IMPLEMENTATION */}
               <Flex height="100%">
                    {/* Box Left Layout */}
                    <LeftLayout {...props} />
                    {/* Box right Layout */}
                    <RightLayout {...props} />
               </Flex>
          </Box>
     );
};
export default GymDetailLayout;
