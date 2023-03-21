import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../LandingPage/Footer/Footer";
import Navbar from "../LandingPage/Navigation/Navbar";
import GoalFocusProgram from "./GymDetailPage/GoalFocusProgram";
import GymBook from "./GymDetailPage/GymBook";
import GymDetail from "./GymDetailPage/GymDetail";
import GymHeader from "./GymHeader";

const GymPage = () => {
     return (
          <>
               <Navbar />
               <GymHeader />
               <GymDetail />
               <GymBook />
               <GoalFocusProgram />
               <Footer />
          </>
     );
};
export default GymPage;
