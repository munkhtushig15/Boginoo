import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Forgot from "./Pages/Forgot";
import Signup from "./Pages/Signup";
import Links from "./Pages/Links";
import HomeLogged from "./Pages/HomeLogged";
import History from "./Pages/History";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homelogged" element={<HomeLogged />} />
          <Route path="login" element={<Login />} />
          <Route path="history" element={<History />} />  
          <Route path="signUp" element={<Signup />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="/:shortId" element={<Links />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
