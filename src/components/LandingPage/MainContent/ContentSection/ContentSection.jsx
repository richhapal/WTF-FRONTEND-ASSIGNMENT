import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import GymDetailLayout from "./GymDetailLayout";

const ContentSection = () => {
     return (
          <Box w="80%" borderRadius="md">
               <Flex direction="column" gap={6} borderLeft="1px">
                    <GymDetailLayout />
                    <GymDetailLayout />
                    <GymDetailLayout />
               </Flex>
          </Box>
     );
};
export default ContentSection;
