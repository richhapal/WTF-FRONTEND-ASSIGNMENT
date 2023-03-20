import { Box, Button, Center, Flex, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const SearchBar = () => {
     return (
          <Center>
               <Box border="1px" borderColor="white" w="80%" p="0.7rem" borderRadius="0.5rem">
                    <Flex alignContent="center" justifyContent="center">
                         {/* <Input placeholder="medium size" size="md" /> */}
                         <InputGroup>
                              <InputLeftAddon pointerEvents="none" children={<AiOutlineSearch />} bg="black" border="none" color="gray.300" />
                              <Input type="tel" placeholder="Search in GYMS" w="80%" border="none" />
                         </InputGroup>
                         <Button>Search</Button>
                    </Flex>
               </Box>
          </Center>
     );
};
export default SearchBar;
