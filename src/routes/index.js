import { Routes, Route } from "react-router-dom";

import SingIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";


function RoutsApp() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/register" element={<SignUp />} />


      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default RoutsApp;
