import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Header({pageset}){

    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavigation = (pageName) => {
        pageset(pageName);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    return (
        <>
            <div className="w-full h-[7vh] bg-slate-950 border-b-[1px] border-b-slate-400 flex items-center justify-between z-10 fixed">
                {/* Brand Name */}
                <span className="text-2xl italic font-bold text-amber-200 px-5 hover:cursor-pointer" onClick={() => handleNavigation("Home")}>
                    BrandVibe
                </span>

                <div className="items-center space-x-3 hidden mr-4 md:flex">
                    <span className="text-white px-3 hover:cursor-pointer underline-from-center"  onClick={() => handleNavigation("Home")}>Home</span>
                    <span className="text-white px-3 hover:cursor-pointer underline-from-center"  onClick={() => handleNavigation("Services")}>Services</span>
                    <span className="text-white px-3 hover:cursor-pointer underline-from-center"  onClick={() => handleNavigation("Aboutus")}>About Us</span>
                    <span className="text-white px-3 hover:cursor-pointer underline-from-center"  onClick={() => handleNavigation("ContactUs")}>Contact Us</span>
                </div>

                <div className="md:hidden text-white text-2xl px-2 mr-4">
                    <FontAwesomeIcon icon={faBars} onClick={()=> setMenuOpen(!menuOpen)}/>
                </div>
                
                {menuOpen && (
                    <div className="md:hidden bg-slate-900 text-white absolute top-[7vh]  right-0 w-auto flex flex-col items-center p-4 space-y-3 z-20">
                        <span className="hover:cursor-pointer" onClick={() => handleNavigation("Home")}>Home</span>
                        <span className="hover:cursor-pointer" onClick={() => handleNavigation("Services")}>Services</span>
                        <span className="hover:cursor-pointer" onClick={() => handleNavigation("Aboutus")}>About Us</span>
                        <span className="hover:cursor-pointer" onClick={() => handleNavigation("ContactUs")}>Contact Us</span>
                    </div>
                )}


            </div>
        </>
    );
}