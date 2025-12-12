import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Check } from "lucide-react";

const features = [
  {
    title: "Reliable Service Across Lagos",
    description: "From the heart of the city to the outskirts, Kabukabu ensures you have access to reliable transportation wherever you are. Our extensive network of drivers is ready to get you to your destination efficiently and comfortably."
  },
  {
    title: "Affordable Rides for Everyone",
    description: "Enjoy competitive pricing and great value with every ride. Kabukabu's commitment to affordability means you can travel across Lagos without breaking the bank."
  },
  {
    title: "Safety First",
    description: "Your safety is our priority. Kabukabu features real-time ride tracking, in-app safety tools, and a thorough driver verification process to ensure you feel secure throughout your journey."
  },
  {
    title: "Local Insights",
    description: "Our drivers know Lagos like the back of their hand. Whether you need tips on the best local spots or the fastest route to your destination, Kabukabu drivers are knowledgeable and ready to help."
  }
];

const RideWithUs = () => {
  return (
    <>
      <Helmet>
        <title>Ride with Kabukabu in Lagos - Your Ultimate Ride-Hailing Partner</title>
        <meta name="description" content="Experience reliable, affordable, and safe rides across Lagos with Kabukabu." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[60vh] flex items-center bg-header">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070')"
              }}
            />
            <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20 text-center">
              <p className="text-white/80 text-sm mb-2">Kabukabu in Lagos</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Your Ultimate Ride-Hailing Partner
              </h1>
            </div>
          </section>

          {/* Redefining Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Redefining the Ride-Hailing Experience
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-12 max-w-4xl">
                As one of Nigeria's most vibrant and bustling cities, Lagos is a place where every journey matters. Whether you're navigating the busy streets of Victoria Island, exploring the cultural richness of Leki, or heading to a business meeting in Ikeja, Kabukabu is here to make your rides smooth, affordable, and enjoyable.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  {features.map((feature) => (
                    <div key={feature.title}>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </div>
                <div 
                  className="aspect-[4/3] rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070')"
                  }}
                />
              </div>
            </div>
          </section>

          {/* Our Services */}
          <section className="py-16 bg-cream">
            <div className="container mx-auto px-4 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Kabukabu offers a range of services designed to meet the transportation needs of different groups:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">For Riders</span>
                <span className="px-6 py-2 bg-background text-foreground rounded-full text-sm font-medium border border-border">For Drivers</span>
                <span className="px-6 py-2 bg-background text-foreground rounded-full text-sm font-medium border border-border">For Fleet Owners</span>
                <span className="px-6 py-2 bg-background text-foreground rounded-full text-sm font-medium border border-border">For Sharp Drivers</span>
              </div>
            </div>
          </section>

          {/* Ride with Ease */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div 
                  className="aspect-[4/3] rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070')"
                  }}
                />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Ride with Ease</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    With just a few taps, you can book a comfortable, reliable, and affordable ride. Enjoy perks like discounts for students and frequent riders, all while traveling in style.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <CommunitySection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RideWithUs;
