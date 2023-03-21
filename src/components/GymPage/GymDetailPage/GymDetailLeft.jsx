import { Box, Heading, HStack, List, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import React from "react";
import Facilities from "../../LandingPage/Features/Facilities";
import { BsCalendarCheck } from "react-icons/bs";
import { FcManager } from "react-icons/fc";
import { CgGym } from "react-icons/cg";
const GymDetailLeft = () => {
     return (
          <Box flex="1">
               <List spacing={5} p={5}>
                    <ListItem>
                         <VStack gap={2} align textAlign="justify">
                              <Heading size="md">Description</Heading>
                              <Text>
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repudiandae recusandae, excepturi incidunt amet animi, exercitationem natus
                                   voluptas facere doloremque ut magni sit saepe molestiae blanditiis aliquam reiciendis numquam! Facilis.
                              </Text>
                         </VStack>
                    </ListItem>
                    <ListItem>
                         <VStack gap={2} align>
                              <Heading size="md">Facilities</Heading>
                              <Facilities />
                         </VStack>
                    </ListItem>
                    {/* <ListItem>
                         <VStack gap={2} align>
                              <Heading size="md">Why to choose</Heading>
                              <Facilities />
                         </VStack>
                    </ListItem> */}
                    <ListItem>
                         <VStack gap={2} align>
                              <Heading size="md">How it works ?</Heading>
                         </VStack>
                         <UnorderedList spacing={5} mt={7}>
                              <ListItem>
                                   <HStack>
                                        <BsCalendarCheck size="2rem" />
                                        <Text>Pick membership start date and complete your subscription process by clicking By Now below</Text>
                                   </HStack>
                              </ListItem>
                              <ListItem>
                                   <HStack>
                                        <FcManager size="2rem" />
                                        <Text>A dedicated general trainer will be assigned after you have taken you subscription</Text>
                                   </HStack>
                              </ListItem>
                              <ListItem>
                                   <HStack>
                                        <CgGym size="2rem" />
                                        <Text>Explore WTF and start you fitness journey</Text>
                                   </HStack>
                              </ListItem>
                         </UnorderedList>
                    </ListItem>
               </List>
          </Box>
     );
};
export default GymDetailLeft;
