import Banner from "@/Component/Home/Banner";
import LatestBlog from "@/Component/Home/LatestBlog";
import LatestPost from "@/Component/Home/LatestPost";
import Logo from "@/Component/Home/Logo";
import TravelTips from "@/Component/Home/TravelTips";


const HomePage = () => {
  return (
    <div>
      
      <Banner />
      <Logo />
      <TravelTips/>
      <LatestPost />
      <LatestBlog/>
    </div>
  );
};

export default HomePage;