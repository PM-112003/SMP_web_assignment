

export default function ContactUs(){

    return(

        <>
            <div className="bg-slate-950 w-full min-h-screen flex flex-col items-center overflow-auto pt-16 sm:pt-24 md:pt-32 mb-10">
                
                {/* Heading yahan pe*/}
                <div className="text-2xl font-bold sm:text-3xl md:text-5xl text-slate-50 mb-5">
                    Contact Us
                </div>
                
                {/* Contact Form here */}
                <form className="w-[80%] max-w-2xl bg-slate-900 p-8 rounded-2xl shadow-2xl shadow-sky-200 space-y-6 my-10">
                    <div className="flex flex-col">
                        <label className="text-slate-200 font-medium mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-3 rounded-md bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-slate-200 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="p-3 rounded-md bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-slate-200 font-medium mb-1">Subject</label>
                        <input
                            type="text"
                            placeholder="Subject of your message"
                            className="p-3 rounded-md bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-slate-200 font-medium mb-1">Message</label>
                        <textarea
                            rows="5"
                            placeholder="Message here please"
                            className="p-3 rounded-md bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 w-full"
                    >
                        Send Message
                    </button>
                </form>

            </div>
        </>
    );
}