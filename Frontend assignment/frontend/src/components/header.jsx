import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header(){

    return (
        <>
            <div className="w-full h-[7vh] bg-slate-800 flex items-center justify-between">
                {/* Brand Name */}
                <span className="text-2xl italic font-bold text-amber-200 px-5 hover:cursor-pointer">BrandVibe</span>

                <div className="items-center space-x-3 hidden md:flex">
                    <span className="text-white px-3 hover:cursor-pointer">Home</span>
                    <span className="text-white px-3 hover:cursor-pointer">Services</span>
                    <span className="text-white px-3 hover:cursor-pointer">About Us</span>
                    <span className="text-white px-3 hover:cursor-pointer">Contact Us</span>
                </div>

                <div className="md:hidden text-white text-2xl px-2">
                    <FontAwesomeIcon icon={faBars} />
                </div>

            </div>
        </>
    );
}