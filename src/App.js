import "./index.css";
import Home from "./Pages/Home/Home";
import {useContext } from "react";
import ThemeContext from "../src/Pages/ThemeContext/ThemeContext";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./Pages/Sign/SignIn/SignIn";
import SignUp from "./Pages/Sign/SignUp/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
]);

function App() {
  const {Theme } = useContext(ThemeContext);

  return (
    <div className={`App-${Theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
