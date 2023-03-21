import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import GymDetailLayout from "./GymDetailLayout";

const ContentSection = () => {
     return (
          <Box w="80%" borderRadius="md">
               <Flex direction="column" gap={6} borderLeft="1px">
                    <Link to="gym">
                         <GymDetailLayout />
                    </Link>
                    <Link to="gym">
                         <GymDetailLayout />
                    </Link>
                    <Link to="gym">
                         <GymDetailLayout />
                    </Link>
               </Flex>
          </Box>
     );
};
export default ContentSection;
