import GymPage from "./components/GymPage/GymPage";
import Landing from "./components/LandingPage/Landing";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
     {
          path: "/",
          element: <Landing />,
          // children: [
          //      {
          //           path: "gym",
          //           element: <GymPage />,
          //      },
          // ],
     },
     {
          path: "gym",
          element: <GymPage />,
     },
]);

function App() {
     return <RouterProvider router={router} />;
}

export default App;
