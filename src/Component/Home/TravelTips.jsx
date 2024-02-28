import Image from "next/image";
import first from "../../../public/images/tips/Rain.jpg";
import two from "../../../public/images/tips/jungle.jpg";
import { ImArrowUpRight2 } from "react-icons/im";


const TravelTips = () => {
    return (
        <div className="container mx-auto">
            <h1 style={{ fontFamily: "Cormorant Garamond, serif" }} className="text-center text-6xl font-semibold">TRAVEL ESSENTIALS TIPS</h1>
            
            <div className="lg:flex mt-16 lg:justify-center lg:items-center">
                <div className="lg:w-[600px] ">
                    <Image  src={two } alt="tips "/>
                </div>
                <div className="lg:w-[600px] ml-8">
                    <h4 className="text-3xl font-extrabold font-serif ">MOVING TROUGH: THE EVERYDAY URBAN JUNGLE OF YOUR CITY</h4> 
                    <p className="text-ashen text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut enim. ad minim veniam 
                        ...</p>
                    <button className="flex my-5 items-center"><span className="text-xl font-bold">Read More</span> <span className="ml-2"><ImArrowUpRight2 /></span></button>
                </div>
                <div>

                </div>
            </div>
            <div className="lg:flex mt-16 lg:justify-center lg:items-center">
                
                <div className="lg:w-[600px] ">
                    <h4 className="text-3xl font-extrabold font-serif ">MOVING TROUGH: THE EVERYDAY URBAN JUNGLE OF YOUR CITY</h4> 
                    <p className="text-ashen text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut enim. ad minim veniam 
                        ...</p>
                    <button className="flex my-5 items-center"><span className="text-xl font-bold">Read More</span> <span className="ml-2"><ImArrowUpRight2 /></span></button>
                </div>
                <div className="lg:w-[600px] ml-8">
                    <Image  src={first } alt="tips "/>
                </div>
                <div>

                </div>
            </div>
            
        </div>
    );
};

export default TravelTips;