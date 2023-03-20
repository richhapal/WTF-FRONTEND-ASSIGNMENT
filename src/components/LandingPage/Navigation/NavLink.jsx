import { Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

export const NavLink = () => {
     return (
          <Flex justifyContent="space-around" gap="3rem">
               <Link>
                    <Text>Fitness</Text>
               </Link>
               <Link>
                    <Text>Nutrition</Text>
               </Link>
               <Link>
                    <Text>Live class</Text>
               </Link>
               <Link>
                    <Text>Become WTF Partner</Text>
               </Link>
               <Link>
                    <Text>Login</Text>
               </Link>
          </Flex>
     );
};
