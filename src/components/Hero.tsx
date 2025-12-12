import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-cream overflow-hidden">
      {/* Left Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="pt-20 lg:pt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 animate-fade-in">
              Your Premium Ride-Hailing Experience!
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Discover the Future of Transportation with Kabukabu!
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base rounded-lg"
              >
                Get The App
              </Button>
            </div>
          </div>

          {/* Right side - Image with car and passengers */}
          <div className="relative hidden lg:block">
            <div 
              className="aspect-[4/3] rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070')"
              }}
            />
            {/* Phone mockup overlay - placeholder */}
            <div className="absolute -bottom-10 right-0 w-48 h-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-2">
                <div className="bg-gray-100 rounded-2xl aspect-[9/19] flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">App Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
