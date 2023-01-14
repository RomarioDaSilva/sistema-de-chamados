import { Routes, Route } from "react-router-dom";

import SingIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

function RoutsApp() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
}

export default RoutsApp;
