import { cn } from "@/lib/utils";

type SplitDownloadSectionProps = {
  id?: string;
  size?: "regular" | "compact";
  density?: "normal" | "roomy";
  sectionClassName?: string;
  containerClassName?: string;
  cardClassName?: string;
};

const SplitDownloadSection = ({
  id = "download",
  size = "regular",
  density = "normal",
  sectionClassName,
  containerClassName,
  cardClassName,
}: SplitDownloadSectionProps) => {
  const imageClassName =
    size === "compact"
      ? "w-[220px] sm:w-[260px] md:w-[300px]"
      : "w-[260px] md:w-[300px]";
  const baseCardClassName = cn(
    "group bg-muted/40 rounded-2xl border overflow-hidden",
    cardClassName
  );
  const imageWrapperClassName = cn(
    "flex justify-center w-full transition-colors duration-200 group-hover:bg-primary group-focus-within:bg-primary group-hover:text-white group-focus-within:text-white",
    density === "roomy" ? "pt-6 pb-4" : "pt-5 sm:pt-6 pb-4"
  );
  const contentClassName = cn(
    density === "roomy" ? "p-6" : "p-5 sm:p-6"
  );

  return (
    <section
      id={id}
      className={cn("py-12 sm:py-16 lg:py-20 bg-background", sectionClassName)}
    >
      <div
        className={cn(
          "container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-6 sm:gap-10 items-end",
          containerClassName
        )}
      >
        <div className={baseCardClassName} tabIndex={0}>
          <div className={imageWrapperClassName}>
            <img
              src="/designScreens/assets/ride-with-us/phone_card_rider.png"
              alt="Rider app screenshot"
              className={imageClassName}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={contentClassName}>
            <div className="text-center">
              <h3 className="text-cardTitle font-semibold">
                Ride With Us
              </h3>
              <p className="text-body mt-1 text-muted-foreground">
                Get Kabukabu rider app and enjoy the riding experience.
              </p>
            </div>
            <div className="mt-6 flex justify-center gap-3">
              <img
                src="/designScreens/assets/ride-with-us/badge_app_store.png"
                alt="Download on App Store"
                className="h-10 w-auto"
              />
              <img
                src="/designScreens/assets/ride-with-us/badge_google_play.png"
                alt="Get it on Google Play"
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>

        <div className={baseCardClassName} tabIndex={0}>
          <div className={imageWrapperClassName}>
            <img
              src="/designScreens/assets/ride-with-us/phone_card_driver.png"
              alt="Driver app screenshot"
              className={imageClassName}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={contentClassName}>
            <div className="text-center">
              <h3 className="text-cardTitle font-semibold">
                Drive With Us
              </h3>
              <p className="text-body mt-1 text-muted-foreground">
                Drive and earn seamlessly using the Kabukabu driver app.
              </p>
            </div>
            <div className="mt-6 flex justify-center gap-3">
              <img
                src="/designScreens/assets/ride-with-us/badge_app_store.png"
                alt="Download on App Store"
                className="h-10 w-auto"
              />
              <img
                src="/designScreens/assets/ride-with-us/badge_google_play.png"
                alt="Get it on Google Play"
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitDownloadSection;
