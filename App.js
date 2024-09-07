import react from "react";
import {link} from 'react-router-dom'
import './App.css';

const App = () =>{
    return  (
        <div className="homepage">
        <header className ='header'>
        <h1 className="project-name">Krishi Sahayak</h1>
            <img className = 'logo' src ='path/to/your/logo.png' alt ='team logo' />
            </header>
        <section className="cards-container">
        <div className ='card'>
        <link to = '/HOW-IT-WORKS'>
        <h2>How it works</h2>
        <p>Click to learn how to check your plant's health.</p>
        </link>
        </div>

        <div className="card">
        <link to ="/news">
        <h2>Agricultural news</h2>
        <p>Get the latest updates on crops and farming </p>
        </link>
        </div>
        <div className="card">
        <link to = '/check-health'>
        <h2>Check your plant's health </h2>
        <p>Upload your crops image to get disease analysis.</p>
        </link>
        </div>
        </section>

        <section className="about-us">
        <h2>About Us </h2>
        <p>We are a team dedicated to helping farmers to monitor their plant </p>
            <ul>
                <li><img src = '/path/to/icon/icon1.png'alt = 'member2'/>member2</li>
            
            </ul>
        
        </section>

        <footer className="footer">
        <p>Connect with us</p>
        <a href ="https://meta.com"><img src ='/path/to/twitter.png' alt ='meta'/></a>
        <a href ="https://twitter.com"><img src ='/path/to/twitter.png' alt ='twitter'/></a>
        <a href ="https://instagram.com"><img src ='/path/to/instagram.png' alt ='instagram'/></a>
        </footer>
        </div>
        
    );      
        
}


//STEP 6 --- SETUP ROUTING  //
import { BrowserRouter as router, route, routes } from "react-router-dom";
import Home from '/Home';
import CheckHealth from'/CheckHealth';
import News from '/News'; //CEATE THIS PAGE SEPERATLY//
import HowItWorks from '/HowItWorks'; //CREATE THIS PAGE SEPERATLY//

const AppRouter = () => {
    return (
      <router>
        <routes>
          <route path="/" element={<Home />} />
          <route path="/check-health" element={<CheckHealth />} />
          <route path="/news" element={<News />} />
          <route path="/how-it-works" element={<HowItWorks />} />
        </routes>
      </router>
    );
  };