import { Box, Flex, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BsCarFront } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { FaShower } from "react-icons/fa";
import { GiCctvCamera } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
const FacilityLayout = () => {
     return (
          <Flex justifyContent={"space-evenly"} gap={5}>
               <Flex
                    alignItems="center"
                    gap={2}
                    direction="column"
                    justifyContent="center"
                    bg="white"
                    color="black"
                    width="100px"
                    height="100px"
                    borderRadius={5}
                    fontSize="1.3rem"
               >
                    <Text>Parking</Text>
                    <Box>{<BsCarFront />}</Box>
               </Flex>
               <Flex
                    alignItems="center"
                    gap={2}
                    direction="column"
                    justifyContent="center"
                    bg="white"
                    color="black"
                    width="100px"
                    height="100px"
                    borderRadius={5}
                    fontSize="1.3rem"
               >
                    <Text>Locker </Text>
                    <Box>{<AiFillLock />}</Box>
               </Flex>
               <Flex
                    alignItems="center"
                    gap={2}
                    direction="column"
                    justifyContent="center"
                    bg="white"
                    color="black"
                    width="100px"
                    height="100px"
                    borderRadius={5}
                    fontSize="1.3rem"
               >
                    <Text>Modern </Text>
                    <Box>{<CgGym />}</Box>
               </Flex>
               <Flex
                    alignItems="center"
                    gap={2}
                    direction="column"
                    justifyContent="center"
                    bg="white"
                    color="black"
                    width="100px"
                    height="100px"
                    borderRadius={5}
                    fontSize="1.3rem"
               >
                    <Text>CCTB</Text>
                    <Box>{<GiCctvCamera />}</Box>
               </Flex>
               <Flex
                    alignItems="center"
                    gap={2}
                    direction="column"
                    justifyContent="center"
                    bg="white"
                    color="black"
                    width="100px"
                    height="100px"
                    borderRadius={5}
                    fontSize="1.3rem"
               >
                    <Text>Shower</Text>
                    <Box>{<FaShower />}</Box>
               </Flex>
          </Flex>
     );
};
export default FacilityLayout;
