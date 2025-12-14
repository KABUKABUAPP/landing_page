import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-cream overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="pt-20 lg:pt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 animate-fade-in">
              Your Premium<br />Ride-Hailing<br />Experience!
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
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

          {/* Right side - Image with map and phone mockup */}
          <div className="relative hidden lg:block">
            {/* Main image with map/car */}
            <div className="relative">
              <div 
                className="aspect-[4/3] rounded-2xl bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070')"
                }}
              />
              {/* Phone mockup overlay */}
              <div className="absolute -bottom-8 -left-8 w-48">
                <div className="bg-white rounded-3xl shadow-2xl p-2 border border-border">
                  <div className="bg-cream rounded-2xl aspect-[9/19] flex flex-col items-center justify-center p-3">
                    <div className="w-full space-y-2">
                      <div className="bg-white rounded-lg p-2 shadow-sm">
                        <div className="text-[10px] font-medium text-foreground">Current location</div>
                        <div className="text-[8px] text-muted-foreground flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          Lekki Phase 1
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-2 shadow-sm">
                        <div className="text-[10px] font-medium text-foreground">Where to?</div>
                        <div className="text-[8px] text-muted-foreground flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          Victoria Island
                        </div>
                      </div>
                      <div className="bg-primary rounded-lg p-2 text-center">
                        <span className="text-[10px] font-semibold text-primary-foreground">Book Ride</span>
                      </div>
                    </div>
                  </div>
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
