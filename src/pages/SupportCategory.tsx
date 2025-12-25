import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";
import { Helmet } from "react-helmet-async";
import { Search, ArrowRight, ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const faqItems = [
  "How do i open a rider account?",
  "How do i open a rider account?",
  "How do i open a rider account?",
  "How do i open a rider account?",
  "How do i open a rider account?",
];

const SupportCategory = () => {
  const { category } = useParams();
  const categoryTitle = category ? category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ') : 'Riders';

  return (
    <>
      <Helmet>
        <title>{categoryTitle} Support | Kabukabu</title>
        <meta name="description" content={`Get help and support for Kabukabu ${categoryTitle.toLowerCase()}.`} />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-16 sm:pt-20">
          {/* Breadcrumb */}
          <div className="bg-cream py-3 sm:py-4">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="flex items-center gap-2 text-sm">
                <Link to="/support" className="text-primary hover:underline">Support</Link>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">{categoryTitle}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <section className="py-10 sm:py-12 bg-cream">
            <div className="container mx-auto px-4 lg:px-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
                {categoryTitle} Support
              </h1>
              
              {/* Search bar */}
              <div className="max-w-xl mx-auto mb-12">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input 
                    type="text"
                    placeholder="Type your question"
                    className="w-full pl-12 pr-4 py-3 sm:py-4 border border-border rounded-lg text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* FAQ List */}
              <div className="max-w-2xl mx-auto space-y-4">
                {faqItems.map((item, index) => (
                  <Link
                    key={index}
                    to={`/support/${category}/article`}
                    className="flex items-center justify-between p-4 sm:p-5 bg-background border border-border rounded-lg hover:shadow-md transition-all group"
                  >
                    <span className="text-foreground">{item}</span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
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

export default SupportCategory;
