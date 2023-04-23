import "./App.css";
import { Routes , Route } from "react-router-dom";


import Header from "./HeaderComponent/Header";
import Nav from "./NavComponent/Nav";
import Banner from "./BannerComponent/Banner";
import Main from "./MainComponent/Main";
import About from "./AboutComponent/About";
import Contact from "./ContantComponent/Contact";
import Service from "./ServiceComponent/Service";
import Register from "./RegisterComponent/Register";
import Login from "./LoginComponent/Login";
import Footer from "./FooterComponent/Footer";

function App() {
  return (<div>
    <Header/>
    <Nav/>
    <Banner/>
    <Main/>
    <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    <Footer/>

  </div>);
    
}

export default App;