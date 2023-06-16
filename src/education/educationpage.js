import HeaderPage from "../header/headerpage";
import Footer from "../footer/footer"
import "./educationpage.css";
import "../assets/css/common-style.css";

function EducationPage() {
    return (
        <>
            <HeaderPage />
            <div>
                <div className="wrapper">
                    <div className="card-details">
                        <h1 className="heading-edu">Education</h1>
                        <div className="edu-card-details">
                            <div className="card1">
                                <h4 className="year-i">2022-Pursuing</h4>
                                <h2 className="clg-i">ARENA ANIMATION (MANINAGAR)</h2>
                                <h4 className="degree-i">Pursuing Graphics Web Design & Development Course</h4>
                            </div>
                            <div className="card2">
                                <h4 className="year-i">2020-2023</h4>
                                <h2 className="clg-i">SARASPUR ARTS & COMMERCE COLLEGE</h2>
                                <h4 className="degree-i">Bachelor's Degree</h4>
                            </div>
                            <div className="card1">
                                <h4 className="year-i">2019-2020</h4>
                                <h2 className="clg-i">GUJARAT SECONDARY & HIGHER SECONDARY EDUCATION BOARD</h2>
                                <h4 className="degree-i">12th Commerce</h4>
                            </div>
                            <div className="card2">
                                <h4 className="year-i">2017-2018</h4>
                                <h2 className="clg-i">GUJARAT SECONDARY & HIGHER SECONDARY EDUCATION BOARD</h2>
                                <h4 className="degree-i">10th</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default EducationPage;
