import Image from "next/image";
import WeddingBanner from "@/public/wedding_banner.avif";
import WeddingBannerDecor from "@/public/wedding_banner_decor.avif";
import WeddingPicture from "@/public/wedding_picture.avif";
import leaf from "@/public/leaf.avif";

const WeddingSection = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={WeddingBanner}
          alt=""
          width={280}
          className="mx-auto relative z-5"
        />
        <Image
          src={WeddingBannerDecor}
          alt=""
          width={100}
          className="mx-auto absolute -bottom-20 left-1/2 -translate-x-1/2 z-4 animate-hang"
        />
      </div>
      <div className="text-[#c53974] text-center pt-25">
        <p className="text-xl mb-1">13th Feburary</p>
        <p className="text-[18px]">4:30 PM Onwards</p>
      </div>
      <div className="pt-6">
        <Image src={WeddingPicture} alt="" width={250} className="mx-auto" />
      </div>
      <div className="h-60">
        <div
          className="relative w-1/2 h-full inline-block"
          style={{
            // @ts-expect-error custom style
            "--base-rotation": "45deg",
            "--sway-duration": "3s",
            "--sway-angle": "-3deg",
          }}
        >
          <Image
            src={leaf}
            alt=""
            width={200}
            className="rotate-z-45 absolute -left-15 animate-sway"
          />
        </div>
        <div
          className="relative w-1/2 h-full inline-block"
          style={{
            // @ts-expect-error custom style
            "--base-rotation": "-105deg",
            "--sway-duration": "3s",
            "--sway-angle": "-3deg",
          }}
        >
          <Image
            src={leaf}
            alt=""
            width={200}
            className="-rotate-z-105 absolute -right-20 bottom-0 animate-sway"
          />
        </div>
      </div>
    </div>
  );
};

export default WeddingSection;
