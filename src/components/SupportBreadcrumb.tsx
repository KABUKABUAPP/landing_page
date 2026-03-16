import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type SupportBreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

const SupportBreadcrumb = ({ items, className }: SupportBreadcrumbProps) => {
  return (
    <div className={cn("bg-[#f8f7f4] py-5 sm:py-6", className)}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 text-body">
          {items.map((item, index) => (
            <Fragment key={`${item.label}-${index}`}>
              {item.href ? (
                <Link to={item.href} className="font-medium text-primary hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-foreground">{item.label}</span>
              )}
              {index < items.length - 1 ? (
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportBreadcrumb;
