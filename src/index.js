import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import { store } from "../src/redux/store";
import { Provider } from "react-redux";

const theme = extendTheme({
     styles: {
          global: {
               // styles for the `body`
               body: {
                    bg: "black",
                    color: "white",
               },
          },
     },
     components: {
          Button: {
               variants: {
                    primary: {
                         bg: "red",
                         // boxShadow: "0 0 2px 2px #efdfde",
                    },
                    secondary: {
                         bg: "#686868c2",
                         color: "#9f9f9f",
                    },
               },
          },
     },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
     <React.StrictMode>
          <ChakraProvider theme={theme}>
               <Provider store={store}>
                    <App />
               </Provider>
          </ChakraProvider>
     </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
