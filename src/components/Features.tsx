import { Shield, Clock, Star, MapPin } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safe and Secure",
    description: "Your safety is our top priority. All drivers are verified and vehicles are regularly inspected.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Need a ride at any time? We're available round the clock to serve you.",
  },
  {
    icon: Star,
    title: "Premium Service",
    description: "Enjoy a comfortable ride with our well-maintained vehicles and professional drivers.",
  },
  {
    icon: MapPin,
    title: "Wide Coverage",
    description: "We cover major cities and routes to ensure you can always find a ride.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Kabukabu?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the best ride-hailing service with features designed for your comfort and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-2xl bg-card hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
