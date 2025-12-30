type CommunitySectionProps = {
  headingTag?: "h2" | "h3";
  headingClassName?: string;
  paragraphClassName?: string;
};

const CommunitySection = ({
  headingTag: HeadingTag = "h2",
  headingClassName = "text-xl sm:text-2xl md:text-3xl font-bold text-foreground",
  paragraphClassName = "mt-4 mx-auto max-w-3xl",
}: CommunitySectionProps) => (
  <>
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <HeadingTag className={headingClassName}>More than an app, a community</HeadingTag>
        <p className={paragraphClassName}>
          At Kabukabu, we believe in building more than just a ride-hailing platform &mdash; we're creating a vibrant
          community where riders and drivers come together with shared goals of convenience, safety, and mutual respect.
          Our platform fosters a sense of belonging by offering tailored rewards, open communication, and support for
          everyone. Whether you're a rider enjoying perks like student discounts or a driver benefiting from reduced
          commissions, Kabukabu ensures everyone is valued. Together, we're shaping a community that thrives on
          connection, trust, and the joy of every journey.
        </p>
      </div>
    </section>
    {/* Wide rider image */}
    <section className="py-2 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <img
          src="/designScreens/assets/ride-with-us/community_businesswoman_car.png"
          alt="Rider using Kabukabu in a car"
          className="mx-auto w-[75vw] h-[75vh] rounded-2xl object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  </>
);

export default CommunitySection;
