import "./App.css";
import { Box } from "@mui/material";
import Login from "./components/Login";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
