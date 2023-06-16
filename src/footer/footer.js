import "./footer.css";
import { AiFillHeart } from "react-icons/ai";
import { Navigate } from "react-router-dom";

function Footer() {
  return (
    <div id="footer">
      <div className="wrapper">
        <div className="mini_contact">
          <div className="left_side">
            <h2>
              Let's work <br />
              together
            </h2>
          </div>
          <div className="right_side">
            <a href="/contact">Hire Me</a>
          </div>
        </div>
        <span>
          <p>
            Made in <AiFillHeart /> with Aakib
          </p>
          <p>&copy;2023 Aakib Mansuri, All right reserved</p>
        </span>
      </div>
    </div>
  );
}

export default Footer;
