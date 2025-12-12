import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
        </main>
      </div>
    </>
  );
};

export default Index;
