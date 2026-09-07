import { StaticImageData } from "next/image";
import Image from "next/image";
import { BigText } from "./BigText";

export type LinedShowcaseHeaderData = {
  title: string;
  tags: string[];
  description?: React.ReactNode;
  image?: StaticImageData;
  className?: string | undefined;
};

export function LinedShowcaseHeader({
  title,
  tags,
  description,
  image,
  className,
}: LinedShowcaseHeaderData) {
  return (
    <div className={`flex flex-col mb-15 ${className ?? ""}`}>
      <div className="flex items-center gap-4 mb-4">
        <BigText text={title} />
        <div className="flex-1 border-t border-white" />
      </div>
      <div className="flex flex-row relative gap-2">
        {" "}
        <div className="flex flex-3 flex-row">
          <div className="flex-col border-r border-white mr-4 pr-4">
            {tags.map((tag) => (
              <div className="text-2xl" key={tag}>
                {tag}
              </div>
            ))}
          </div>
          <div className="pr-4 font-light"> {description}</div>
        </div>
        <div className="flex-2 w-1/2 relative mr-2">
          {image && (
            <Image src={image} alt="homelab" fill className="object-contain" />
          )}
        </div>
      </div>
    </div>
  );
}
