import { Box, Button, Checkbox, Flex, Heading, HStack, Input, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const labelStyles = {
     mt: "-8",
     fontSize: "md",
};

const FilterSection = () => {
     const [value, setValue] = useState(0);
     return (
          <Box w="30%" p={3}>
               <Flex direction="column" gap="1rem">
                    <Heading size="lg">Filters</Heading>
                    <Stack>
                         <Heading size="md">Location</Heading>
                         <Input bg="blackAlpha.200" color="blackAlpha.200" variant="filled" placeholder="Enter Location" />
                    </Stack>
                    <Stack>
                         <Heading size="md">Category</Heading>
                         <HStack>
                              <Button size="sm" isActive>
                                   All
                              </Button>
                              <Button size="sm">Pro</Button>
                              <Button size="sm">ELITE</Button>
                              <Button size="sm">LUXE</Button>
                         </HStack>
                    </Stack>
                    <Stack>
                         <Heading size="sm">Features</Heading>
                         <VStack align="left">
                              <Checkbox colorScheme="green">Zumba Class</Checkbox>
                              <Checkbox colorScheme="green">Crossfit Circuit</Checkbox>
                              <Checkbox colorScheme="green">Cardio Zone</Checkbox>
                              <Checkbox colorScheme="green">Pilate Studios</Checkbox>
                         </VStack>
                    </Stack>
                    <Stack>
                         <Heading size="sm">Distance in Km</Heading>
                         <Box pt={5}>
                              <Slider aria-label="slider-ex-6" min={0} max={10} defaultValue={0} onChange={(val) => setValue(val)}>
                                   <Box mb="14">
                                        <Flex justifyContent="space-between">
                                             <Text fontSize={value === 2 ? "1.5rem" : "1rem"}>2</Text>
                                             <Text fontSize={value === 4 ? "1.5rem" : "1rem"}>4</Text>
                                             <Text fontSize={value === 6 ? "1.5rem" : "1rem"} fontWeight="100">
                                                  6
                                             </Text>
                                             <Text fontSize={value >= 7 ? "1.5rem" : "1rem"}>Max</Text>
                                        </Flex>
                                   </Box>
                                   <SliderTrack>
                                        <SliderFilledTrack bg="red" />
                                   </SliderTrack>
                                   <SliderThumb />
                              </Slider>
                         </Box>
                    </Stack>
               </Flex>
          </Box>
     );
};
export default FilterSection;
