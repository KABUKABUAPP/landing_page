import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import DriveWithUs from "@/components/DriveWithUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import DownloadCTA from "@/components/DownloadCTA";
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
          <Features />
          <HowItWorks />
          <Services />
          <DriveWithUs />
          <Testimonials />
          <FAQ />
          <DownloadCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
