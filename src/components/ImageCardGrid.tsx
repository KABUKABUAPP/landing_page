import { cn } from "@/lib/utils";

type ImageCardItem = {
  title: string;
  text: string;
  img: string;
  alt?: string;
};

type ImageCardGridProps = {
  title?: string;
  items: ImageCardItem[];
  sectionClassName?: string;
  containerClassName?: string;
  titleClassName?: string;
  gridClassName?: string;
  cardClassName?: string;
  imageClassName?: string;
};

const ImageCardGrid = ({
  title,
  items,
  sectionClassName,
  containerClassName,
  titleClassName,
  gridClassName,
  cardClassName,
  imageClassName,
}: ImageCardGridProps) => {
  return (
    <section className={cn("py-12 sm:py-16 bg-background", sectionClassName)}>
      <div className={cn("container mx-auto px-4 lg:px-8", containerClassName)}>
        {title ? (
          <h2
            className={cn(
              "text-sectionTitle font-bold text-foreground mb-8",
              titleClassName
            )}
          >
            {title}
          </h2>
        ) : null}
        <div className={cn("grid sm:grid-cols-2 lg:grid-cols-3 gap-4", gridClassName)}>
          {items.map((item) => (
            <div
              key={item.title}
              className={cn(
                "flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border bg-card",
                cardClassName
              )}
            >
              <div className="sm:mb-0">
                <h3 className="text-cardTitle font-semibold text-foreground">{item.title}</h3>
                <p className="text-body text-muted-foreground">{item.text}</p>
              </div>
              <img
                src={item.img}
                alt={item.alt ?? item.title}
                className={cn("w-16 sm:w-20 h-auto sm:mt-0", imageClassName)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCardGrid;
