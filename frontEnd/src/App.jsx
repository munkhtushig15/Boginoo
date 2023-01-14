import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Forgot from "./Pages/Forgot";
import Signup from "./Pages/Signup";
import Links from "./Pages/Links";
import HomeLogged from "./Pages/HomeLogged";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id" element={<HomeLogged />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/:shortId" element={<Links />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
