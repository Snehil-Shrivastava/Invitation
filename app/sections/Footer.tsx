import Image from "next/image";
import peacock from "@/public/peacock.avif";
import flowerClosed from "@/public/flower_closed.svg";
import Leaf2 from "@/public/leaf_2.svg";

const Footer = () => {
  return (
    <div className="pt-20 relative z-50">
      <p className="text-center text-[#c53974] text-4xl leading-10 font-allura pb-15">
        See you there!
      </p>
      <div className="absolute -left-12 z-15">
        <Image
          src={flowerClosed}
          alt=""
          width={150}
          className="animate-sway"
          style={{
            // @ts-expect-error custom style
            "--sway-duration": "1.5s",
            "--sway-angle": "-2deg",
          }}
        />
      </div>
      <div className="animate-peacock relative z-10">
        <Image src={peacock} alt="peacock" width={512} className="scale-120" />
      </div>
      <div className="absolute -bottom-45 -left-10 z-12">
        <Image src={Leaf2} alt="" className="-rotate-z-20" />
      </div>
      <div className="absolute bg-background -left-10 -bottom-5 h-70 w-[120%]" />
    </div>
  );
};

export default Footer;
