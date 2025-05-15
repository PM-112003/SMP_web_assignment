

export default function Aboutus(){

    return(
        <>
            <div className="bg-slate-950 w-full min-h-screen flex flex-col items-center overflow-auto pt-16 sm:pt-24 md:pt-32 mb-10">
                
                {/* Heading */}
                <div className="text-2xl font-bold sm:text-3xl md:text-5xl text-slate-50 mb-2">
                    Know About Us
                </div>

                {/* Content */}
                <div className="flex flex-wrap flex-col items-center text-white h-auto w-[80%] gap-[10px] p-4">
                    {/* Picture */}
                    <div className="h-auto w-[80%] sm:w-[300px] md:w-[400px] p-2 ">
                        <img src="./Services page images/About Us.png" alt="" className="contain-content h-full w-full rounded-xl"/>
                    </div>

                    <div className="h-auto w-full p-2 ">
                        At BrandVibe, we believe every brand has a story worth telling—
                        and we’re here to help you tell it louder, better, and smarter. 
                        Founded with the vision of transforming businesses into digital powerhouses, 
                        BrandVibe blends creativity with data-driven strategies to deliver impactful results.
                        <br /> <br />
                        We specialize in Social Media Marketing, SEO, Paid Advertisements, 
                        and Content Marketing, offering tailor-made solutions that align with your business goals. 
                        Whether you're a startup looking to build visibility or an established brand aiming to scale, 
                        we craft campaigns that connect with the right audience at the right time.
                        <br /> <br />
                        Our team is a passionate mix of marketers, designers, and strategists 
                        who thrive on innovation and results. At BrandVibe, your growth is our 
                        mission—and we don’t just market brands, we build their vibe.
                    </div>
                </div>
                
            </div>
        </>
    );
}