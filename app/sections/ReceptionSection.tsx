import Image from "next/image";
import ReceptionBanner from "@/public/reception_banner.png";
import ReceptionBannerDecor1 from "@/public/reception_banner_decor1.avif";
import ReceptionBannerDecor2 from "@/public/reception_banner_decor2.avif";
import ReceptionHero from "@/public/reception_hero.avif";
import leaf from "@/public/leaf.avif";

const ReceptionSection = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={ReceptionBanner}
          alt=""
          width={280}
          className="mx-auto relative z-5"
        />
        <Image
          src={ReceptionBannerDecor1}
          alt=""
          width={160}
          className="mx-auto absolute -bottom-35 right-20 z-4 animate-hang"
        />
        <Image
          src={ReceptionBannerDecor2}
          alt=""
          width={160}
          className="mx-auto absolute -bottom-35 left-20 z-4 animate-hang"
        />
      </div>
      <div className="text-[#ab191b] text-center pt-40">
        <p className="text-xl mb-1">13th Feburary</p>
        <p className="text-[18px]">7:30 PM Onwards</p>
      </div>
      <div>
        <Image src={ReceptionHero} alt="" width={512} />
      </div>
      <div className="h-60 mt-10 relative">
        <div
          className="absolute -left-20 h-full inline-block"
          style={{
            // @ts-expect-error custom style
            "--base-rotation": "40deg",
            "--sway-duration": "3s",
            "--sway-angle": "-3deg",
          }}
        >
          <Image
            src={leaf}
            alt=""
            width={250}
            className="rotate-z-40 animate-sway"
          />
        </div>
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

export default ReceptionSection;
