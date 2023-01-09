import "../Styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="homeContainer">
            <header>
                <br />
                <div className="headerRight">
                    <span className="boginooHerhen">
                        Хэрхэн ажилладаг вэ?
                    </span>
                    <Link
                        to={"/login"}
                    >
                        <button className="boginooButton" >Нэвтрэх</button>
                    </Link>
                </div>
            </header>
            <main>
                <img src={require("../images/boginooLogo.png")} alt="" />
                <div className="box">
                    <input placeholder="https://www.web-huudas.mn" 
                           type="text"  
                           id="boginooInp" />
                    <button className="boginooButton">Богиносгох</button>
                </div>
            </main>
            <footer>
                <img src={require("../images/credit.png")} alt="" />
            </footer>
        </div>
    )
};

export default Home;