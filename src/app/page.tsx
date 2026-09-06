import { BigText } from "@/components/common/BigText";
import { LinedShowcase } from "@/components/common/LinedShowcase";
import { LinedShowcaseHeaderData } from "@/components/common/LinedShowcaseHeader";
import { Row } from "@/components/common/Row";
import { TextBanner } from "@/components/common/TextBannner";
import Image from "next/image";
import placeholder from "@/assets/personal-site-bg-dark.jpg";
import bathGorgon from "@/assets/Bath_Gorgon.webp";

const sections: LinedShowcaseHeaderData[] = [
  {
    title: "Home Lab",
    tags: ["Linux", "Ubuntu", "Docker", "Networking", "Nginx"],
  },
  {
    title: "KJDetailz",
    tags: ["Next.js", "Claude Code", "Vercel", "Github Actions"],
  },
  {
    title: "OwnMi",
    tags: ["Linux", "Ubuntu", "Docker", "Networking", "Nginx"],
  },
];

export default function Page() {
  return (
    <div className="pt-8 flex flex-col">
      <Row
        left={
          <>
            <BigText text="Full Stack" />
            <span className="pl-2 text-xl">SOFTWARE ENGINEER</span>
          </>
        }
        right={<BigText text="Praj" />}
      />
      <Row
        className="-mt-3 -mb-2"
        left={
          <>
            <BigText text="Bath University" />
          </>
        }
        right={<BigText text="Yakha" />}
      />
      <TextBanner
        className="-z-1 py-3"
        left={<BigText text="Steak Specialist." />}
        right={<Image src={bathGorgon} alt="bath gorgon" className="w-25" />}
      />
      <LinedShowcase
        image={
          <div className="min-h-[70svh] mt-4 mr-4">
            <Image src={placeholder} alt="hi guys!" width={1920} height={40} />
          </div>
        }
        items={sections}
      />
    </div>
  );
}
