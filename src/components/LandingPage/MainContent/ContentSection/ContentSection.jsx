import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GymDetailLayout from "./GymDetailLayout";

const ContentSection = () => {
     const { gymList } = useSelector((state) => state.gymReducer);
     // console.log("gymList", gymList);
     return (
          <Box w="80%" borderRadius="md">
               <Flex direction="column" gap={6} borderLeft="1px">
                    {gymList.map((data, index) => (
                         <Link to="gym">
                              <GymDetailLayout {...data} key={index} />
                         </Link>
                    ))}

                    {/* <Link to="gym">
                         <GymDetailLayout />
                    </Link>
                    <Link to="gym">
                         <GymDetailLayout />
                    </Link> */}
               </Flex>
          </Box>
     );
};
export default ContentSection;
