import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I book a ride with Kabukabu?",
    answer: "Simply download the Kabukabu app from the App Store or Google Play Store, create an account, enter your destination, and request a ride. A nearby driver will be matched with you in seconds.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept multiple payment methods including cash, debit/credit cards, and mobile money. You can add your preferred payment method in the app settings.",
  },
  {
    question: "How do I become a Kabukabu driver?",
    answer: "To become a driver, download the Kabukabu Driver app, complete the registration process, submit required documents, and pass the background check. Once approved, you can start accepting rides.",
  },
  {
    question: "Is Kabukabu available in my city?",
    answer: "Kabukabu is currently available in major cities across Nigeria. Check the app to see if we operate in your area. We're continuously expanding to new locations.",
  },
  {
    question: "How is the fare calculated?",
    answer: "Fares are calculated based on distance, time, and current demand. You'll always see the estimated fare before confirming your ride, so there are no surprises.",
  },
  {
    question: "What safety measures does Kabukabu have?",
    answer: "We prioritize safety with features like driver verification, real-time trip sharing, SOS button, and 24/7 customer support. All drivers undergo background checks before joining the platform.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Got questions? We've got answers.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
