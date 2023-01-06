import "./App.css";
import Header from "./Layout/Header";
import MainPage from "./Pages/MainPage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import Footer from "./Layout/Footer";
import Contact from "./Compoents/Contact";
import Experience from "./Compoents/Experience";


function App() {
  return (
    <div className="container-fluid p-0 bg-color">
      <Header />
      <MainPage/>
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<MainPage />}></Route>
          <Route exact path="/aboutme" element={<AboutMe />}></Route>
        </Routes>
      </BrowserRouter> */}
      <AboutMe/>
      <div className="row col-12 pl-5">
        <div className="col-4">
          <Contact/>
        </div>
        <div className="col-8">
          <Experience/>
        </div>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
