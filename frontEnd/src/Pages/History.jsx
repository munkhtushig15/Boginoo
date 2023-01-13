import "../Styles/Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Past from "../components/Past";

const History = () => {
  const [url, setUrl] = useState();
  const [data, setData] = useState();
  const [link, setLink] = useState();

  const instance = axios.create({
    baseURL: "http://localhost:1000",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const postUrl = async () => {
    const res = await instance.post("/links", {
      url: url,
    });
    setData(res.data.data.shortId);
  };
  const getLinks = async () => {
    const res = await instance.get("/links");
    setLink(res.data.data);
    console.log(res.data.data);
  };

  useEffect(() => {
    getLinks();
  }, []);
  return (
    <div className="homeContainer">
      <header>
        <br />
        <div className="headerRight">
          <span className="boginooHerhen">Хэрхэн ажилладаг вэ?</span>
          <Link to={"/history"} className="boginooLink">
            <span className="boginooUser">Dulguun</span>
            <img src={require("../images/icon-down.png")} alt="" />
          </Link>
        </div>
      </header>

      <main>
        <Link to={"/homelogged"}><img src={require("../images/boginooLogo.png")} alt="" /></Link>
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
        <div className="history">
          <h2>Түүх</h2>
          <div className="histories">
            {link &&
              link.map((url) => {
                return <Past url={url} />;
              })}
          </div>
        </div>
      </main>
      <footer>
        <img src={require("../images/credit.png")} alt="" />
      </footer>
    </div>
  );
};

export default History;
