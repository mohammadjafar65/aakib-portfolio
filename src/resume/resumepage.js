import "./resumepage.css";
// import "../assets/css/common-style.css";
import resume from "../assets/aakibresume.png";
import { ImCancelCircle } from "react-icons/im";
import { Navigate, useNavigate } from "react-router-dom";

function ResumePage() {
  const Navigate = useNavigate();
  const FileSaver = require("file-saver");
  const handleClick = () => {
    let url = resume;
    FileSaver.saveAs(url, "Aakib Resume.png");
  };
  return (
    <div className="rs-img">
      <img src={resume} className="resume-img" />
      <ImCancelCircle className="i-cancel" onClick={() => Navigate("/")} />
      <div>
        <button className="d-btn" onClick={handleClick}>
          Download
        </button>
      </div>
    </div>
  );
}

export default ResumePage;
