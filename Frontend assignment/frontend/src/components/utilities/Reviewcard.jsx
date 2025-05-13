import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Reviewcard(){

    return(
        <>
            <div className="w-60 h-auto shrink-0 p-3 border-2 mx-5 my-2 border-white flex flex-col items-start rounded-sm rounded-tr-4xl">
                {/* Icon */}
                <FontAwesomeIcon icon={faQuoteLeft} className="text-gray-400 text-2xl mb-2 " />

                {/* Review content */}
                <p className="text-sm mb-2 text-slate-300">
                This product is amazing! Totally exceeded my expectations and the support was great
                . Necessitatibus in quasi veritatis nesciunt aperiam nemo.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dignissimos animi earum.
                </p>

                {/* Reviewer name */}
                <p className="text-xs text-slate-500 flex justify-between w-full">
                    <span>— John Doe</span>
                    <FontAwesomeIcon icon={faXTwitter} className="text-slate-200 text-2xl" />
                </p>
            </div>
        </>
    );
}