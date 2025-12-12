const CommunitySection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Community text */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            More than an app, a community
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            At Kabukabu, we believe in building more than just a ride-hailing platform — we're creating a vibrant community where riders and drivers come together with shared goals of convenience, safety, and mutual respect. Our platform fosters a sense of belonging by offering tailored rewards, open communication, and support for everyone. Whether you're a rider enjoying perks like student discounts or a driver benefiting from reduced commissions, Kabukabu ensures everyone is valued. Together, we're shaping a community that thrives on connection, trust, and the joy of every journey.
          </p>
        </div>

        {/* Community image */}
        <div className="mb-16">
          <div 
            className="aspect-[21/9] rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070')"
            }}
          />
        </div>

        {/* App download section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Ride With Us */}
          <div className="text-center">
            <div className="bg-cream rounded-2xl p-8 mb-6">
              <div className="bg-white rounded-3xl shadow-lg p-3 w-48 mx-auto">
                <div className="bg-gray-100 rounded-2xl aspect-[9/19] flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Rider App</span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Ride With Us</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Get Kabukabu Rider App and enjoy the riding experience
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="inline-block">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-12"
                />
              </a>
              <a href="#" className="inline-block">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on App Store" 
                  className="h-12"
                />
              </a>
            </div>
          </div>

          {/* Drive With Us */}
          <div className="text-center">
            <div className="bg-cream rounded-2xl p-8 mb-6">
              <div className="bg-white rounded-3xl shadow-lg p-3 w-48 mx-auto">
                <div className="bg-gray-100 rounded-2xl aspect-[9/19] flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Driver App</span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Drive With Us</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Drive and earn seamlessly using the Kabukabu Driver App
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="inline-block">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-12"
                />
              </a>
              <a href="#" className="inline-block">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on App Store" 
                  className="h-12"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
