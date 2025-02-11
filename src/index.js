import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthContextProvider } from "./context/AuthContext";
<<<<<<< HEAD

import { HashRouter } from "react-router-dom"; 
=======
import { HashRouter } from "react-router-dom";  // Import HashRouter
>>>>>>> 7777d8a (url changes)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
<<<<<<< HEAD
    <HashRouter>
       <App />
    </HashRouter>
=======
      <HashRouter>
        <App />
      </HashRouter>
>>>>>>> 7777d8a (url changes)
    </AuthContextProvider>
  </React.StrictMode>
);
