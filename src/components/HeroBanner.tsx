import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeroBannerProps = {
  backgroundImage: string;
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  overlayClassName?: string;
  minHeightClassName?: string;
  sectionClassName?: string;
  containerClassName?: string;
  contentClassName?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

const HeroBanner = ({
  backgroundImage,
  eyebrow,
  title,
  description,
  actions,
  overlayClassName = "bg-black/50",
  minHeightClassName = "min-h-[70vh] sm:min-h-screen",
  sectionClassName,
  containerClassName,
  contentClassName,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: HeroBannerProps) => {
  return (
    <section
      className={cn(
        "relative flex items-center",
        minHeightClassName,
        sectionClassName
      )}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={cn("absolute inset-0", overlayClassName)} />
      <div
        className={cn(
          "container mx-auto px-4 lg:px-8 relative z-10",
          containerClassName
        )}
      >
        <div
          className={cn(
            "pt-16 sm:pt-24 pb-12 sm:pb-16",
            contentClassName
          )}
        >
          {eyebrow ? (
            <p className={cn("text-white mb-2", eyebrowClassName)}>
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={cn(
              "font-extrabold leading-tight text-white",
              titleClassName
            )}
          >
            {title}
          </h1>
          {description ? (
            <p
              className={cn(
                "mt-4 text-white",
                descriptionClassName
              )}
            >
              {description}
            </p>
          ) : null}
          {actions ? <div className="mt-8">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
