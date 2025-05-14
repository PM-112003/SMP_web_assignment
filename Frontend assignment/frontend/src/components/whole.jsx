import Header from "./header";
import Home from "./Pages/Home";
import Footer from "./footer";
import Services from "./Pages/Services";
import Aboutus from "./Pages/Aboutus";
import ContactUs from "./Pages/ContactUs";
import { useState } from "react";

export default function Whole(){
    const [page, setPage] = useState("Home");

    return (
        <>
            <div className="w-screen bg-slate-950 overflow-auto scrollbar-hide">
                <Header pageset={setPage}></Header>
                {page=="Home" && <Home></Home>}
                {page=="Services" && <Services></Services>}
                {page=="Aboutus" && <Aboutus></Aboutus>}
                {page=="ContactUs" && <ContactUs></ContactUs>}
                <Footer></Footer>
            </div>
        </>
    );
}