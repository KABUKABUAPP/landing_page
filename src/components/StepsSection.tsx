import { type ReactNode } from "react";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type StepItem = {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
  link?: string;
};

type StepsSectionProps = {
  title: ReactNode;
  description?: ReactNode;
  steps: StepItem[];
  linkHref?: string;
  theme?: "dark" | "light";
  sectionClassName?: string;
  containerClassName?: string;
};

const StepsSection = ({
  title,
  description,
  steps,
  linkHref,
  theme = "dark",
  sectionClassName,
  containerClassName,
}: StepsSectionProps) => {
  const isDark = theme === "dark";

  return (
    <section
      className={cn(
        "py-12 sm:py-16 lg:py-20",
        isDark ? "bg-header" : "bg-background",
        sectionClassName
      )}
    >
      <div className={cn("container mx-auto px-4 lg:px-8", containerClassName)}>
        <h2
          className={cn(
            "text-sectionTitle font-bold mb-4",
            isDark ? "text-white" : "text-foreground"
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "mb-6 sm:mb-10 max-w-2xl text-body",
              isDark ? "text-white/70" : "text-muted-foreground"
            )}
          >
            {description}
          </p>
        ) : null}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className={cn(
                "rounded-xl p-5 sm:p-6",
                isDark ? "bg-white/5 border border-white/10" : "bg-card border border-border"
              )}
            >
              <div className="text-primary text-body font-medium mb-3">
                {step.step}
              </div>
              <div
                className={cn(
                  "w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mb-4",
                  isDark ? "bg-primary/20" : "bg-primary/10"
                )}
              >
                <step.icon
                  className={cn(
                    "w-4 h-4 sm:w-5 sm:h-5",
                    isDark ? "text-primary" : "text-primary"
                  )}
                />
              </div>
              <h3
                className={cn(
                  "font-semibold mb-1 text-body",
                  isDark ? "text-white" : "text-foreground"
                )}
              >
                {step.title}
              </h3>
              <p className={cn("text-caption", isDark ? "text-white/70" : "text-muted-foreground")}>
                {step.description}
              </p>
              {step.link && linkHref ? (
                <div className="mt-3">
                  <a
                    href={linkHref}
                    className={cn(
                      "text-caption inline-flex items-center gap-1",
                      isDark ? "text-primary" : "text-primary"
                    )}
                  >
                    {step.link} <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
