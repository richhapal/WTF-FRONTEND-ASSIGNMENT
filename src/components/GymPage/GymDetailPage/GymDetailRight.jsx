import { Box, Button, Center, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import VoucherPlan from "./VoucherPlan";

const GymDetailRight = () => {
     return (
          <Box flex="1">
               <Box borderRadius="lg" border="1px" p={5}>
                    <VStack gap={3} w="100%">
                         <Center>
                              <Heading size="lg">Choose Membership</Heading>
                         </Center>
                         <Flex justifyContent="space-between" w="100%">
                              <Button>General</Button>
                              <Text> Goal Focused</Text>
                         </Flex>
                         <VoucherPlan />
                         <VoucherPlan />
                         <VoucherPlan />
                         <VoucherPlan />
                    </VStack>
               </Box>
          </Box>
     );
};
export default GymDetailRight;
