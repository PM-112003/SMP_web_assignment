import Header from "./header";
import Home from "./Pages/Home";
import Footer from "./footer";
import Services from "./Pages/Services";
import Aboutus from "./Pages/Aboutus";
import ContactUs from "./Pages/ContactUs";

export default function Whole(){
    return (
        <>
            <div className="w-screen bg-slate-950">
                <Header></Header>
                {/* <Home></Home> */}
                {/* <Services></Services> */}
                {/* <Aboutus></Aboutus> */}
                <ContactUs></ContactUs>
                <Footer></Footer>
            </div>
        </>
    );
}