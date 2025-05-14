
export default function Servicecard(){

    return(
        <>
            <div className="h-auto w-[400px] border-2 border-slate-400 rounded-xl flex flex-col items-center p-2 shrink-0 shadow-md shadow-sky-400
             hover:shadow-xl hover:cursor-pointer">
                <div className="w-full h-full flex flex-col">
                    <img src="./Services page images/Socialmediamarketing.jpeg" alt=""  className="contain-content rounded-xl mb-2"/>
                    <div className="text-2xl font-semibold text-white mb-2">Social media marketing</div>
                    <div className="text-slate-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, molestiae.</div>
                </div>
            </div>
        </>
    );
}