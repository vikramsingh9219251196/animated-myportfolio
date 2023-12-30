import "./app.scss";
import About from "./components/About/About";
import Experiences from "./components/Experience/Experiences";
import Parallax from "./components/Parallax/Parallax";
import Tech from "./components/Tech";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor/Cursor";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
const App = () => {
  return(
 <div>
  <Cursor/>
<section style={{height:"100dvh"}}id="Homepage"><Navbar/><Hero/><Nav/></section>
<section id="About" style={{height:"100dvh"}}><Parallax type="about"/></section>
<section style={{marginBottom:"5rem",height:"100%"}}><About/></section>
{/* <section id ="Experience" style={{marginBottom:"5rem"}}><Experiences/></section> */}
<section id ="Tech" style={{marginBottom:"10rem"}}><Tech/></section>
<section id="Portfolio"style={{height:"100vh"}}><Parallax type="portfolio"/></section>
<Portfolio/>
<section id="Contact" style={{height:"100%",marginTop:"10rem"}}><Contact/></section>
<section id="Footer" style={{height:"100%",marginTop:"10rem"}}><Footer/></section>

</div>
  )};


export default App;
