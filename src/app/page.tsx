import Category from "./components/Category";
import Contact from "./components/Contact";
import EventCountdown from "./components/Event";
import FAQSection from "./components/FAQ";
import FeatureProduct from "./components/FeatureProduct";
import FeatureStore from "./components/FeatureStore";
import HeroSection from "./components/HeroSection";
import PartnerBrands from "./components/Partner";
import RelatedProducts from "./components/RelatedProducts";
import Testimonial from "./components/Testimonial";
export default function Home() {
  return (
    <>
     <HeroSection/>
     <Category/>
     <FeatureProduct/>
     <RelatedProducts/>
     <FeatureStore/>
     <PartnerBrands/>
     <EventCountdown/>
     <Testimonial/>
     <Contact/>
     <FAQSection/>
    </>
   
  );
}
