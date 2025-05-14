
export default function Servicecard({image, service}){

    return(
        <>
            <div className="h-80 w-[300px] md:w-[400px] border-2 border-slate-400 rounded-xl flex flex-col items-center p-2 shrink-0 shadow-md shadow-sky-400
             hover:shadow-xl hover:cursor-pointer">
                <div className="w-full h-full flex flex-col">
                    <img src={image} alt=""  className="contain-content rounded-xl mb-2 h-1/2 w-full"/>
                    <div className="text-2xl font-semibold text-white mb-2">{service}</div>
                    <div className="text-slate-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, molestiae.</div>
                </div>
            </div>
        </>
    );
}