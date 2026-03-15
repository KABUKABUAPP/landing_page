type SupportCommunitySectionProps = {
  sectionClassName?: string;
};

const SupportCommunitySection = ({
  sectionClassName,
}: SupportCommunitySectionProps) => {
  return (
    <section className={sectionClassName}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-sectionTitle font-semibold text-[#161616] sm:text-[2rem]">
            More than an app, a community
          </h2>
          <p className="mt-5 text-body leading-[1.9] text-[#3d3d3d] sm:text-[1rem]">
            At Kabukabu, we believe in building more than just a ride-hailing
            platform - we&apos;re creating a vibrant community where riders and
            drivers come together with shared goals of convenience, safety, and
            mutual respect. Our platform fosters a sense of belonging by
            offering tailored rewards, open communication, and support for
            everyone. Whether you&apos;re a rider enjoying perks like student
            discounts or a driver benefiting from reduced commissions, Kabukabu
            ensures everyone is valued. Together, we&apos;re shaping a community
            that thrives on connection, trust, and the joy of every journey.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[1180px] overflow-hidden rounded-[2rem]">
          <img
            src="/designScreens/assets/about/about_person_car.png"
            alt="Rider using Kabukabu in a car"
            className="h-[280px] w-full object-cover sm:h-[420px] lg:h-[520px]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default SupportCommunitySection;
