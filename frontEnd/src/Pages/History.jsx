import "../Styles/Home.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Past from "../components/Past";

const History = () => {
  const [link, setLink] = useState();

  const instance = axios.create({
    baseURL: "http://localhost:1000",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const getLinks = async () => {
    const res = await instance.get("/links");
    setLink(res.data.data);
  };

  useEffect(() => {
    getLinks();
  }, [link]);
  return (
    <div className="history">
      <h2>Түүх</h2>
      <div className="histories">
        {link &&
          link.map((url) => {
            return <Past key={url._id} url={url} />;
          })}
      </div>
    </div>
  );
};

export default History;
