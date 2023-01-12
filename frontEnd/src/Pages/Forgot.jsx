import "../Styles/LoginAndSignup.css";
import { Link } from "react-router-dom";

const Forgot = () => {
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
          <p className="boginooP">Нууц үг сэргээх</p>
          <span className="boginooSpan">Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.</span>
          <div className="boxThree">
            <label htmlFor="email" className="labels">
              Цахим хаяг
            </label>
            <input
              type="text"
              name="email"
              className="inps"
              placeholder="name@mail.domain"
            />
          </div>
          <button type="submit" className="clickGreen">
            Илгээх
          </button>
        </div>
      </main>
      <footer>
        <img src={require("../images/credit.png")} alt="" />
      </footer>
    </div>
  );
};

export default Forgot;
