import { Box, Button, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineSportsGymnastics } from "react-icons/md";
const LeftLayout = () => {
     return (
          <Box flex="1" h="100%" position="relative">
               <Image src={require("../../../../images/gymLayout.jpg")} width="100%" height="100%" objectFit="cover" borderRadius="md" />
               <Flex gap={3} position="absolute" bottom="1rem" left="1rem">
                    <HStack bg="red" p="0.5rem" borderRadius="md">
                         <MdOutlineSportsGymnastics /> <Text>ZUMBA</Text>
                    </HStack>
                    <HStack bg="red" p="0.5rem" borderRadius="md">
                         <MdOutlineSportsGymnastics />
                         <Text>PILATES</Text>
                    </HStack>
               </Flex>
          </Box>
     );
};
export default LeftLayout;
