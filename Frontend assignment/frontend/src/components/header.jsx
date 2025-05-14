import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header(){

    return (
        <>
            <div className="w-full h-[7vh] bg-slate-950 border-b-[1px] border-b-slate-400 flex items-center justify-between z-10 fixed">
                {/* Brand Name */}
                <span className="text-2xl italic font-bold text-amber-200 px-5 hover:cursor-pointer">BrandVibe</span>

                <div className="items-center space-x-3 hidden mr-4 md:flex">
                    <span className="text-white px-3 hover:cursor-pointer underline-from-center">Home</span>
                    <span className="text-white px-3 hover:cursor-pointer underline-from-center">Services</span>
                    <span className="text-white px-3 hover:cursor-pointer underline-from-center">About Us</span>
                    <span className="text-white px-3 hover:cursor-pointer underline-from-center">Contact Us</span>
                </div>

                <div className="md:hidden text-white text-2xl px-2 mr-4">
                    <FontAwesomeIcon icon={faBars} />
                </div>

            </div>
        </>
    );
}