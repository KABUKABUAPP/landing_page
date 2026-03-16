import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

type SupportSearchProps = {
  placeholder?: string;
  className?: string;
  inputClassName?: string;
};

const SupportSearch = ({
  placeholder = "Type your question",
  className,
  inputClassName,
}: SupportSearchProps) => {
  return (
    <div className={cn("mx-auto max-w-xl", className)}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder={placeholder}
          className={cn(
            "h-14 w-full rounded-2xl border border-[#efefef] bg-[#fafafa] pl-12 pr-4 text-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary sm:h-16",
            inputClassName
          )}
        />
      </div>
    </div>
  );
};

export default SupportSearch;
