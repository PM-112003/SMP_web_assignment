import { useState } from "react";
import Servicecard from "../utilities/Servicecard";

export default function Services(){
    const [imageone, setImageone] = useState("./Services page images/Socialmediamarketing.jpeg");
    const [imagetwo, setImagetwo] = useState("./Services page images/SEO2.webp");
    const [imagethree, setImagethree] = useState("./Services page images/Paidads.webp");
    const [imagefour, setImagefour] = useState("./Services page images/Contentmarketing.webp");
    const [servicenames, setServicenames] = useState(["Social media marketing", "Search Engine Optimisation",
        "Paid adverstisment", "Content Marketing"]);

    const [descriptions] = useState([
        "Grow your brand presence and engagement across social platforms.",
        "Boost your visibility and rank higher on Google organically.",
        "Drive instant traffic and leads with targeted online ads.",
        "Attract and convert your audience through strategic content."
    ]);

    return(
        <>
            <div className="bg-slate-950 w-full min-h-screen flex flex-col items-center overflow-auto pt-16 mb-10">
                
                {/* Heading */}
                <div className="text-2xl font-bold sm:text-3xl md:text-5xl text-slate-50 mb-10">
                    Our Services
                </div>
                
                {/* Services cards */}
                <div className="flex flex-wrap items-center justify-center w-[60%] gap-10 h-auto mb-10">
                    <Servicecard image={imageone} service={servicenames[0]} description={descriptions[0]}></Servicecard>
                    <Servicecard image={imagetwo} service={servicenames[1]} description={descriptions[1]}></Servicecard>
                    <Servicecard image={imagethree} service={servicenames[2]} description={descriptions[2]}></Servicecard>
                    <Servicecard image={imagefour} service={servicenames[3]} description={descriptions[3]}></Servicecard>
                </div>
            </div>
        </>
    );
}