import { Box } from "@chakra-ui/react";
import React from "react";
import Content from "./MainContent/Content";
import Navbar from "./Navigation/Navbar";
import SearchBar from "./SearchBar/SearchBar";

const Landing = () => {
     return (
          <>
               <Navbar />
               <SearchBar />
               <Content />
          </>
     );
};

export default Landing;
