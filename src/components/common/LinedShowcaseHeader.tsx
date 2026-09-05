import { BigText } from "./BigText";

export type LinedShowcaseHeaderData = {
  title: string;
  tags: string[];
  description?: string;
  image?: React.ReactNode;
  className?: string;
};

export function LinedShowcaseHeader({
  title,
  tags,
  description,
  image,
  className,
}: {
  title: string;
  tags: string[];
  description?: string;
  image?: React.ReactNode;
  className: string | undefined;
}) {
  return (
    <div className={`flex flex-col gap-4 ${className ?? ""}`}>
      <div className="flex items-center gap-4">
        <BigText text={title} />
        <div className="flex-1 border-t border-white" />
      </div>
      <div>
        {tags.map((tag) => (
          <p className="text-2xl" key={tag}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
}
