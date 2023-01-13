import "../Styles/Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:1000",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

const Home = () => {
  const [url, setUrl] = useState();
  const [data, setData] = useState();
  const postUrl = async () => {
    const res = await instance.post("/links", {
      url: url,
    });
    setData(res.data.data.shortId);
  };

  return (
    <div className="homeContainer">
      <header>
        <br />
        <div className="headerRight">
          <span className="boginooHerhen">Хэрхэн ажилладаг вэ?</span>
          <Link to={"/login"}>
            <button className="boginooButton">Нэвтрэх</button>
          </Link>
        </div>
      </header>

      <main>
        <img src={require("../images/boginooLogo.png")} alt="" />
        <div className="box">
          <input
            placeholder="https://www.web-huudas.mn"
            type="text"
            id="boginooInp"
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="boginooButton" onClick={postUrl}>
            Богиносгох
          </button>
        </div>
        <div className="urlAndShortUrl">
          <div>
            <label className="boginooLabel" htmlFor="">Өгөгдсөн холбоос:</label>
            <p className="labelP">{url}</p>
          </div>
          <div>
            <label className="boginooLabel" htmlFor="">Богино холбоос:</label>
            <p className="labelP">{`localhost:3000/${data}`}</p>
          </div>
        </div>
      </main>
      <footer>
        <img src={require("../images/credit.png")} alt="" />
      </footer>
    </div>
  );
};

export default Home;
