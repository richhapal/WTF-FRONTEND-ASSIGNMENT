import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navigation/Navbar";
import SearchBar from "./SearchBar/SearchBar";

const Landing = () => {
     return (
          <>
               <Navbar />
               <SearchBar />
          </>
     );
};

export default Landing;
