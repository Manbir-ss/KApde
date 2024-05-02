import Navbbar from "./navbar";
import "./global.css"
import Products from "./product"
import { Routes , Route } from "react-router-dom";
import Home from "./home";
import Faq from "./support/faq";
import ContactUs from "./support/contact";

function Main(){
    return(
        <>
        <Navbbar/>
        <Routes>
            <Route path="/product" element={<Products/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
        </>
    )
}

export default Main;