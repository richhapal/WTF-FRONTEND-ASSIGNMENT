import { Box, Flex, Heading, HStack, Tag, TagLabel, Text } from "@chakra-ui/react";
import React from "react";
import { GoLocation } from "react-icons/go";
import { MdLeaderboard, MdStarOutline } from "react-icons/md";
const GymHeader = () => {
     return (
          <Box px={6} py={12}>
               <Flex justifyContent="space-between">
                    <Box>
                         <Heading size="xl">Mass Monster</Heading>
                         <Flex gap={2} mt={2} alignItems="center">
                              <GoLocation />
                              <Text>Noida Sector 8,C-Block</Text>
                              <Tag size="md" variant="solid" colorScheme="green" borderRadius="sm">
                                   <TagLabel> NAVIGATE</TagLabel>
                              </Tag>
                         </Flex>
                    </Box>
                    <Box>
                         <Flex alignItems="center" gap={3}>
                              <Box bg="red" p={6} borderRadius="md">
                                   <HStack>
                                        <MdLeaderboard />
                                        <Text>View Leaderboard</Text>
                                   </HStack>
                              </Box>
                              <Box>
                                   <HStack>
                                        <MdStarOutline />
                                        <Text>Rating</Text>
                                   </HStack>
                              </Box>
                         </Flex>
                    </Box>
               </Flex>
          </Box>
     );
};
export default GymHeader;
