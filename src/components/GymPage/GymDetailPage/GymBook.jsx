import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const GymBook = () => {
     return (
          <Box my={5} p={12}>
               <Flex alignItems="center" w="100%" justifyContent="space-evenly" textAlign="center">
                    <Box border="2px " borderRadius="full" w="30%" p={5}>
                         Book 1 day free session
                    </Box>
                    <Box bg="red" borderRadius="full" w="30%" p={5} textAlign="center">
                         Buy now
                    </Box>
               </Flex>
          </Box>
     );
};
export default GymBook;
