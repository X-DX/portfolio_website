import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Companies from './Components/Companies';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='p-[20px]'>
      
      {/* Nav Bar */}
      <NavBar/>

      {/* Intro */}
      <Home/>

      {/* About Me */}
      <AboutMe/>

      {/* Skills */}
      <Skills/>

      {/* Protfolio */}
      <Portfolio/>

      {/* Companies */}
      <Companies />

      {/* Contact Us */}
      <ContactUs/>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;
