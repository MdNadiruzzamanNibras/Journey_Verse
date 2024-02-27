import Image from 'next/image';
import camels from '../../../public/images/LatestPost/camels.jpg';
import istanbul from '../../../public/images/LatestPost/Istanbul.jpg';
import morocan from '../../../public/images/LatestPost/morocan_city.jpg';
import summer_holiday from '../../../public/images/LatestPost/summer_holiday.jpg';
import ten from '../../../public/images/LatestPost/ten_sunglasses.jpg';
import van from '../../../public/images/LatestPost/van.jpg';

const LatestPost = () => {
    const posts = [
        {   id:1,
            title: "Ten of our favourite sunglasses this season",
            image:ten
     },
        {   id:2,
            title: "Vintage camper van for a summer adventure",
            image:van
     },
        {   id:3,
            title: "Riding camels through the Sahara Desert",
            image:camels
     },
        {   id:4,
            title: "A tour through the old Moroccan city",
            image:morocan
     },
        {   id:5,
            title: "Top five perfumes for a summer holiday",
            image:summer_holiday
     },
        {   id:6,
            title: "The best breakfast spots in Istanbul, Turkey",
            image:istanbul
     },
        
 ]

    return (
        <div className="container mx-auto">
            <div >
                <h1 style={{fontFamily: "Cormorant Garamond, serif"}} className="text-5xl font-semibold my-16 text-center">Latest Posts
                </h1>

                <div className='grid grid-cols-3'>
                    {
                        posts.map(post =>
                            
                            <div key={post.id} className='mx-3 text-center'>
                                <Image src={post.image} alt="" />
                                <p className='text-lg my-4 text-headline'>TRAVEL</p>
                                <h3 className='text-3xl font-light'>Ten of our favourite sunglasses this season</h3>
                                <p className='text-sm text-byName mt-2 mb-10'>BY NICOLE CUNNINGHAM</p>

                        </div>    
                            )
                    }
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default LatestPost;