import "../Styles/LoginAndSignup.css";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const instance = axios.create({
    baseURL: "http://localhost:1000",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const Post = async () => {
    try {
      const res = await instance.post("/users", {
        email: email,
        password: password,
      });
      console.log(res);
      toast("Successfully signed up");
    } catch (error) {
      toast(error.response.data.data);
    }
  };

  return (
    <div className="loginContainer">
      <header>
        <br />
        <span className="boginooHerhen">Хэрхэн ажилладаг вэ?</span>
      </header>
      <main>
        <div className="loginBox">
          <Link to={"/"}>
            <img src={require("../images/logo.png")} className="logo" />
          </Link>
          <p className="boginooP">Бүртгүүлэх</p>
          <div className="boxThree">
            <label htmlFor="email" className="labels">
              Цахим хаяг
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email"
              className="inps"
              placeholder="name@mail.domain"
            />
          </div>
          <div className="boxThree">
            <label htmlFor="pass" className="labels">
              Нууц үг
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="pass"
              className="inps"
              placeholder="••••••••••"
            />
          </div>
          <div className="boxThree">
            <label htmlFor="pass" className="labels">
              Нууц үгээ давтана уу?
            </label>
            <input
              type="password"
              name="pass"
              className="inps"
              placeholder="••••••••••"
            />
          </div>
          <button onClick={Post} type="submit" className="clickGreen">
            Бүртгүүлэх
          </button>
        </div>
      </main>
      <footer>
        <img src={require("../images/credit.png")} alt="" />
      </footer>
      <ToastContainer />
    </div>
  );
};

export default Signup;
