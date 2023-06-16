import React from "react";
import "./aboutpage.css";
import "../assets/css/common-style.css";
import HeaderPage from "../header/headerpage";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";
import myimage from "../assets/aakib_new.jpg";
import cricketimg from "../assets/cricket.jpeg";

function AboutPage() {
    const navigate = useNavigate();
    return (
        <>
            <HeaderPage />
            <div className="wrapper">
                <div className="about">
                    <div className="anim">
                        <div class="slider">
                            <div class="slider-text1">Graphics Designer</div>
                            <div class="slider-text2">Web Designer</div>
                            <div class="slider-text3">UI UX Designer</div>
                            <div class="slider-text4">React Developer</div>
                        </div>
                    </div>
                    <h1 className="title">AAKIB MANSURI</h1>
                    <h3>Based in Ahmedabad, India</h3>
                    <div className="image">
                        <div>
                            <img src={myimage} />
                        </div>
                    </div>
                    <p className="bio">
                        I design and build websites that convert users and drive business growth. Helping entrepreneurs and businesses build a presence in the digital world. Through creative, well-built, and user-friendly websites that will
                        get them one step closer to their goals.
                    </p>
                    <button type="button" className="port-btn" onClick={() => navigate("/resume")}>
                        View CV
                    </button>
                    <h1 className="h-hobbies">Hobbies</h1>
                    <div className="hobbies-card-details">
                        <div className="travel-card">
                            <div className="heading-card">
                                <h2 className="hobbies-headings">Travel</h2>
                            </div>
                        </div>
                        <div className="photo-card">
                            <div className="heading-card">
                                <h2 className="hobbies-headings">Photography</h2>
                            </div>
                        </div>
                        <div className="movies-card">
                            <div className="heading-card">
                                <h2 className="hobbies-headings">Movies</h2>
                            </div>
                        </div>
                        <div className="music-card">
                            <div className="heading-card">
                                <h2 className="hobbies-headings">Music</h2>
                            </div>
                        </div>
                        <div className="reading-card">
                            <div className="heading-card">
                                <h2 className="hobbies-headings">Reading</h2>
                            </div>
                        </div>
                        <div className="writing-card">
                            <div className="heading-card">
                                <h2 className="hobbies-headings">Writing</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AboutPage;
