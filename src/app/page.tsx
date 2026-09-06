import { LinedShowcaseHeaderData } from "@/components/common/LinedShowcaseHeader";
import DesktopFrontPage from "@/components/layouts/desktop/DesktopFrontPage";
import MobileFrontPage from "@/components/layouts/mobile/MobileFrontPage";

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
    <>
      <div className="hidden md:block">
        <DesktopFrontPage />
      </div>
      <div className="block md:hidden">
        <MobileFrontPage />
      </div>
    </>
  );
}
