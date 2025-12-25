import { Button } from "@/components/ui/button";
import { DollarSign, Calendar, Shield } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Earnings",
    description: "Earn great income with flexible payment options and bonuses.",
  },
  {
    icon: Calendar,
    title: "Flexible Schedule",
    description: "Work when you want. You're in control of your own schedule.",
  },
  {
    icon: Shield,
    title: "Driver Support",
    description: "24/7 support and insurance coverage for peace of mind.",
  },
];

const DriveWithUs = () => {
  return (
    <section id="drive" className="py-12 sm:py-16 lg:py-28 bg-header">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Drive with Kabukabu
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-8">
              Join our community of professional drivers and start earning on your own terms. 
              We provide the platform, you bring your skills.
            </p>
            
            <div className="space-y-6 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base sm:text-lg mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/70">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 sm:px-10 py-5 sm:py-6 text-sm sm:text-lg rounded-lg"
            >
              Become a Driver
            </Button>
          </div>
          
          {/* Image placeholder */}
          <div className="relative">
            <div 
              className="aspect-[4/3] rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070')"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriveWithUs;
