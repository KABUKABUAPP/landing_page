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
    <section id="testimonials" className="py-12 sm:py-16 lg:py-28 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What People Say
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Hear from our satisfied riders and drivers about their Kabukabu experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 sm:w-10 sm:h-10 text-primary/20" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
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
