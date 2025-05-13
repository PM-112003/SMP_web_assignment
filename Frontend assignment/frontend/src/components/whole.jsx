import Header from "./header";
import Maincontent from "./maincontent";

export default function Whole(){
    return (
        <>
            <div className="w-screen bg-slate-950">
                <Header></Header>
                <Maincontent></Maincontent>
            </div>
        </>
    );
}