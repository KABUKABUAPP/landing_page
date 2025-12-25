import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

const DownloadCTA = () => {
  return (
    <section id="download" className="py-12 sm:py-16 lg:py-28 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Ride?
          </h2>
          <p className="text-primary-foreground/80 text-base sm:text-lg mb-10">
            Download the Kabukabu app now and experience the future of transportation. 
            Available on iOS and Android.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-lg rounded-xl"
            >
              <Apple className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
              <div className="text-left">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="font-bold">App Store</div>
              </div>
            </Button>
            
            <Button 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-lg rounded-xl"
            >
              <Play className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
              <div className="text-left">
                <div className="text-xs opacity-80">Get it on</div>
                <div className="font-bold">Google Play</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
