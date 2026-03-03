import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";
import SupportBreadcrumb from "@/components/SupportBreadcrumb";
import SupportSearch from "@/components/SupportSearch";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
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
          <SupportBreadcrumb
            items={[
              { label: "Support", href: "/support" },
              { label: categoryTitle },
            ]}
          />

          {/* Content */}
          <section className="py-10 sm:py-12 bg-cream">
            <div className="container mx-auto px-4 lg:px-8">
              <h1 className="text-sectionTitle font-bold text-foreground text-center mb-8">
                {categoryTitle} Support
              </h1>
              
              {/* Search bar */}
              <SupportSearch className="mb-12" />

              {/* FAQ List */}
              <div className="max-w-2xl mx-auto space-y-4">
                {faqItems.map((item, index) => (
                  <Link
                    key={index}
                    to={`/support/${category}/article`}
                    className="flex items-center justify-between p-4 sm:p-5 bg-background border border-border rounded-lg hover:shadow-md transition-all group"
                  >
                    <span className="text-body text-foreground">{item}</span>
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
