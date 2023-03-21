import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BsCurrencyRupee } from "react-icons/bs";
const VoucherPlan = () => {
     return (
          <Box w="100%">
               <Flex border="1px" borderRadius="xl" bg="white" color="black" p={1} position="relative">
                    <Box flex="1" p={3} textAlign="justify" borderRight="1px" borderRightStyle="dashed">
                         <VStack align>
                              <Heading size="lg">Monthly</Heading>
                              <Text fontSize="xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
                         </VStack>
                    </Box>
                    <Box p={3} w="30%">
                         <VStack justifyContent="center" alignItems="center" h="100%" w="100%">
                              <HStack>
                                   <BsCurrencyRupee />
                                   <Heading size="md" fontWeight="bold">
                                        1299
                                   </Heading>
                              </HStack>
                              <Text>70/day</Text>
                         </VStack>
                    </Box>
                    <Box position="absolute" top="-20px" right="27%" w="40px" h="40px" bg="black" borderRadius="full"></Box>
                    <Box position="absolute" bottom="-20px" right="27%" w="40px" h="40px" bg="black" borderRadius="full"></Box>
               </Flex>
          </Box>
     );
};

export default VoucherPlan;
