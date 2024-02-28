import Banner from "@/Component/Home/Banner";
import Feedback from "@/Component/Home/Feedback";
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
      <Feedback/>
      <LatestBlog/>
    </div>
  );
};

export default HomePage;