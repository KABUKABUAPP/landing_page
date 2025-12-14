import { useState } from "react";
import { Check } from "lucide-react";

const tabs = [
  { id: "riders", label: "Riders" },
  { id: "drivers", label: "Drivers" },
  { id: "fleet-owners", label: "Fleet Owners" },
];

const tabContent = {
  riders: {
    title: "Convenience Right at Your Fingertips",
    description: "Getting from point A to B has never been easier. With the Kabukabu app, you can hail a ride in just a few taps, track your driver in real-time, and enjoy cashless payments wherever you are. And if you're part of one of our many eligible organizations, we've got exclusive deals at your fingertips.",
    features: [
      { title: "Low Rate Guarantee", description: "Riders have access to the most competitive rates on every ride." },
      { title: "Exclusive Discounts", description: "Get exclusive offers for loyalty, students, and deals on your travels with our wallet." },
      { title: "Safety First", description: "24/7 in-app customer and 24/7 support with ride details saved for every ride." }
    ],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070"
  },
  drivers: {
    title: "Drive on Your Terms",
    description: "Join thousands of drivers who have found flexibility and great earnings with Kabukabu. Set your own schedule, choose your rides, and enjoy competitive rates with lower commission.",
    features: [
      { title: "Flexible Hours", description: "Work when you want, as much as you want." },
      { title: "Lower Commission", description: "Keep more of what you earn with our competitive rates." },
      { title: "24/7 Support", description: "Our driver support team is always ready to help." }
    ],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070"
  },
  "fleet-owners": {
    title: "Grow Your Fleet Business",
    description: "Partner with Kabukabu to maximize your fleet's potential. Get access to more riders, better tools, and dedicated support to grow your transportation business.",
    features: [
      { title: "Fleet Dashboard", description: "Manage all your vehicles from one powerful dashboard." },
      { title: "Priority Support", description: "Dedicated account manager for your fleet." },
      { title: "Analytics", description: "Detailed insights to optimize your operations." }
    ],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070"
  }
};

const CommunityTabs = () => {
  const [activeTab, setActiveTab] = useState("riders");
  const content = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          We build a better community for all users
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-cream text-foreground hover:bg-cream/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {content.title}
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {content.description}
            </p>

            <div className="space-y-4">
              {content.features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div 
              className="aspect-[4/3] rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: `url('${content.image}')` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityTabs;
