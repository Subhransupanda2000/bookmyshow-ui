import React from "react";
import { Button, Navbar } from "reactstrap";
import MyNavbar from "./components/MyNavbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div>
      <MyNavbar />
      <AppRoutes />
    </div>
  );
}

export default App;
