import { Box } from "@chakra-ui/react";
import React from "react";
import Features from "./Features/Features";
import Content from "./MainContent/Content";
import Navbar from "./Navigation/Navbar";
import SearchBar from "./SearchBar/SearchBar";

const Landing = () => {
     return (
          <>
               <Navbar />
               <SearchBar />
               <Content />
               <Features />
          </>
     );
};

export default Landing;
