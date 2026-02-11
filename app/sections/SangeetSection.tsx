import Image from "next/image";
import sangeet from "@/public/sangeet_banner.avif";
import sangeetHangingDecor from "@/public/hanging_decor.avif";
import discoBall from "@/public/disco_ball.avif";
import guitars from "@/public/guitars.avif";
import posinghuman from "@/public/human.avif";
import sangeetFlower1 from "@/public/sangeet_flower1.avif";
import sangeetFlower2 from "@/public/sangeet_flower2.avif";
import sangeetFlower3 from "@/public/sangeet_flower3.avif";

const SangeetSection = () => {
  return (
    <div className="py-15">
      <div className="relative h-100">
        <Image
          src={sangeet}
          alt=""
          width={280}
          className="mx-auto relative z-5"
        />
        <Image
          src={sangeetHangingDecor}
          alt=""
          width={180}
          className="mx-auto absolute top-[45%] left-1/2 -translate-x-1/2 z-4 animate-hang"
        />
        <Image
          src={discoBall}
          alt=""
          width={120}
          className="mx-auto absolute top-[60%] left-1/2 -translate-x-1/2 z-3 animate-sway"
        />
      </div>
      <div className="text-[#1711a0] text-center flex flex-col justify-center items-center gap-2">
        <p className="text-xl">12th Feburary</p>
        <p className="text-base">7 PM Onwards</p>
      </div>
      <div className="h-80">
        <div className="relative">
          <div
            className="absolute -left-20 z-4"
            style={{
              // @ts-expect-error custom style
              "--sway-duration": "2s",
              "--sway-angle": "-3deg",
            }}
          >
            <Image
              src={sangeetFlower1}
              alt=""
              width={180}
              className="relative -top-25 animate-sway"
            />
          </div>
          <div
            className="absolute top-15 z-3"
            style={{
              // @ts-expect-error custom style
              "--base-rotation": "280deg",
              "--sway-duration": "2s",
              "--sway-angle": "-4deg",
            }}
          >
            <Image
              src={sangeetFlower2}
              alt=""
              width={160}
              className="rotate-z-280 animate-sway"
            />
          </div>
          <div
            className="absolute -left-10 top-27 z-5"
            style={{
              // @ts-expect-error custom style
              "--base-rotation": "60deg",
              "--sway-duration": "1.2s",
              "--sway-angle": "-3deg",
            }}
          >
            <Image
              src={sangeetFlower3}
              alt=""
              width={150}
              className="rotate-z-60 animate-sway"
            />
          </div>
          <Image
            src={posinghuman}
            alt=""
            width={260}
            className="absolute left-1/2 -translate-x-1/2 z-1 animate-skew"
          />
          <Image
            src={guitars}
            alt="guitars"
            width={260}
            className="absolute -right-12 top-6 z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default SangeetSection;
