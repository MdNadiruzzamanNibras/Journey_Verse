import sonor0n from '../../../public/images/latest-blog/sonoran.jpg';
import memories from '../../../public/images/latest-blog/memories.jpg';
import Image from 'next/image';

const LatestBlog = () => {
    const blogs = [
        {
            id: 1,
            title: "Various cactus species in Arizona’s Sonoran Desert",
        image: sonor0n,
            
        },
    
        {
            id: 2,
            title: "Documenting your memories while travelling",
        image: memories,
            
        },
    
    ]
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 mt-16'>
                    {
                        blogs.map(post =>
                            
                            <div style={{fontFamily: "Cormorant Garamond, serif"}} key={post.id} className='mx-3 text-center'>
                                <Image src={post.image} alt="" />
                                <p className='text-lg my-4 text-headline'>TRAVEL</p>
                                <h3 className='text-5xl font-medium'>Ten of our favourite sunglasses this season</h3>
                                <p className='lg:mx-28 my-7 text-slate-300'>K accum san pericula usu an, in pri dolorum denique. Cu movet debitis cum. Vix paulo evertitur cu, conceptam constituam te his, meis euismod</p>
                                <p className='text-sm text-byName mt-2 mb-10'>BY NICOLE CUNNINGHAM</p>

                        </div>    
                            )
                    }
                </div>
        </div>
    );
};

export default LatestBlog;