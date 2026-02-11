import Image from "next/image";
import leaf from "@/public/leaf.avif";
import BaraatBanner from "@/public/barat_banner.avif";
import BaraatBannerDecor from "@/public/barat_banner_decor.avif";
import BaraatPicture from "@/public/barat_picture.avif";

const BaraatSection = () => {
  return (
    <div className="py-15">
      <div className="h-50 w-full">
        <div
          className="absolute w-[60%] h-50 inline-block"
          style={{
            // @ts-expect-error custom style
            "--base-rotation": "50deg",
            "--sway-duration": "3s",
            "--sway-angle": "-3deg",
          }}
        >
          <Image
            src={leaf}
            alt=""
            width={250}
            className="rotate-z-50 absolute -left-25 animate-sway"
          />
        </div>
        <div
          className="absolute right-0 w-1/2 h-50 inline-block"
          style={{
            // @ts-expect-error custom style
            "--base-rotation": "50deg",
            "--sway-duration": "3s",
            "--sway-angle": "-3deg",
          }}
        >
          <Image
            src={leaf}
            alt=""
            width={150}
            className="roatate-z-50 absolute -top-20 -right-12 -scale-x-[1] animate-sway"
          />
        </div>
      </div>
      <div className="relative">
        <Image
          src={BaraatBanner}
          alt=""
          width={280}
          className="mx-auto relative z-5"
        />
        <Image
          src={BaraatBannerDecor}
          alt=""
          width={180}
          className="mx-auto absolute -bottom-20 left-1/2 -translate-x-1/2 z-4 animate-hang"
        />
      </div>
      <div className="text-[#ff6608] text-center pt-25">
        <p className="text-xl">13th Feburary</p>
        <p className="text-base">2 PM Onwards</p>
      </div>
      <div>
        <Image
          src={BaraatPicture}
          alt=""
          width={512}
          className="relative -right-6 animate-move"
        />
      </div>
      <div className="h-50 w-full mt-25">
        <div
          className="absolute w-1/2 h-50 inline-block"
          style={{
            // @ts-expect-error custom style
            "--base-rotation": "50deg",
            "--sway-duration": "3s",
            "--sway-angle": "-3deg",
          }}
        >
          <Image
            src={leaf}
            alt=""
            width={180}
            className="rotate-z-50 absolute -bottom-5 -left-15 animate-sway"
          />
        </div>
        <div
          className="absolute right-0 w-[70%] h-50 inline-block"
          style={{
            // @ts-expect-error custom style
            "--base-rotation": "50deg",
            "--sway-duration": "3s",
            "--sway-angle": "-3deg",
          }}
        >
          <Image
            src={leaf}
            alt=""
            width={320}
            className="roatate-z-50 absolute -top-20 -right-20 -scale-x-[1] animate-sway"
          />
        </div>
      </div>
    </div>
  );
};

export default BaraatSection;
