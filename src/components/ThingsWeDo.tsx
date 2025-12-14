import { Car, Package, Calendar, Truck, ShoppingBag, Users } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Kabu Ride",
    description: "Get an easy, comfortable ride anytime, anywhere with a tap.",
    highlighted: true
  },
  {
    icon: Package,
    title: "Kabu Share",
    description: "Share rides with others and split the cost for easy commuting.",
    highlighted: false
  },
  {
    icon: Calendar,
    title: "Kabu Enter",
    description: "Schedule rides in advance for hassle-free, on-time pick-ups.",
    highlighted: false
  },
  {
    icon: Truck,
    title: "Kabu Move",
    description: "Easily move with Kabukabu an ideal vehicle for your relocation needs.",
    highlighted: false
  },
  {
    icon: ShoppingBag,
    title: "Kabu Shop",
    description: "Order deliveries while making orders with your new online merchants.",
    highlighted: false
  },
  {
    icon: Users,
    title: "Kabu Fleet",
    description: "For your own fleet, get and manage multiple vehicles or outsource the Kabukabu way with greater apps.",
    highlighted: false
  }
];

const ThingsWeDo = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          Things we do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <div 
              key={service.title}
              className={`p-6 rounded-xl border border-border hover:shadow-lg transition-all ${
                service.highlighted ? 'bg-primary/5 border-primary/20' : 'bg-card'
              }`}
            >
              <div className={`w-12 h-12 ${service.highlighted ? 'bg-primary' : 'bg-cream'} rounded-xl flex items-center justify-center mb-4`}>
                <service.icon className={`w-6 h-6 ${service.highlighted ? 'text-primary-foreground' : 'text-foreground'}`} />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThingsWeDo;
