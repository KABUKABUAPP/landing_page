import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";
import { Helmet } from "react-helmet-async";
import { Lightbulb, Shield, Users, Heart, Quote, Car, Package, Calendar, Truck, ShoppingBag } from "lucide-react";

const principles = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technology to deliver smarter, faster, and more efficient transportation solutions."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Trust is at the heart of everything we do. We maintain transparency in our operations with all stakeholders."
  },
  {
    icon: Users,
    title: "Community",
    description: "We foster a sense of belonging and mutual respect among riders, drivers, and all users of our platform."
  },
  {
    icon: Heart,
    title: "Caring",
    description: "We care about the well-being of everyone we serve. Safety, comfort, and customer satisfaction come first."
  }
];

const testimonials = [
  {
    quote: "I've tried other platforms but Kabukabu is simply the best. As a regular commuter across Lagos, the reliability of finding a ride even during peak hours makes it my go-to choice.",
    name: "Ada",
    role: "Rider"
  },
  {
    quote: "As a female driver in a predominantly male industry, I was skeptical at first. But Kabukabu's safety features and the community support make me feel secure. I'm proud to be a driver.",
    name: "Funke",
    role: "Driver"
  }
];

const services = [
  { icon: Car, title: "Kabu Ride", highlighted: true },
  { icon: Package, title: "Kabu Share" },
  { icon: Calendar, title: "Kabu Enter" },
  { icon: Truck, title: "Kabu Move" },
  { icon: ShoppingBag, title: "Kabu Shop" },
  { icon: Users, title: "Kabu Fleet" }
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Kabukabu - Your Journey, Our Passion</title>
        <meta name="description" content="Learn about Kabukabu's mission to redefine the ride-hailing experience in Nigeria." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative py-32 flex items-center bg-header">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070')"
              }}
            />
            <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center pt-10">
              <p className="text-white/80 text-sm mb-2">About Kabukabu</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Your Journey, Our Passion
              </h1>
            </div>
          </section>

          {/* Redefining Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Redefining the Ride-Hailing Experience
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-12 max-w-4xl">
                At Kabukabu, we aren't simply creating a ride-hailing platform — we're building a new experience that redefines convenience, safety, and innovation for all Nigerians. Whether you're a rider looking for comfortable, affordable rides, or a driver who wants to earn more with flexibility, Kabukabu is designed to serve everyone with excellence.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div 
                  className="aspect-[4/3] rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070')"
                  }}
                />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Our <span className="text-primary">Mission</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our mission is to make transportation simple, accessible, and enjoyable for everyone. From modern vehicles with top-notch reliability to professional, vetted drivers, Kabukabu offers a seamless experience from the moment you book to the moment you arrive. Together, we're building solutions that redefine transportation across Nigeria.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    What Sets Us Apart
                  </h3>
                  <h4 className="font-semibold text-foreground mb-2">Driver-Centric Approach</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    At Kabukabu, our drivers aren't just contractors — they're partners in our journey. With lower commissions, flexible scheduling, and access to value-added services, we make sure our drivers thrive both personally and professionally.
                  </p>
                </div>
                <div 
                  className="aspect-[4/3] rounded-2xl bg-cover bg-center order-1 lg:order-2"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070')"
                  }}
                />
              </div>
            </div>
          </section>

          {/* Our Services */}
          <section className="py-16 bg-cream">
            <div className="container mx-auto px-4 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Kabukabu offers a range of services designed to meet the transportation needs of different groups:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">For Riders</span>
                <span className="px-6 py-2 bg-background text-foreground rounded-full text-sm font-medium border border-border">For Drivers</span>
                <span className="px-6 py-2 bg-background text-foreground rounded-full text-sm font-medium border border-border">For Fleet Owners</span>
                <span className="px-6 py-2 bg-background text-foreground rounded-full text-sm font-medium border border-border">For Sharp Drivers</span>
              </div>
            </div>
          </section>

          {/* Ride with Ease */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div 
                  className="aspect-[4/3] rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070')"
                  }}
                />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Ride with Ease</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    With just a few taps, you can book a comfortable, reliable, and affordable ride. Enjoy perks like discounts for students and frequent riders, all while traveling in style.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Guiding Principles */}
          <section className="py-20 bg-cream">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Guiding Principles</h2>
              <p className="text-muted-foreground mb-12 max-w-3xl">
                At Kabukabu, we believe our success begins with putting people first. Our guiding principles reflect our commitment to creating a ride-hailing platform where every rider and driver feels valued and supported. These principles are what makes Kabukabu more than just an app.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {principles.map((principle) => (
                  <div key={principle.title} className="bg-background rounded-xl p-6 border border-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <principle.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{principle.title}</h3>
                    <p className="text-sm text-muted-foreground">{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Vision */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div 
                  className="aspect-[4/3] rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070')"
                  }}
                />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Our <span className="text-primary">Vision</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We envision a future where transportation is seamless, accessible, and sustainable for every Nigerian. We aim to be the leading ride-hailing platform that truly understands the pulse of local communities while driving innovation and excellence in urban mobility.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our People */}
          <section className="py-20 bg-cream">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Our People</h2>
              
              <div className="space-y-12">
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center`}>
                    <div 
                      className={`aspect-[4/3] rounded-2xl bg-cover bg-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                      style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070')"
                      }}
                    />
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <Quote className="w-8 h-8 text-primary mb-4" />
                      <p className="text-muted-foreground leading-relaxed mb-4 italic">
                        "{testimonial.quote}"
                      </p>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <CommunitySection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
