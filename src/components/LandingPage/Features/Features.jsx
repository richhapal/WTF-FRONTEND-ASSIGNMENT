import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import Facilities from "./Facilities";

const Features = () => {
     return (
          <Box my={8}>
               <Flex w="100%" px={7} alignItems="center" justifyContent="space-evenly">
                    <VStack align="left" flex="1" w="50%">
                         <Heading size="lg">WTF Fitness</Heading>
                         <Heading size="lg">Experience</Heading>
                         <Heading letterSpacing={1} size="md">
                              At Your Regular Gym Cost
                         </Heading>
                    </VStack>
                    <Facilities />
               </Flex>
          </Box>
     );
};

export default Features;
