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
    <div className={cn("max-w-xl mx-auto", className)}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder={placeholder}
          className={cn(
            "w-full pl-12 pr-4 py-3 sm:py-4 border border-border rounded-lg text-body text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary",
            inputClassName
          )}
        />
      </div>
    </div>
  );
};

export default SupportSearch;
