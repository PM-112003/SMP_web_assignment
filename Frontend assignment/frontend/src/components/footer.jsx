import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";


export default function Footer(){

    return(
        <>
            <footer className="w-full bg-slate-950 border-t-[1px] border-slate-400 text-white py-4">
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl italic text-amber-200 font-bold">BrandVibe</div>
                    <div className="flex flex-col items-center gap-y-2">
                        <div className="text-xl font-semibold text-white mt-5">Follow Us On</div>
                        <div className="flex gap-4 text-2xl text-slate-400 items-center">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-50">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-50">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-50">
                                <FontAwesomeIcon icon={faXTwitter} />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-50">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                        <div className="text-slate-300 flex items-center gap-5 w-auto">
                            <span className="hover:text-slate-50 hover:cursor-pointer">Privacy Policy</span>
                            <span className="hover:text-slate-50 hover:cursor-pointer">Terms and conditions</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}