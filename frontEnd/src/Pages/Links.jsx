import "../Styles/Home.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Links = () => {
  const params = useParams();
  const instance = axios.create({
    baseURL: "http://localhost:1000",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const getData = async () => {
    const res = await instance.get(`/links/${params.shortId}`);
    console.log(res);
    window.location.replace(res.data.data.url);
  };
  useEffect(() => {
    getData();
  }, []);
  return <div></div>;
};

export default Links;
