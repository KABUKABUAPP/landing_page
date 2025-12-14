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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ride With Us */}
          <div className="bg-cream rounded-2xl p-8">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="bg-white rounded-3xl shadow-lg p-3 w-40 flex-shrink-0">
                <div className="bg-gray-100 rounded-2xl aspect-[9/19] flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Rider App</span>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-bold text-foreground mb-2">Ride With Us</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get Kabukabu Rider App and enjoy the riding experience
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  <a href="#" className="inline-block">
                    <div className="bg-foreground text-background px-4 py-2 rounded-lg flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.523 2.098l-5.757 3.321a.5.5 0 0 0-.25.433v12.296a.5.5 0 0 0 .25.433l5.757 3.321a.5.5 0 0 0 .75-.433V2.531a.5.5 0 0 0-.75-.433z"/>
                        <path d="M11.266 18.148l-5.757-3.321a.5.5 0 0 1-.25-.433V2.098a.5.5 0 0 1 .75-.433l5.257 3.033v13.45z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-[8px] leading-none">GET IT ON</div>
                        <div className="text-sm font-semibold leading-none">Google Play</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="inline-block">
                    <div className="bg-foreground text-background px-4 py-2 rounded-lg flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83z"/>
                        <path d="M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-[8px] leading-none">Download on the</div>
                        <div className="text-sm font-semibold leading-none">App Store</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Drive With Us */}
          <div className="bg-cream rounded-2xl p-8">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="bg-white rounded-3xl shadow-lg p-3 w-40 flex-shrink-0">
                <div className="bg-gray-100 rounded-2xl aspect-[9/19] flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Driver App</span>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-bold text-foreground mb-2">Drive With Us</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Drive and earn seamlessly using the Kabukabu Driver App
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  <a href="#" className="inline-block">
                    <div className="bg-foreground text-background px-4 py-2 rounded-lg flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.523 2.098l-5.757 3.321a.5.5 0 0 0-.25.433v12.296a.5.5 0 0 0 .25.433l5.757 3.321a.5.5 0 0 0 .75-.433V2.531a.5.5 0 0 0-.75-.433z"/>
                        <path d="M11.266 18.148l-5.757-3.321a.5.5 0 0 1-.25-.433V2.098a.5.5 0 0 1 .75-.433l5.257 3.033v13.45z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-[8px] leading-none">GET IT ON</div>
                        <div className="text-sm font-semibold leading-none">Google Play</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="inline-block">
                    <div className="bg-foreground text-background px-4 py-2 rounded-lg flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83z"/>
                        <path d="M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-[8px] leading-none">Download on the</div>
                        <div className="text-sm font-semibold leading-none">App Store</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
