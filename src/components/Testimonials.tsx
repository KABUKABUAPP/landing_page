import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adaeze Okonkwo",
    role: "Regular Rider",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    rating: 5,
    text: "Kabukabu has made my daily commute so much easier. The drivers are professional and the app is very user-friendly.",
  },
  {
    name: "Emeka Nwachukwu",
    role: "Business Executive",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    rating: 5,
    text: "I use Kabukabu Premium for all my business trips. The service is excellent and always punctual.",
  },
  {
    name: "Funke Adeyemi",
    role: "Kabukabu Driver",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    rating: 5,
    text: "Driving with Kabukabu has given me the flexibility I need. The earnings are great and the support team is always helpful.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What People Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from our satisfied riders and drivers about their Kabukabu experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
