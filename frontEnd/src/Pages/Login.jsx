import "../Styles/LoginAndSignup.css";
import { Link } from "react-router-dom";
import { instance } from "./Home";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const Login = async () => {
    try {
      await instance.get('/users/:id', {
        email: email,
        password: password,
      });
      toast("Successfully logged in")
    } catch (error) {
      toast(error.response.data.data);   
    }
  }

  return (
    <div className="loginContainer">
      <ToastContainer />
      <header>
        <br />
        <span className="boginooHerhen">Хэрхэн ажилладаг вэ?</span>
      </header>
      <main>
        <div className="loginBox">
          <Link to={"/"}>
            <img alt="yolo" src={require("../images/logo.png")} className="logo" />
          </Link>
          <p className="boginooP">Нэвтрэх</p>
          <div className="boxThree">
            <label htmlFor="email" className="labels">
              Цахим хаяг
            </label>
            <input
              type="text"
              name="email"
              className="inps"
              placeholder="name@mail.domain"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="boxThree">
            <label htmlFor="pass" className="labels">
              Нууц үг
            </label>
            <input
              type="password"
              name="pass"
              className="inps"
              placeholder="••••••••••"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="boxTwo">
            <div>
              <input type="checkbox" name="check" className="checkBox" />
              <label htmlFor="check" className="checkLabel">
                Намайг сана
              </label>
            </div>
            <Link to={"/forgot"} className="linkStyle">
              Нууц үгээ мартсан
            </Link>
          </div>
          <button onClick={Login} type="submit" className="clickGreen">
            Нэвтрэх
          </button>
          <Link to={"/signUp"} className="newUser">
            Шинэ хэрэглэгч бол энд дарна уу?
          </Link>
        </div>
      </main>
      <footer>
        <img src={require("../images/credit.png")} alt="" />
      </footer>
    </div>
  );
};

export default Login;
