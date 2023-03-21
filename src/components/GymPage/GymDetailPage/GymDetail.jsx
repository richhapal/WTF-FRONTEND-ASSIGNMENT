import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import GymDetailLeft from "./GymDetailLeft";
import GymDetailRight from "./GymDetailRight";

const GymDetail = () => {
     return (
          <Box px={6} py={12}>
               <Flex p={5} gap={3}>
                    <GymDetailLeft />
                    <GymDetailRight />
               </Flex>
          </Box>
     );
};
export default GymDetail;
