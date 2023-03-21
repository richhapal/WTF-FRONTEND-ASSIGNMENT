import GymPage from "./components/GymPage/GymPage";
import Landing from "./components/LandingPage/Landing";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { gymDataApi } from "./helper/api";
import { useDispatch } from "react-redux";

const router = createBrowserRouter([
     {
          path: "/",
          element: <Landing />,
     },
     {
          path: "gym",
          element: <GymPage />,
     },
]);

function App() {
     const dispatch = useDispatch();
     useEffect(() => {
          dispatch(gymDataApi());
     }, []);

     return <RouterProvider router={router} />;
}

export default App;
