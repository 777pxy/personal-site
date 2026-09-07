import { BigText } from "./BigText";
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
      <div className={`flex flex-col mb-15 `}>
        <div className="flex items-center gap-4 mb-4">
          <BigText text={"the future awaits..."} />
          <div className="flex-1 border-t border-white" />
        </div>
        <div className="flex flex-row relative gap-2">
          {" "}
          <div className="flex flex-3 flex-row">
            <div className="flex-col  mr-4 pr-4">
              <div className="font-light">
                {"I'm currently working on a photographers portfolio site."}
              </div>
              <div className="font-light">
                What <span className="underline">steaks</span> are at risk
                ahhaha :laugh:
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
