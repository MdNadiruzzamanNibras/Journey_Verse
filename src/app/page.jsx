import Banner from "@/Component/Home/Banner";
import LatestBlog from "@/Component/Home/LatestBlog";
import LatestPost from "@/Component/Home/LatestPost";


const HomePage = () => {
  return (
    <div>
      <Banner />
      <LatestPost />
      <LatestBlog/>
    </div>
  );
};

export default HomePage;