import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBarTop from "./components/NavBarTop";
import RootBox from "./components/RootBox";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import BurgerMenu from "./pages/BurgerMenu";
import AboutDev from "./pages/AboutDev";
import Team from "./pages/Team";
import GetInTouch from "./pages/GetInTouch";
import Services from "./pages/Services";
import Page_404 from "./pages/404";
import Projects from "./pages/Projects";
import KirdroDev from "./pages/KirdroDev";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootBox>
        <NavBarTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="aboutdev" element={<AboutDev />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<BurgerMenu />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="team" element={<Team />} />
          <Route path="getintouch" element={<GetInTouch />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="kirdro_dev" element={<KirdroDev />} />
          <Route path="*" element={<Page_404 />} />
        </Routes>
        <Footer />
      </RootBox>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
