import HeaderPage from "../header/headerpage";
import Footer from "../footer/footer"
import "./skillpage.css";
import "../assets/css/common-style.css";

function SkillPage() {
    return (
        <>
            <HeaderPage />
            <div className="wrapper">
                <div className="main-skill">
                    <h1 className="heading-soft-skill"> Soft Skills</h1>
                    <div className="soft-skills-details">
                        <div className="soft-skill-details1">
                            <h2 className="uiux">UIUX Design</h2>
                        </div>
                        <div className="soft-skill-details2">
                            <h2 className="graphics">Graphics Design</h2>
                        </div>
                        <div className="soft-skill-details3">
                            <h2 className="web">Website Design</h2>
                        </div>
                        <div className="soft-skill-details1">
                            <h2 className="fig">Figma Design</h2>
                        </div>
                        <div className="soft-skill-details2">
                            <h2 className="anim">Animation</h2>
                        </div>
                        <div className="soft-skill-details3">
                            <h2 className="branding">Branding</h2>
                        </div>
                    </div>
                    <h1 className="heading-hard-skill"> Hard Skills</h1>
                    <div className="hard-skills-details">
                        <div className="hard-skills-details1">
                            <h2 className="ils">Illustrator</h2>
                        </div>
                        <div className="hard-skills-details2">
                            <h2 className="ps">Photoshop</h2>
                        </div>
                        <div className="hard-skills-details3">
                            <h2 className="cdr">CorelDraw</h2>
                        </div>
                        <div className="hard-skills-details4">
                            <h2 className="figma">Figma</h2>
                        </div>
                        <div className="hard-skills-details5">
                            <h2 className="animate">Animate CC</h2>
                        </div>
                        <div className="hard-skills-details3">
                            <h2 className="cdr">Visual Studio Code</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SkillPage;
