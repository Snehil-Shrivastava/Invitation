import Image from "next/image";
import flower from "@/public/flower.svg";
import leaf from "@/public/leaf.avif";
import leaf2 from "@/public/leaf_2.svg";
import flowerWithLeaf from "@/public/flower_with_leaf.svg";
import flowerWithNoLeaf from "@/public/flower_no_leaf.svg";
import flowerGroup from "@/public/flower_group.avif";
import flowerFragment from "@/public/flower_fragment.svg";
import flowerClosed from "@/public/flower_closed.svg";
import buddha from "@/public/buddha.avif";
import eventTime from "@/public/decorative_time.avif";
import haldi from "@/public/haldi.avif";
import hangingFlower from "@/public/hanging_flowers.avif";
import peacock from "@/public/peacock.avif";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden p-4 font-gillian-regular">
      <div className="absolute inset-4 border-2 border-amber-500 pointer-events-none z-5" />
      <div className="absolute inset-0 z-10 pointer-events-none grainy-background mix-blend-overlay" />

      {/* 4. Content Container */}
      <div className="relative w-full h-full z-8">
        <div className="absolute -right-82 -top-50 animate-sway z-1 pointer-events-none">
          <Image
            src={flower}
            alt="image"
            width={490}
            height={373}
            className="scale-120"
          />
        </div>
        <div
          className="absolute -right-25 -top rotate-z-200 animate-sway pointer-events-none"
          style={{
            // @ts-expect-error custom style
            "--base-rotation": "200deg",
          }}
        >
          <Image src={leaf} alt="leaf" width={250} height={373} />
        </div>
        <div
          className="absolute -top-10 -left-45 animate-sway pointer-events-none"
          style={{
            // @ts-expect-error custom style
            "--sway-duration": "1.5s",
            "--sway-angle": "-2deg",
          }}
        >
          <Image src={flowerWithLeaf} alt="image" width={390} height={373} />
        </div>
        <div className="h-screen max-h-160 pointer-events-none">
          <h1 className="text-center text-[#c53974] font-semibold text-4xl relative top-1/2 -translate-y-1/2">
            John weds Jane
          </h1>
        </div>
        <div
          className="absolute -left-15 top-100 rotate-z-50 animate-sway pointer-events-none"
          style={{
            // @ts-expect-error custom style
            "--base-rotation": "50deg",
            "--sway-duration": "1s",
            "--sway-angle": "-2deg",
          }}
        >
          <Image src={leaf} alt="leaf" width={180} height={373} />
        </div>
        <div
          className="absolute -right-75 top-70 -rotate-z-12 animate-sway pointer-events-none"
          style={{
            // @ts-expect-error custom style
            "--base-rotation": "-12deg",
            "--sway-duration": "2.5s",
            "--sway-angle": "-2deg",
          }}
        >
          <Image src={flowerWithNoLeaf} alt="leaf" width={520} height={570} />
        </div>
        <div className="relative -top-5 text-center text-[#d26d3c]">
          <span className="text-flash">scroll down</span>
        </div>
        <div className="pb-10 w-[52%] mx-auto">
          <div className="pt-10">
            <Image
              src={buddha}
              alt="buddha"
              width={216}
              height={212}
              className="mx-auto"
            />
          </div>
          <div lang="hi" className="text-center text-[#b29862] pt-2 pb-4">
            <p className="font-jaini text-2xl">भवतु सब्ब मंगलम्</p>
          </div>
          <div className="text-[10px] text-center text-[#728e1c]">
            <p>
              with the blessings of Late Smt. Meerabai & Late Shri Ramcharan
              Jawarker
            </p>
          </div>
          <div className="text-[#c53974] font-semibold text-4xl text-center py-5 leading-20">
            <h2>Jawarker</h2>
          </div>
          <div className="text-base text-center text-[#728e1c]">
            <p>
              family request the honor of your presence at the marriage of their
              daughter
            </p>
          </div>
        </div>
        <div className="relative pt-5 pb-15">
          {/* <div className="h-100 w-70 relative -left-20 bg-[#919d6b] rounded-full">
            <Image
              src={flowerGroup}
              alt="flower group"
              width={512}
              height={918}
              className="relative -bottom-10 -right-12 scale-145"
            />
          </div> */}
          {/* <div className="h-100 w-70 relative -left-20 bg-[#919d6b] rounded-full z-10"> */}
          {/* <div
              className="absolute inset-0 rounded-full"
              style={{ clipPath: "circle(58% at 50% 50%)" }}
            > */}
          {/* <Image
              src={flowerGroup}
              alt="flower group"
              width={512}
              height={918}
              className="relative -botom-10 -right-12 scale-145"
            /> */}
          {/* </div> */}
          {/* </div> */}
          <div className="h-100 w-70 relative -left-20 bg-[#919d6b] rounded-full">
            <Image
              src={flowerGroup}
              alt="flower group"
              width={512}
              height={918}
              className="relative -bottom-10 -right-12 scale-145"
            />
          </div>
        </div>
        <div className="w-[70%] mx-auto">
          <div className="text-[#c53974] font-semibold text-4xl text-center leading-20">
            <h3>Ishi Jawarker</h3>
          </div>
          <div className="text-base text-center text-[#728e1c]">
            <p>d/o Mrs. Sunita & Mr. Dharam Das Jawarker</p>
          </div>
          <div className="text-[#b29862] font-semibold text-4xl text-center py-15 leading-20">
            <h3>Weds</h3>
          </div>
          <div className="text-[#c53974] font-semibold text-4xl text-center leading-14">
            <h3>Aishwary Khobragade</h3>
          </div>
          <div className="text-base text-center text-[#728e1c] py-5">
            <p>s/o Mrs. Jayshree & Mr. Aekant Khobragade</p>
          </div>
          <div className="text-xs text-center text-[#728e1c] w-4/5 mx-auto">
            <p>
              grandson of Late Smt. Nagoobai & Late Shri Tulsidas Khobragade
            </p>
          </div>
          <div>
            <Image
              src={eventTime}
              alt=""
              width={1204}
              height={1024}
              className="scale-110"
            />
          </div>
          <div className="h-150 w-150 relative">
            <div
              className="relative -right-25 animate-sway"
              style={{
                // @ts-expect-error custom style
                "--sway-duration": "2s",
                "--sway-angle": "-2deg",
              }}
            >
              <Image
                src={flowerFragment}
                alt="flower"
                width={612}
                height={577}
              />
            </div>
            <div
              className="absolute top-50 -left-27 bottom-0 animate-sway"
              style={{
                // @ts-expect-error custom style
                "--sway-duration": "1.5s",
                "--sway-angle": "-2deg",
              }}
            >
              <Image src={flowerClosed} alt="flower closed" />
            </div>
            <div
              className="absolute top-75 -left-35 animate-sway"
              style={{
                // @ts-expect-error custom style
                "--sway-duration": "5s",
                "--sway-angle": "5deg",
              }}
            >
              <Image src={leaf2} alt="leaf" />
            </div>
          </div>
          <div className="text-[#c53974] font-semibold text-2xl text-center leading-10">
            <h4>Looking forward to welcome you</h4>
          </div>
          <div className="text-base text-center text-[#728e1c] py-5 w-4/5 mx-auto leading-8">
            <p>Dr. Rohie Jawarker and Jawarker family</p>
          </div>
        </div>
        <div className="pb-20">
          <div className="h-80">
            <div
              className="-right-60 relative animate-sway"
              style={{
                // @ts-expect-error custom style
                "--base-rotation": "-40deg",
                "--sway-duration": "2s",
                "--sway-angle": "-2deg",
              }}
            >
              <Image src={leaf} alt="leaf" width={200} height={373} />
            </div>
            <div
              className="-left-25 relative top-15 animate-sway"
              style={{
                // @ts-expect-error custom style
                "--base-rotation": "40deg",
                "--sway-duration": "2s",
                "--sway-angle": "-2deg",
              }}
            >
              <Image src={leaf} alt="leaf" width={180} height={373} />
            </div>
          </div>
          <div className="text-[#c53974] font-semibold text-4xl text-center">
            <h3>Venue</h3>
          </div>
          <div className="py-5">
            <p className="text-xl text-center text-[#728e1c]">
              Buddha Heritage Resort
            </p>
            <p className="text-sm text-center text-[#728e1c] mt-2">
              Tourist Complex, opposite Maya sarovar park,
            </p>
            <p className="text-sm text-center text-[#728e1c]">
              near Thai Temple, Bodh Gaya, Bihar 824231
            </p>
          </div>
        </div>
        <div>
          <div className="text-[#c53974] font-semibold text-4xl text-center pb-20">
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
        </div>
        <div className="pt-20 animate-peacock">
          <Image src={peacock} alt="peacock" width={512} className="w-[110%]" />
        </div>
      </div>
    </main>
  );
}
