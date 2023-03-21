import { Box, Button, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { ImLocation2 } from "react-icons/im";
import { AiTwotoneCar } from "react-icons/ai";
const RightLayout = (props) => {
     const address = `${props.addressComponent[0].address2}, ${props.city}, ${props.addressComponent[0].pin}, ${props.addressComponent[0].country} `;
     return (
          <Box flex="1" p={5}>
               <Flex height="100%" gap={2} flexDirection="column" justifyContent="space-evenly">
                    <Heading size={"xl"}>Mass Monster</Heading>
                    <HStack>
                         <ImLocation2 />
                         <Text>{address}</Text>
                    </HStack>
                    <HStack>
                         <AiTwotoneCar />
                         <Text>14 min away</Text>
                         <Text>9KM</Text>
                    </HStack>
                    <Flex justifyContent="space-between" alignItems="center">
                         <Heading size="md" color="#f1f354">
                              1500 for 3 Months
                         </Heading>
                         <Button variant="primary">Book Now</Button>
                    </Flex>
               </Flex>
          </Box>
     );
};
export default RightLayout;
