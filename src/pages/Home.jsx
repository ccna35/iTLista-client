import Header from "../components/Header";
import SuccessPartners from "../sections/SuccessPartners";
import WhyChooseUs from "../sections/WhyChooseUs";
import WhyWeAreSpecial from "../sections/WhyWeAreSpecial";
import Services from "../sections/services/Services";

const Home = () => {
  return (
    <main>
      <Header />
      <Services />
      <WhyChooseUs />
      <WhyWeAreSpecial />
      <SuccessPartners />
    </main>
  );
};

export default Home;
