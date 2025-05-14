

export default function Aboutus(){

    return(
        <>
            <div className="bg-slate-950 w-full min-h-screen flex flex-col items-center overflow-auto pt-16 sm:pt-24 md:pt-32 mb-10">
                
                {/* Heading */}
                <div className="text-2xl font-bold sm:text-3xl md:text-5xl text-slate-50 mb-2">
                    Know About Us
                </div>

                {/* Content */}
                <div className="flex flex-wrap flex-col items-center text-white h-auto w-[80%] gap-[10px] p-4">
                    {/* Picture */}
                    <div className="h-auto w-[80%] sm:w-[300px] md:w-[400px] p-2 ">
                        <img src="./Services page images/Socialmediamarketing.jpeg" alt="" className="contain-content h-full w-full rounded-xl"/>
                    </div>

                    <div className="h-auto w-full p-2 ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Atque, assumenda dolorum voluptatibus dolorem accusamus totam sequi sed.
                        Voluptatibus perspiciatis est molestias aspernatur non, delectus ratione ea,
                        vitae dignissimos at suscipit recusandae facilis laborum? Nisi, exercitationem.
                        <br /> <br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         Illum molestiae maiores saepe minus mollitia amet tempora ipsa sit unde
                          explicabo impedit possimus quasi adipisci ratione, ex atque expedita voluptate veniam?
                         Et numquam, sed omnis doloribus rem cupiditate quidem saepe quibusdam voluptatum
                          culpa est quos iusto pariatur debitis voluptatem optio inventore.
                        <br /> <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, molestiae.
                         Error porro consequuntur praesentium suscipit tempore mollitia assumenda a, 
                         ut perspiciatis ratione voluptates minima ipsam possimus repellat quas 
                         quaerat eum fuga dignissimos. Fugiat, ipsa commodi.
                    </div>
                </div>
                
            </div>
        </>
    );
}