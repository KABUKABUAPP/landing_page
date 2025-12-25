import { Gift, Sparkles, Tag, Percent } from "lucide-react";

const features = [
  {
    icon: Gift,
    title: "Amazing Incentives",
    description: "Take advantage of exclusive discounts, exclusive deals for frequent riders, a prepaid plan for students. Whether you're an individual or fleet owner, Kabukabu makes your commutes even more rewarding.",
    position: "top-left"
  },
  {
    icon: Sparkles,
    title: "Classy Comfort",
    description: "Say Hello! Fun with app-optimized rides from a wide range of comfortable and beautiful vehicles: from sedans to SUVs and buses, Kabukabu's app makes it easy to handle safe and worry-free trips.",
    position: "top-right"
  },
  {
    icon: Tag,
    title: "Unbeatable Prices",
    description: "Enjoy low-fares and affordable rides with no surge pricing by using our flat fare rates across Lagos without breaking the bank.",
    position: "bottom-left"
  },
  {
    icon: Percent,
    title: "Reduced Commission for Drivers",
    description: "For drivers looking to maximize their earnings, we've reduced commissions to put more money in their pockets, motivating them to provide the best service possible.",
    position: "bottom-right"
  }
];

const WhyLoveUs = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-10 sm:mb-16">
          Here's Why You'll Love Us:
        </h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Feature cards grid with center phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
            {/* Left column */}
            <div className="space-y-6 sm:space-y-8">
              {features.slice(0, 2).map((feature) => (
                <div key={feature.title} className="flex flex-col">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-cream rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center phone mockup */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="bg-white rounded-3xl shadow-2xl p-3 w-52 xl:w-56 border border-border">
                <div className="bg-cream rounded-2xl aspect-[9/19] flex flex-col items-center justify-center p-4">
                  <div className="w-full space-y-3">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-xs font-medium text-foreground">Current location</div>
                      <div className="text-[10px] text-muted-foreground flex items-center gap-1">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Lekki Phase 1
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-xs font-medium text-foreground">Where to?</div>
                      <div className="text-[10px] text-muted-foreground flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Victoria Island
                      </div>
                    </div>
                    <div className="bg-primary rounded-lg p-2.5 text-center">
                      <span className="text-xs font-semibold text-primary-foreground">Book Ride</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-6 sm:space-y-8">
              {features.slice(2, 4).map((feature) => (
                <div key={feature.title} className="flex flex-col">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-cream rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLoveUs;
