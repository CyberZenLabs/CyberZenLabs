import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBarTop from "./components/NavBarTop";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import RootBox from "./components/RootBox";
import BurgerMenu from "./pages/BurgerMenu";
import Footer from "./components/Footer";
import Team from "./pages/Team";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootBox>
        <NavBarTop />
        <Routes>
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />
          <Route path="menu" element={<BurgerMenu />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="team" element={<Team />} />
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
