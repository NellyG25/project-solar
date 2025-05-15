
import Image from "next/image";



const ThirdSection = () => {
    return ( <div className="
    flex
    p-10
    flex-col md:flex-row md:justify-evenly
   
    ">
        <div className="flex-col md:flex-row gap-6 md:px-10 flex">
            <div className="md:w-2/3 w-full">
                <video className="rounded-xl" autoPlay muted loop>
                    <source src="/content/hero3.mp4" type="video/mp4" />

                </video>

            </div>

            <div className="flex-col border p-4 rounded-xl md:w-2/5">
                <div className="text-3xl flex justify-center text-center
                md:text-6xl
                bg-gradient-to-l
                from-green-600
                to-green-600
                bg-clip-text
                font-bold
                text-transparent
                
                
                ">
                    Tailored Solar Solutions for Homes and Businesses in Nigeria



                </div>

                <div className="md:px-20 space-y-6 flex-col items-center justify-center">
                    <div className="text-medium pt-10 flex gap-4">
                        <Image
                        src="/images/icon-store.png"
                        alt="feature-1"
                        width={50}
                        height={50}
                    
                        />
                        <div className="flex flex-col gap-2">
                        Explore solar solutions tailored for Nigerian homes and businesses. 
                        Customize your setup to fit your needs and budget — powered by SolarNaija’s trusted expertise.

                        </div>


                    </div>

                    <div className="flex-col">
                        <div className="text-lg flex items-center gap-5" >
                            <Image
                            src="/images/icon-product.png"
                            alt="feature-1"
                            width={70} 
                            height={70}
                            />
                            <div>
                            Offer a wide range of solar products and variations, 
                            and manage your stock with ease through our simple inventory system.

                            </div>
                    </div>

                    </div>

                    <div className="flex-col">
                        <div className="text-lg flex items-center gap-5" >
                            <Image
                            src="/images/icon-analytics.png"
                            alt="feature-1"
                            width={70} 
                            height={70}
                            />
                            <div>
                            Get powerful insights into your solar sales
                             and customer needs with our built-in analytics tools.

                            </div>
                    </div>

                    </div>

                    <div className="flex-col">
                        <div className="text-lg flex items-center gap-5" >
                            <Image
                            src="/images/icon-shield.png"
                            alt="feature-1"
                            width={70} 
                            height={70}
                            />
                            <div>
                            Top-tier security to keep your solar business data and customer information safe at all times.

                            </div>
                    </div>

                    </div>






                </div>


            </div>

        </div>
    

    </div> );
}
 
export default ThirdSection;