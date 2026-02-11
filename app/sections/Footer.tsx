import Image from "next/image";
import peacock from "@/public/peacock.avif";

const Footer = () => {
  return (
    <div className="pt-20">
      <p className="text-center text-[#c53974] text-4xl leading-10 font-allura pb-15">
        See you there!
      </p>
      <div className="animate-peacock">
        <Image src={peacock} alt="peacock" width={512} className="scale-120" />
      </div>
    </div>
  );
};

export default Footer;
