import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import GetStarted from "./pages/Get started/GetStarted";
import SignUp from "./pages/Home/SignUp";
import CourseRegistration from "./pages/CourseRegistration";
import Booking from "./pages/Booking";

function App() {
  return (
    <BrowserRouter> 
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<GetStarted />} />
          <Route path="courseregistration" element={<CourseRegistration />} />
          <Route path="booking" element={<Booking />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
