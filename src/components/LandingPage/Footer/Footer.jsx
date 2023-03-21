import { Box, Flex, Heading, Image, List, ListIcon, ListItem } from "@chakra-ui/react";
import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineMobile, AiOutlineMail } from "react-icons/ai";
const Footer = () => {
     return (
          <Box as="footer" my="10px" px={6} py={14}>
               <Flex justifyContent="space-evenly">
                    <Box>
                         <Image src={require("../../../images/wtflogo.png")} />
                    </Box>
                    <Box>
                         <Heading size="lg">Quick Link</Heading>
                         <List spacing={3} mt="1rem">
                              <ListItem>About</ListItem>
                              <ListItem>FAQs</ListItem>
                              <ListItem>Terms & Conditions</ListItem>
                              <ListItem>Refund & Cancellation</ListItem>
                              <ListItem>Contact</ListItem>
                         </List>
                    </Box>
                    <Box>
                         <Heading size="lg">Explore</Heading>
                         <List spacing={3} mt="1rem">
                              <ListItem>Arenas</ListItem>
                              <ListItem>Studios</ListItem>
                              <ListItem>Nutrition</ListItem>
                              <ListItem>Personal Trainer</ListItem>
                         </List>
                    </Box>
                    <Box>
                         <Heading size="lg">Contact</Heading>
                         <List spacing={3} mt="1rem">
                              <ListItem overflowWrap="break-word" wordBreak="break-word">
                                   <ListIcon as={GoLocation} />
                                   RO:- S 1502 Amraplai Silicon <br /> City,Sector 76,Noida,Uttar Pardesh,India
                              </ListItem>
                              <ListItem overflowWrap="break-word" wordBreak="break-word">
                                   <ListIcon as={GoLocation} />
                                   HO:-C-86 B,Ground Floor, <br />
                                   Sector 8 ,Noid,Uttar Pardesh,India
                              </ListItem>
                              <ListItem>
                                   <ListIcon as={AiOutlineMobile} />
                                   +919090639005
                              </ListItem>
                              <ListItem>
                                   <ListIcon as={AiOutlineMail} />
                                   support@wtfup.me
                              </ListItem>
                         </List>
                    </Box>
               </Flex>
          </Box>
     );
};
export default Footer;
