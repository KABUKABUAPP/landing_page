import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SplitDownloadSection from "@/components/SplitDownloadSection";
import SupportBreadcrumb from "@/components/SupportBreadcrumb";
import SupportCommunitySection from "@/components/SupportCommunitySection";
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
  const categoryTitle = category
    ? category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, " ")
    : "Riders";

  return (
    <>
      <Helmet>
        <title>{categoryTitle} Support | Kabukabu</title>
        <meta
          name="description"
          content={`Get help and support for Kabukabu ${categoryTitle.toLowerCase()}.`}
        />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-16 sm:pt-20">
          <SupportBreadcrumb
            items={[
              { label: "Support", href: "/support" },
              { label: categoryTitle },
            ]}
          />

          <section className="py-14 sm:py-20">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-[1080px]">
                <h1 className="text-center text-pageTitle font-semibold text-[#121212] sm:text-[3rem]">
                  {categoryTitle} Support
                </h1>

                <SupportSearch className="mt-10 max-w-[700px]" />

                <div className="mt-12 space-y-4">
                  {faqItems.map((item, index) => (
                    <Link
                      key={`${item}-${index}`}
                      to={`/support/${category}/article`}
                      className="flex min-h-[72px] items-center justify-between rounded-[1.35rem] border border-[#efefef] bg-[#fafafa] px-5 py-4 transition-colors hover:border-primary/30 hover:bg-primary/5 sm:px-6"
                    >
                      <span className="text-bodyLg font-medium text-[#1a1a1a]">
                        {item}
                      </span>
                      <ArrowRight className="h-5 w-5 text-[#8d8d8d]" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <SupportCommunitySection sectionClassName="pb-4 pt-6 sm:pt-10" />

          <SplitDownloadSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SupportCategory;
