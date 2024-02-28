import Image from "next/image";
import feedback from "../../../public/images/banner/feedback.png"
import { ImArrowUpRight2 } from "react-icons/im";
const Feedback = () => {
    return (
        <div className="bg-grayadd">
            <div className="lg:flex py-16 lg:justify-center lg:items-center">
                <div className=" ">
                    <Image  src={feedback } alt="tips "/>
                </div>
                <div className="lg:w-[700px] ml-8">
                    <h4 className="text-3xl font-extrabold font-serif ">FINDING THE PERFECT TRAILS TO HIKE IS EASY WITH NEWSLETTER</h4> 
                    <p className="text-ashen text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut enim. ad minim veniam 
                        ...</p>
                    <div style={{ fontFamily: "Cormorant Garamond, serif" }} className="flex  pt-6 justify-between items-center">
                        <input type="text" placeholder="Name" className="focus:outline-none rounded text-lg pl-2 mr-3
    py-2 text-ashen font-light"/> 
                        <input type="text" placeholder="E-mail" className="focus:outline-none rounded text-lg pl-2 mr-3
    py-2 text-ashen font-light"/> 
                        <button className="bg-green-900 flex hover:opacity-50 justify-center rounded-lg items-center text-white text-lg w-40 h-10"><span className="">subscribe</span><span className="ml-2 "><ImArrowUpRight2 /></span></button>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Feedback;