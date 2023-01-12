import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Forgot from "./Pages/Forgot";
import Signup from "./Pages/Signup";
import Links from "./Pages/Links";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<Signup />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="/:shortId" element={<Links />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
