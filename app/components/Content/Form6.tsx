import Image from "next/image";
import { Mukta, Roboto } from "next/font/google";

const roboto = Mukta({
  weight: "800",
  subsets: ["latin"],
});

export default function Form6() {
  return (
    <div className="bg-white h-[1750px] w-full grid grid-cols-2 gap-3">
      <div className=" ml-[410px]">
        <div className="  mt-16 flex  flex-col flex-shrink-0 text-black text-[40px] not-italic font-semibold">
          Our projects
        </div>
        <div className=" mt-4 flex w-[550px] flex-col flex-shrink-0  text-black text-[16px] not-italic font-normal leading-7  ">
          Ignite your IT career through hands-on projects. Gain real-world
          experience and practical skills. Join our internship program to propel
          your success in the dynamic world of technology.
        </div>

        <div>
          <Image
            className=" mt-[66px] flex-shrink-0"
            src="/poza.png"
            alt="iv future"
            width={700}
            height={452}
          />
        </div>
        <div>
          <Image
            className=" mt-[27px] flex-shrink-0"
            src="/poza3.png"
            alt="iv future"
            width={700}
            height={452}
          />
        </div>
      </div>

      <div className="">
        <div className=" flex gap-4  mt-[108px]">
          <button className="  text-[#FBE7C0] text-[16px] not-italic font-extrabold leading-5 justify-center items-center w-[55px] h-[30px] inline-flex px-4 py-2  gap-[10px] rounded-lg border-solid border-[2px] border-[#C14904] bg-[#C14904]">
            #All
          </button>
          <button className=" text-[#C14904] text-[16px] not-italic font-extrabold leading-5 justify-center items-center w-[130px] h-[30px] inline-flex px-4 py-2  gap-[10px] rounded-lg border-solid border-[2px] border-[#FBE7C0] bg-[#FBE7C0]">
            #Application
          </button>
          <button className=" text-[#C14904] text-[16px] not-italic font-extrabold leading-5 justify-center items-center w-[110px] h-[30px] inline-flex px-4 py-2  gap-[10px] rounded-lg border-solid border-[2px] border-[#FBE7C0] bg-[#FBE7C0]">
            #Websites
          </button>

          <button className=" text-[#C14904] text-[16px] not-italic font-extrabold leading-5 justify-center items-center w-[130px] h-[30px] inline-flex px-4 py-2  gap-[10px] rounded-lg border-solid border-[2px] border-[#FBE7C0] bg-[#FBE7C0]">
            #Ecommerce
          </button>
        </div>

        <div className="flex gap-4  mt-[16px] ">
          <button className=" text-[#C14904] text-[16px] not-italic font-extrabold leading-5 justify-center items-center w-[130px] h-[30px] inline-flex px-4 py-2  gap-[10px] rounded-lg border-solid border-[2px] border-[#FBE7C0] bg-[#FBE7C0]">
            #Lift & Shift
          </button>
          <button className=" text-[#C14904] text-[16px] not-italic font-extrabold leading-5 justify-center items-center w-[250px] h-[30px] inline-flex px-4 py-2  gap-[10px] rounded-lg border-solid border-[2px] border-[#FBE7C0] bg-[#FBE7C0]">
            #Single Page Aplication
          </button>
        </div>
        <div className=" mt-[108px]  flex-shrink-0">
          <Image
            className=" mt-[27px] flex-shrink-0"
            src="/poza2.png"
            alt="iv future"
            width={700}
            height={452}
          />
          <Image
            className=" mt-[27px] flex-shrink-0"
            src="/poza4.png"
            alt="iv future"
            width={700}
            height={452}
          />
        </div>
      </div>
    </div>
  );
}
