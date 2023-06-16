import HeaderPage from "../header/headerpage";
import Footer from "../footer/footer"
import "./contactpage.css";
import "../assets/css/common-style.css";
import { useRef, useState } from "react";
import axios from "axios";
import { DBURL } from "../constants";
import { Toast } from "primereact/toast";
import { ImLocation } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImBehance } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

function ContactPage() {
    const toast = useRef(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [userdetails, setUserDetails] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
    });
    const handleChange = (event) => {
        setUserDetails({ ...userdetails, [event.target.name]: event.target.value });
    };
    const handleSubmit = () => {
        if (!userdetails.name || !userdetails.email) {
            return toast.current.show({
                severity: "error",
                detail: "Please Fill Your Details!",
                life: 3000,
            });
        }
        axios
            .post(DBURL, userdetails)
            .then((res) => {
                console.log(res.data);
                toast.current.show({
                    severity: "success",
                    detail: "Thank you for contact me!",
                    life: 3000,
                });

                setIsSubmitted(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <HeaderPage />
            <Toast ref={toast} />
            <div className="wrapper">
                <div className="contactinfo">
                    <h2 className="contact-heading">Contact Us</h2>
                    <div className="details-card">
                        <div className="leftside">
                            <div className="icons-headings">
                                <div className="add-icon">
                                    <ImLocation />
                                </div>
                                <div className="headings">
                                    <h3 className="add-heading">Address:</h3>
                                    <p className="add-p">4/512, Rangaravad, Dholka</p>
                                </div>
                            </div>
                            <div className="icons-headings">
                                <div className="ph-icon">
                                    <FaPhoneAlt />
                                </div>
                                <div className="headings">
                                    <h3 className="phone-heading">Phone:</h3>
                                    <p className="phone-p">+91 8849474761</p>
                                </div>
                            </div>
                            <div className="icons-headings">
                                <div className="mail-icon">
                                    <IoMdMail />
                                </div>
                                <div className="headings">
                                    <h3 className="mail-heading">Email:</h3>
                                    <p className="mail-p">mansuriaakib10@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="rightside">
                            <div className="contact-card">
                                <h2 className="h-card">Fill this form</h2>
                                <div className="inputbox">
                                    <input type="text" name="name" className="i-name" placeholder="Full Name" value={userdetails.name} onChange={handleChange} />
                                    <input type="text" name="email" className="i-email" placeholder="Email" value={userdetails.email} onChange={handleChange} />
                                    <input type="text" name="number" className="i-number" placeholder="Mobile Number" value={userdetails.number} onChange={handleChange} />
                                    <textarea type="text" name="message" className="i-message" placeholder="Your Message" value={userdetails.message} onChange={handleChange} />
                                    <button type="button" className="s-btn" onClick={handleSubmit} disabled={isSubmitted}>
                                        Submit
                                    </button>
                                </div>
                                <div className="border-icons">
                                    <div className="border">
                                        <div className="icons">
                                            <a href="https://twitter.com/home" target="_blank">
                                                <AiOutlineTwitter className="twittericon" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="border">
                                        <div className="icons">
                                            <a href="https://www.linkedin.com/feed/" target="_blank">
                                                <FaLinkedinIn className="linkedinicon" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="border">
                                        <div className="icons">
                                            <a href="https://www.behance.net/" target="_blank">
                                                <ImBehance className="behanceicon" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="border">
                                        <div className="icons">
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <FaFacebookF className="facebookicon" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="border">
                                        <div className="icons">
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <BsInstagram className="instagramicon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ContactPage;
