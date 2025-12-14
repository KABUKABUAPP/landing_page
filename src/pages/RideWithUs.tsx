import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";
import { Helmet } from "react-helmet-async";
import { MapPin, Shield, DollarSign, Users, Clock, Car, Package, Calendar, Truck, ShoppingBag } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Reliable Service Across Lagos",
    description: "From the heart of the city to the outskirts, Kabukabu ensures you have access to reliable transportation wherever you are. Our extensive network of drivers is ready to get you to your destination efficiently and comfortably."
  },
  {
    icon: DollarSign,
    title: "Affordable Rides for Everyone",
    description: "Enjoy competitive pricing and great value with every ride. Kabukabu's commitment to affordability means you can travel across Lagos without breaking the bank."
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Your safety is our priority. Kabukabu features real-time ride tracking, in-app safety tools, and a thorough driver verification process to ensure you feel secure throughout your journey."
  },
  {
    icon: Users,
    title: "Local Insights",
    description: "Our drivers know Lagos like the back of their hand. Whether you need tips on the best local spots or the fastest route to your destination, Kabukabu drivers are knowledgeable and ready to help."
  }
];

const services = [
  { icon: Car, title: "Kabu Ride", description: "Get an easy, comfortable ride anytime, anywhere with a tap.", highlighted: true },
  { icon: Package, title: "Kabu Share", description: "Share rides with others and split the cost for easy commuting." },
  { icon: Calendar, title: "Kabu Enter", description: "Schedule rides in advance for hassle-free, on-time pick-ups." },
  { icon: Truck, title: "Kabu Move", description: "Easily move with Kabukabu an ideal vehicle for your relocation needs." },
  { icon: ShoppingBag, title: "Kabu Shop", description: "Order deliveries while making orders with your new online merchants." },
  { icon: Users, title: "Kabu Fleet", description: "For your own fleet, get and manage multiple vehicles." }
];

const RideWithUs = () => {
  return (
    <>
      <Helmet>
        <title>Kabukabu in Lagos - Your Ultimate Ride-Hailing Partner</title>
        <meta name="description" content="Experience reliable, affordable, and safe rides across Lagos with Kabukabu." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[50vh] flex items-center bg-header">
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
                As one of Nigeria's most vibrant and bustling cities, Lagos is a place where every journey matters. Whether you're navigating the busy streets of Victoria Island, exploring the cultural richness of Lekki, or heading to a business meeting in Ikeja, Kabukabu is here to make your rides smooth, affordable, and enjoyable.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                  {features.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
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
          <section className="py-20 bg-cream">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Our Services</h2>
              <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
                Kabukabu offers a range of services designed to meet the transportation needs of Lagos residents:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {services.map((service) => (
                  <div 
                    key={service.title}
                    className={`p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-all ${
                      service.highlighted ? 'border-primary/20' : ''
                    }`}
                  >
                    <div className={`w-12 h-12 ${service.highlighted ? 'bg-primary' : 'bg-cream'} rounded-xl flex items-center justify-center mb-4`}>
                      <service.icon className={`w-6 h-6 ${service.highlighted ? 'text-primary-foreground' : 'text-foreground'}`} />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                ))}
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
