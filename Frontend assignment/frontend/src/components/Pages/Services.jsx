import Servicecard from "../utilities/Servicecard";

export default function Services(){

    return(
        <>
            <div className="bg-slate-950 w-full min-h-screen flex flex-col items-center overflow-auto pt-16 mb-10">
                
                {/* Heading */}
                <div className="text-2xl font-bold sm:text-3xl md:text-5xl text-slate-50 mb-10">
                    Our Services
                </div>
                
                {/* Services cards */}
                <div className="flex flex-wrap items-center justify-center w-[60%] gap-10 h-auto mb-10">
                    <Servicecard></Servicecard>
                    <Servicecard></Servicecard>
                    <Servicecard></Servicecard>
                    <Servicecard></Servicecard>
                </div>
            </div>
        </>
    );
}