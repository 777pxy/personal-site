import Image from "next/image";
import bg from "@/assets/personal-site-bg.jpg";
import GitHubLogo from "@/components/icons/GitHubIcon";
import smithing from "@/assets/smithing.webp";

export default function Page() {
  return (
    <div className="relative h-screen">
      <Image src={bg} alt="" fill className="object-cover" priority />
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Image src={smithing} alt="" width={600} height={200} unoptimized />
          <div className="flex flex-col text-center italic text-2xl">
            <span>This site is under construction.</span>
            <span>Check back soon!</span>
          </div>
          <div>
            <a href="https://github.com/777pxy">
              <GitHubLogo
                width={240}
                height={68}
                className="text-black hover:scale-105 hover:text-[#C4F01D] transition-all duration-200 ease-in-out"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
