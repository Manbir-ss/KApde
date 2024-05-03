import Navbbar from "./navbar";
import "./global.css"
import Products from "./product"
import { Routes , Route } from "react-router-dom";
import Home from "./home";
import Faq from "./support/faq";
import ContactUs from "./support/contact";
import Terms_Conditions from "./components/terms_condition";
import Registration from "./components/register";
import Login from "./components/login";

function Main(){
    return(
        <>
        <Navbbar/>
        <Routes>
            <Route path="/product" element={<Products/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/terms_condition" element={<Terms_Conditions/>}/>
            <Route path="/register" element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
        </>
    )
}

export default Main;