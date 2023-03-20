import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ContentSection from "./ContentSection/ContentSection";
import FilterSection from "./FilterSection/FilterSection";

const Content = () => {
     return (
          <Box as="section" marginTop={6} w="100%" p={6}>
               <Flex>
                    <FilterSection />
                    <ContentSection />
               </Flex>
          </Box>
     );
};
export default Content;
