import Header from "./header";
import Home from "./Pages/Home";
import Footer from "./footer";
import Services from "./Pages/Services";

export default function Whole(){
    return (
        <>
            <div className="w-screen bg-slate-950">
                <Header></Header>
                {/* <Home></Home> */}
                <Services></Services>
                <Footer></Footer>
            </div>
        </>
    );
}