import {
  LinedShowcaseHeader,
  LinedShowcaseHeaderData,
} from "./LinedShowcaseHeader";

export function LinedShowcase({
  items,
  className,
  image,
}: {
  items: LinedShowcaseHeaderData[];
  className?: string;
  image?: React.ReactNode;
}) {
  return (
    <div className="flex-row border-r border-white mr-[3.3svw]">
      {image}
      {items.map((item) => {
        return (
          <LinedShowcaseHeader
            title={item.title}
            tags={item.tags}
            description={item.description}
            image={item.image}
            className={item.className}
          />
        );
      })}
    </div>
  );
}
