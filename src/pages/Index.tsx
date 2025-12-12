import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyLoveUs from "@/components/WhyLoveUs";
import CommunityTabs from "@/components/CommunityTabs";
import ThingsWeDo from "@/components/ThingsWeDo";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kabukabu - Your Premium Ride-Hailing Experience</title>
        <meta 
          name="description" 
          content="Discover the future of transportation with Kabukabu. Premium ride-hailing service offering safe, reliable, and comfortable rides." 
        />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <WhyLoveUs />
          <CommunityTabs />
          <ThingsWeDo />
          <CommunitySection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
