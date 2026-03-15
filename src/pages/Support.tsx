import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactSupportDialog from "@/components/ContactSupportDialog";
import SplitDownloadSection from "@/components/SplitDownloadSection";
import SupportCommunitySection from "@/components/SupportCommunitySection";
import SupportSearch from "@/components/SupportSearch";
import { Helmet } from "react-helmet-async";
import { Car, Mail, User, UserCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { icon: User, label: "Riders", href: "/support/riders" },
  { icon: Car, label: "Drivers", href: "/support/drivers" },
  { icon: Users, label: "Fleet Owners", href: "/support/fleet-owners" },
  { icon: UserCheck, label: "Sharp Drivers", href: "/support/sharp-drivers" },
];

const Support = () => {
  return (
    <>
      <Helmet>
        <title>Support - How can we help? | Kabukabu</title>
        <meta
          name="description"
          content="Get help and support for Kabukabu riders, drivers, fleet owners, and sharp drivers."
        />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-16 sm:pt-20">
          <section className="py-14 sm:py-20">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mx-auto max-w-[1080px] text-center">
                <h1 className="text-pageTitle font-semibold text-[#121212] sm:text-[3.5rem]">
                  How can we help?
                </h1>
                <SupportSearch className="mt-10 max-w-[700px]" />
              </div>

              <div className="mx-auto mt-10 grid max-w-[1180px] grid-cols-2 gap-4 lg:grid-cols-5">
                {categories.map((category) => (
                  <Link
                    key={category.label}
                    to={category.href}
                    className="flex min-h-[112px] flex-col items-start justify-between rounded-[1.75rem] border border-[#efefef] bg-[#fafafa] px-5 py-5 text-left transition-colors hover:border-primary/30 hover:bg-primary/5"
                  >
                    <category.icon className="h-6 w-6 text-[#161616]" />
                    <span className="text-bodyLg font-medium text-[#1a1a1a]">
                      {category.label}
                    </span>
                  </Link>
                ))}

                <ContactSupportDialog
                  trigger={
                    <button
                      type="button"
                      className="flex min-h-[112px] flex-col items-start justify-between rounded-[1.75rem] border border-[#efefef] bg-[#fafafa] px-5 py-5 text-left transition-colors hover:border-primary/30 hover:bg-primary/5"
                    >
                      <Mail className="h-6 w-6 text-[#161616]" />
                      <span className="text-bodyLg font-medium text-[#1a1a1a]">
                        Talk To Us
                      </span>
                    </button>
                  }
                />
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

export default Support;
