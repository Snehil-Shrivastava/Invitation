import Image from "next/image";
import leaf from "@/public/leaf.avif";
import haldi from "@/public/haldi.avif";
import hangingFlower from "@/public/hanging_flowers.avif";
import haldiGrp from "@/public/haldi_group.avif";

const HaldiSection = () => {
  return (
    <div>
      <div className="text-[#c53974] font-semibold text-4xl text-center pb-15">
        <h3>Events</h3>
      </div>
      <div>
        <Image
          src={haldi}
          alt="Haldi"
          width={280}
          className="mx-auto relative z-2"
        />
        <Image
          src={hangingFlower}
          alt="Haldi"
          width={155}
          className="mx-auto relative -top-6 animate-hang z-1"
        />
      </div>
      <div className="text-center text-[#b29862] text-lg">
        <p>12th Feburary</p>
        <p>Dress Code : Yellow</p>
      </div>
      <div className="flex flex-col gap-5 py-10 w-[85%] mx-auto">
        <div className="flex justify-around">
          <h4 className="text-[#f2b42b] text-2xl flex-1">Bride Haldi</h4>
          <p className="text-[#b29862] text-lg flex-1 text-end">
            11:30 AM onwards
          </p>
        </div>
        <div className="flex justify-around">
          <h4 className="text-[#f2b42b] text-2xl flex-1">Groom Haldi</h4>
          <p className="text-[#b29862] text-lg flex-1 text-end">
            1:30 AM onwards
          </p>
        </div>
      </div>
      <div className="h-120">
        <div
          className="relative h-60"
          style={{
            // @ts-expect-error custom style
            "--sway-duration": "2s",
            "--sway-angle": "-2deg",
          }}
        >
          <Image
            src={haldiGrp}
            alt=""
            width={250}
            className="absolute -right-5 animate-sway"
          />
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
              className="-rotate-z-105 absolute -right-15 bottom-0 animate-sway"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HaldiSection;
