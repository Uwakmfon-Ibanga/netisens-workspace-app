import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import GetStarted from "./pages/Get started/GetStarted";
import Form from "./components/Form";
import SignUp from "./pages/Home/SignUp";

function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="signup"  element={<SignUp />}/>
        <Route path="signin"  element={<GetStarted />}/>
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
