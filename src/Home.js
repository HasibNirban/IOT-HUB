import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import RegisterPage from "./Components/Form";
import EditPage from "./Components/EditPage";
import App from './App';
const Home = () => {
  return (
  <Router>
    <Routes>
      <Route path="/Dashboard" element={<App />} />
      <Route path="/editpage/:deviceId" element={<EditPage />} />
      <Route path="/" element={<RegisterPage />} />
        </Routes>
  </Router>
  )
}

export default Home