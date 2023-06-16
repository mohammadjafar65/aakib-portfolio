import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import AboutPage from "./about/aboutpage";
import "./App.css";
import WorkPage from "./work/workpage";
import EducationPage from "./education/educationpage";
import SkillPage from "./skill/skillpage";
import ContactPage from "./contact/contactpage";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import ResumePage from "./resume/resumepage";
import ExperiencePage from "./experience/experiencepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutPage />}></Route>
          <Route path="/experience" element={<ExperiencePage />}></Route>
          <Route path="/work" element={<WorkPage />}></Route>
          <Route path="/education" element={<EducationPage />}></Route>
          <Route path="/skill" element={<SkillPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/resume" element={<ResumePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
