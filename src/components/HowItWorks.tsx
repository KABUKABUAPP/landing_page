const steps = [
  {
    number: "01",
    title: "Download the App",
    description: "Get the Kabukabu app from the App Store or Google Play Store.",
  },
  {
    number: "02",
    title: "Request a Ride",
    description: "Enter your destination and choose your preferred ride option.",
  },
  {
    number: "03",
    title: "Meet Your Driver",
    description: "Track your driver in real-time and meet them at the pickup location.",
  },
  {
    number: "04",
    title: "Enjoy Your Ride",
    description: "Sit back, relax, and enjoy a comfortable ride to your destination.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-28 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Getting a ride with Kabukabu is quick and easy. Follow these simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative"
            >
              <div className="text-center">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {step.description}
                </p>
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/20 -translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
