import outdoor5 from "../../../public/images/logo/outdoor5.png"
import travel from "../../../public/images/logo/travel.png"
import outdoor2 from "../../../public/images/logo/outdoor2.png"
import magazine from "../../../public/images/logo/magazine.png"
import mountain from "../../../public/images/logo/mountain.png"
import Image from "next/image"

const Logo = () => {
    return (
        <div className="container mx-auto my-10">
            <div className="flex justify-between items-center mx-8">
                <div className="hover:opacity-45 cursor-pointer">
                <Image src={outdoor5 }  alt="logo"/>
                </div>
                               <div className="hover:opacity-45 cursor-pointer">

                <Image src={travel }  alt="logo"/>
                </div>
                                <div className="hover:opacity-45 cursor-pointer">

                <Image src={outdoor2 }  alt="logo"/>
                </div>
                                <div className="hover:opacity-45 cursor-pointer">

                <Image src={magazine}  alt="logo"/>
                </div>
                                <div className="hover:opacity-45 cursor-pointer">

                <Image src={mountain }  alt="logo"/>
                </div>
                
            </div>
            
        </div>
    );
};

export default Logo;