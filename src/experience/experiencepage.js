import HeaderPage from "../header/headerpage";
import Footer from "../footer/footer"
import "./experiencepage.css";
import "../assets/css/common-style.css";

function ExperiencePage() {
  return (
    <>
      <HeaderPage />
      <div className="wrapper">
        <div className="experience-card">
          <h1 className="heading-exp">Work Experience</h1>
          <div className="main-card">
            <div className="exp-card">
              <div className="exp-details">
                <h4>2023</h4>
                <h2 className="h-ankit">ANKIT GRAPHICS PVT LTD</h2>
                <h4>Graphics Designer</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ExperiencePage;
