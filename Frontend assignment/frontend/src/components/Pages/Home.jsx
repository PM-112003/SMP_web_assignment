import Reviewcard from "../utilities/Reviewcard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useRef } from "react";

export default function Home(){


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
            <div className="bg-slate-950 w-full min-h-screen flex flex-col items-center overflow-auto pt-8 ">
                {/* Welcome section */}
                <div className="flex flex-col items-center my-6">
                    {/* Heading */}
                    <div className="md:text-4xl sm:text-3xl text-2xl my-3 font-bold text-white text-shadow-amber-50">Welcome to <i className="text-amber-200">BrandVibe</i></div>

                    {/* Content */}
                    <div className="w-[75%] h-auto p-4 text-white text-center">
                        Welcome to BrandVibe — where creativity meets conversion.
                        We help you grow your brand, boost online visibility, and drive results through powerful digital strategies.
                        From SEO and social media to performance marketing and content creation, our team is dedicated to taking your
                        business to the next level. Let’s turn your ideas into impactful digital experiences!
                    </div>
                </div>


                {/*Our Aim section*/}
                <div className="flex flex-col items-center mt-10">
                    {/* Heading */}
                    <div className="md:text-4xl sm:text-3xl text-2xl my-3 font-semibold text-white text-shadow-amber-50">Our Aim</div>

                    {/* Content */}
                    <div className="w-[75%] h-auto p-4 text-white text-center">
                        At BrandVibe, our mission is simple — empower businesses to thrive in the digital world. 
                        We aim to deliver measurable growth through innovative marketing solutions, data-driven strategies, 
                        and creative storytelling. Whether you're a startup or an established brand, we’re committed to amplifying your voice, 
                        increasing your reach, and ensuring your success in the ever-evolving online landscape. Your goals become our purpose.
                    </div>
                </div>


                {/* Testimonials section */}

                <div className="flex flex-col items-center my-10 sm:w-[85%] w-full p-3 pl-4">
                    {/* Heading */}
                    <div className="md:text-4xl sm:text-3xl text-2xl mb-3 font-semibold text-white text-shadow-amber-50">Reviews</div>

                    <div className="flex items-center h-auto sm:w-[80%] w-full p-4 gap-2 overflow-hidden">
      
                       
                        <div className="h-56 w-12 shrink-0 flex items-center justify-center rounded-md">
                            <FontAwesomeIcon icon={faChevronLeft} className="text-white text-xl cursor-pointer" onClick={scrollLeft}/>
                        </div>

                        {/* Scrollable container */}
                        <div ref={scrollRef} className="flex overflow-x-auto gap-4 scroll-smooth scrollbar-hide w-full">
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