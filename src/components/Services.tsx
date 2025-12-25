import { Car, Bike, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Car,
    title: "Kabukabu Ride",
    description: "Our standard ride option for comfortable city travel. Perfect for everyday commutes.",
    features: ["Air-conditioned vehicles", "Professional drivers", "Real-time tracking"],
  },
  {
    icon: Car,
    title: "Kabukabu Premium",
    description: "Luxury vehicles for special occasions or business travel. Experience first-class comfort.",
    features: ["Premium vehicles", "Executive drivers", "Complimentary water"],
  },
  {
    icon: Bike,
    title: "Kabukabu Dispatch",
    description: "Quick and reliable package delivery service. Send items across the city with ease.",
    features: ["Same-day delivery", "Package tracking", "Secure handling"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Choose from our range of services designed to meet your transportation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
