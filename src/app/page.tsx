import { BigText } from "@/components/common/BigText";
import { LinedShowcase } from "@/components/common/LinedShowcase";
import { LinedShowcaseHeaderData } from "@/components/common/LinedShowcaseHeader";
import { Row } from "@/components/common/Row";
import { TextBanner } from "@/components/common/TextBannner";
import Image from "next/image";
import placeholder from "@/assets/personal-site-bg-dark.jpg";
import bathGorgon from "@/assets/Bath_Gorgon.webp";
import homelab from "@/assets/homelab.webp";
import kjdetailz from "@/assets/kjdetailz_header_image.webp";
import monk from "@/assets/monk.png";

const sections: LinedShowcaseHeaderData[] = [
  {
    title: "KJDetailz",
    tags: ["Next.js", "Claude Code", "Vercel", "Github Actions"],
    image: kjdetailz,
    description: (
      <div>
        <div className="mb-2">
          <a
            className="underline hover:text-[1.08em] duration-100 ease-in-out"
            href="https://kjdetailz.com"
          >
            kjdetailz.com
          </a>
        </div>
        <p>
          <span>
            KJDetailz is a car valet service based in Dorset and run by Kieran.
            I consulted Kieran about his functional requirements and the visual
            direction of the site in order to ensure that all of his
            requirements were met.
          </span>
          <br />
          <br />
          <span>
            I initially used Figma to rapidly develop prototypes of the site and
            iteratively made changes based on feedback.
          </span>
          <br />
          <br />
          <span>
            I then used Claude Code to help me develop the website and ship
            features as fast as we could decide on them. I still maintain and
            add new features as KJDetailz expands.
          </span>
          <br />
          <br />
          <span>
            KJDetailz has since seen a 20% increase in inquiries, and has gone
            on to win a regional award.
          </span>
          <br />
          <br />
          <span>
            This was an amazing learning experience in both AI use and working
            directly with a stakeholder.
          </span>
        </p>
      </div>
    ),
  },
  {
    title: "ownMi",
    tags: ["Linux", "Ubuntu", "Docker", "Networking", "Nginx"],
    image: monk,
    description: (
      <div>
        <span>
          {" "}
          ownMi is a time tracking web app with graphs, heatmaps, and
          consistency tracking features. It was my first project in web
          development and an amazing learning experience with so many unique
          challenges such as dynamic css.
        </span>
        <br />
        <br />
        <span>
          ownMi later spilled into dev-ops as I ended up self hosting it on my
          homelab. This, again, was a very juicy learning experience as I got my
          hands dirty using Linux, Docker, and networking for the first time.
        </span>
        <br />
        <br />
        <span>
          It's no longer up as I admit it was very buggy and pretty badly built
          but looking back it felt like I was a Senior Engineer building the
          future.
        </span>
      </div>
    ),
  },
  {
    title: "Home Lab",
    tags: ["Linux", "Ubuntu", "Docker", "Networking", "Nginx"],
    image: homelab,
    description: (
      <div>
        <span>
          This isn't actualy my homelab (it's my pc) I just can't find an image
          for it right now and am currently away.
        </span>
        <br />
        <br />
        <span>
          My homelab is running Ubuntu and I use it to self host projects, and
          learn about infrastructure and dev-ops.
        </span>
        <br />
        <br />
        <span>It also comes in handy as networked storage via Samba.</span>
      </div>
    ),
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
          <div className="min-h-[65svh] mt-4 mr-4">
            <Image
              src={placeholder}
              alt="object-cover hi guys!"
              className="h-[55svh]"
            />
          </div>
        }
        items={sections}
      />
    </div>
  );
}
