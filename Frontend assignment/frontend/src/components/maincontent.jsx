import Reviewcard from "./utilities/Reviewcard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useRef } from "react";

export default function Maincontent(){

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="bg-slate-950 w-full min-h-screen flex flex-col items-center overflow-auto ">
                {/* Welcome section */}
                <div className="flex flex-col items-center my-6">
                    {/* Heading */}
                    <div className="md:text-4xl sm:text-3xl text-2xl my-3 font-semibold text-white text-shadow-amber-50">Welcome to <i className="text-amber-200">BrandVibe</i></div>

                    {/* Content */}
                    <div className="w-[75%] h-auto p-4 text-white text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Exercitationem dicta quia laboriosam quam ut animi temporibus? 
                        Porro doloremque repudiandae corporis. Nostrum itaque, nemo in,
                         soluta nihil dignissimos voluptatibus, neque culpa provident totam recusandae eos.
                    </div>
                </div>


                {/*Our Aim section*/}
                <div className="flex flex-col items-center mt-10">
                    {/* Heading */}
                    <div className="md:text-4xl sm:text-3xl text-2xl my-3 font-semibold text-white text-shadow-amber-50">Our Aim</div>

                    {/* Content */}
                    <div className="w-[75%] h-auto p-4 text-white text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Exercitationem dicta quia laboriosam quam ut animi temporibus? 
                        Porro doloremque repudiandae corporis. Nostrum itaque, nemo in,
                         soluta nihil dignissimos voluptatibus, neque culpa provident totam recusandae eos.
                    </div>
                    <div className=" text-slate-200">Check out our services <a href="/" className="text-sky-300 hover:underline">here</a></div>
                </div>


                {/* Testimonials section */}

                <div className="flex flex-col items-center my-10 w-[85%] p-3 pl-4">
                    {/* Heading */}
                    <div className="md:text-4xl sm:text-3xl text-2xl mb-3 font-semibold text-white text-shadow-amber-50">Reviews</div>

                    <div className="flex items-center h-auto w-[80%] p-4 gap-2 overflow-hidden">
      
                        {/* Chevron Left Button */}
                        <div
                            className="h-56 w-12 shrink-0 flex items-center justify-center rounded-md"
                            
                        >
                            <FontAwesomeIcon icon={faChevronLeft} className="text-white text-xl cursor-pointer" onClick={scrollLeft}/>
                        </div>

                        {/* Scrollable container */}
                        <div
                            ref={scrollRef}
                            className="flex overflow-x-auto gap-4 scroll-smooth scrollbar-hide w-fulll"
                        >
                            <Reviewcard />
                            <Reviewcard />
                            <Reviewcard />
                            <Reviewcard />
                            <Reviewcard />
                        </div>

                        {/* Right Scroll Button */}
                        <button
                            className="h-56 w-10 shrink-0 flex items-center justify-center "
                        >
                            <FontAwesomeIcon icon={faChevronRight} className="text-white text-xl cursor-pointer" 
                            onClick={scrollRight} />
                        </button>
                    </div>

                </div>
                
            </div>
        </>
    );
}