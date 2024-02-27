const Footer = () => {
    return (
        <div className="bg-black text-white py-24">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 ">
                    <div className="col-span-3 flex flex-col lg:ml-24">
                        <h4 className="text-3xl mb-6">Social</h4>
                        <p className="cursor-pointer">FACEBOOK</p>
                        <p className="cursor-pointer">PINTEREST</p>
                        <p className="cursor-pointer">YOUTUBE</p>
                        <p className="cursor-pointer">INSTAGRAM</p>
                        <p className="cursor-pointer">TWITTER</p>
                    </div>
                    <div className="col-span-6 text-center">
                        <h1 className="text-4xl mb-6">Journey Verse</h1>
                        <p className="mb-6">The perfect place for telling & sharing all the stories that <br className="" /> truly matter.</p>
                        <input type="text" placeholder="subscribe" className="bg-slate-600 focus:outline-none pl-8 text-white lg:w-96 lg:h-12 text-xl"/>
                    </div>
                    <div className="col-span-3 flex flex-col lg:ml-20">
                        <h4 className="text-3xl mb-6">Posts</h4>  
                        <p className="cursor-pointer">BEAUTY</p>
                        <p className="cursor-pointer">ENTERTAINMENT
</p>
                        <p className="cursor-pointer">HOME DECOR
</p>
                        <p className="cursor-pointer">LIFESTYLE
</p>
                        <p className="cursor-pointer">TRAVEL
</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
