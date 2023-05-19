import Footer from "../components/Footer";
import Header from "../components/Header";
import Customers from "../sections/Customers";
import SuccessPartners from "../sections/SuccessPartners";
import WhyChooseUs from "../sections/WhyChooseUs";
import WhyWeAreSpecial from "../sections/WhyWeAreSpecial/WhyWeAreSpecial";
import LatestArticles from "../sections/articles/LatestArticles";
import Services from "../sections/services/Services";

const Home = () => {
  return (
    <main>
      <Header />
      <Services />
      <WhyChooseUs />
      <WhyWeAreSpecial />
      <SuccessPartners />
      <LatestArticles />
      <Customers />
    </main>
  );
};

export default Home;
