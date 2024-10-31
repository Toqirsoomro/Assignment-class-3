import Header from "../components/Header/header";
import CssStyle from "./about.module.css"
console.log(CssStyle, "CSS-Style")

const AboutPage = () => {
    return  <div><Header></Header><h1 className={(CssStyle.color)}> This is About Page</h1></div>
};
export default AboutPage;