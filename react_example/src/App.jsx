import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./styles/fonts.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import UserProfile from "./pages/UserProfile";
import TrainingPlans from "./pages/TrainingPlans";
import TrainingPlan from "./pages/TrainingPlan";

function App() {
  return (

    <Router>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/profile" element={<UserProfile/>} />
          <Route path="/profile/trainingplans" element={<TrainingPlans/>} />
          <Route path="/profile/trainingplans/training" element={<TrainingPlan/>} />
        </Routes>
      </main>

    </Router>

  );
};

export default App;
