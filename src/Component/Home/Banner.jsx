import back from "../../../public/images/banner/banner_two.jpg"

const Banner = () => {
    return (
        <div className="w-full h-screen "  style={{
            backgroundImage: `url(${"https://i.ibb.co/qRHdCmf/banner-two.jpg"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition:"center"
        }}>
            <div>

            </div>
        </div>
    );
};

export default Banner;