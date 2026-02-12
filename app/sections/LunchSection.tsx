import Image from "next/image";
import LunchBanner from "@/public/lunch_banner.png";
import LunchBannerDecor from "@/public/lunch_banner_decor.avif";
import LunchPlate from "@/public/lunch_plate.avif";
import LunchFlower1 from "@/public/lunch_flower1.avif";
import LunchFlower2 from "@/public/lunch_flower2.avif";
import leaf from "@/public/leaf.avif";

const LunchSection = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={LunchBanner}
          alt=""
          width={320}
          className="mx-auto relative z-5"
        />
        <Image
          src={LunchBannerDecor}
          alt=""
          width={160}
          className="mx-auto absolute -bottom-33 left-1/2 -translate-x-[55%] z-4 animate-hang"
        />
      </div>
      <div className="text-[#006b5b] text-center pt-40">
        <p className="text-xl mb-1">14th Feburary</p>
        <p className="text-[18px]">12:30 PM Onwards</p>
      </div>
      <div className="relative">
        <Image
          src={LunchPlate}
          alt="lunch plate"
          width={512}
          className="relative -right-25 animate-rotate"
        />
        <Image
          src={LunchFlower1}
          alt="lunch plate"
          width={280}
          className="absolute -left-17 top-15 rotate-z-150 z-3 animate-rotate"
          style={{
            // @ts-expect-error custom style
            "--base-rotation": "150deg",
          }}
        />
        <Image
          src={LunchFlower2}
          alt="lunch plate"
          width={70}
          className="absolute -left-10 top-35 rotate-z-150 z-5"
        />
        <Image
          src={LunchFlower2}
          alt="lunch plate"
          width={70}
          className="absolute -left-8 top-55 rotate-z-150 z-2"
        />
      </div>
      <div className="h-40 relative">
        <div
          className="absolute -right-20 top-10 w-[60%] h-full inline-block"
          style={{
            // @ts-expect-error custom style
            "--base-rotation": "-45deg",
            "--sway-duration": "3s",
            "--sway-angle": "-3deg",
          }}
        >
          <Image
            src={leaf}
            alt=""
            width={250}
            className="-rotate-z-45 animate-sway"
          />
        </div>
      </div>
    </div>
  );
};

export default LunchSection;
