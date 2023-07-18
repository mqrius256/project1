import Image from "next/image";
import { Mukta, Roboto } from "next/font/google";

const roboto = Mukta({
  weight: "800",
  subsets: ["latin"],
});

export default function Form5() {
  return (
    <div className=" grid grid-cols-2  w-full h-[950px] flex-shrink-0 bg-red-50">
      <div>
        <div className=" flex  flex-col flex-shrink-0 text-[#374151] text-[40px] not-italic font-extrabold leading-12 ml-[150px] mt-[93px]">
          High quality lessons from <br />
          our mentors.
        </div>
        <div className=" relative ml-[150px] mt-[78px]">
          <Image
            className=""
            src="/profesor.png"
            alt="iv future"
            width={668}
            height={538}
          />
          <button className=" rounded-full bg-orange-600 absolute top-[40%] left-[25%] w-[100px] h-[100px] ">
            <Image
              className=""
              src="/Frame.svg"
              alt="iv future"
              width={668}
              height={538}
            />
          </button>
        </div>

        <div className=" mt-[14px] ml-[150px] text-[#374151] text-[15px] font-semibold">
          Introduction our mentor - George
        </div>
        <div className=" mt-2 flex w-[643px] flex-col flex-shrink-0 text-[#74757E] text-base font-normal ml-[150px]">
          Benefit from their expertise and accelerate your professional growth
          with our mentorship program.
        </div>
      </div>

      <div>
        <div className=" mt-[139px] w-[650px] flex flex-col flex-shrink-0 text-[18px] not-italic font-normal leading-8 text-[#74757E]">
          Our experienced mentors guide and inspire interns, offering invaluable
          industry insights and personalized support throughout their journey
        </div>

        <div className="  grid grid-cols-2 grid-rows-2 gap-y-6">
          <div className=" flex-shrink-0 w-[300px] h-[250px] rounded-md bg-white mt-[90px]">
            <div className=" w-[49px] h-[49px] flex-shrink-0 rounded-[4px] bg-red-100  mt-[20px] ml-[21px]">
              <Image
                className=" ml-3.5 py-3.5"
                src="/Frame1.svg"
                alt="iv future"
                width={20}
                height={30}
              />
            </div>

            <div className=" ml-[22px] flex  flex-col flex-shrink-0 text-black text-[16px] not-italic font-semibold leading-5 mt-4">
              Recorded class
            </div>
            <div className=" ml-[22px] w-[220px] mt-4 flex flex-col flex-shrink-0 text-[#74757E] text-[12px] font-normal  not-italic leading-5">
              Access our recorded classes anytime, anywhere.
            </div>
          </div>

          <div className=" -ml-[250px] flex-shrink-0 w-[300px] h-[250px] rounded-md bg-white mt-[90px]">
            <div className=" w-[49px] h-[49px] flex-shrink-0 rounded-[4px] bg-red-100  mt-[20px] ml-[21px]">
              <Image
                className=" ml-3.5 py-3.5"
                src="/camera.svg"
                alt="iv future"
                width={20}
                height={30}
              />
            </div>

            <div className=" ml-[22px] flex  flex-col flex-shrink-0 text-black text-[16px] not-italic font-semibold leading-5 mt-4">
              Professional Growth
            </div>
            <div className=" ml-[22px] w-[220px] mt-4 flex flex-col flex-shrink-0 text-[#74757E] text-[12px] font-normal  not-italic leading-5">
              Unlock your potential for professional growth with mentorship.
            </div>
          </div>
          <div className=" flex-shrink-0 w-[300px] h-[250px] rounded-md bg-white ">
            <div className=" w-[49px] h-[49px] flex-shrink-0 rounded-[4px] bg-red-100  mt-[20px] ml-[21px]">
              <Image
                className=" ml-3.5 py-3.5"
                src="/film.svg"
                alt="iv future"
                width={20}
                height={30}
              />
            </div>

            <div className=" ml-[22px] flex  flex-col flex-shrink-0 text-black text-[16px] not-italic font-semibold leading-5 mt-4">
              Industry Insights
            </div>
            <div className=" ml-[22px] w-[220px] mt-4 flex flex-col flex-shrink-0 text-[#74757E] text-[12px] font-normal  not-italic leading-5">
              Access valuable industry insights from seasoned professionals.
            </div>
          </div>
          <div className="  -ml-[250px] flex-shrink-0 w-[300px] h-[250px] rounded-md bg-white">
            <div className=" w-[49px] h-[49px] flex-shrink-0 rounded-[4px] bg-red-100  mt-[20px] ml-[21px]">
              <Image
                className=" ml-3.5 py-3.5"
                src="/chat.svg"
                alt="iv future"
                width={20}
                height={30}
              />
            </div>

            <div className=" ml-[22px] flex  flex-col flex-shrink-0 text-black text-[16px] not-italic font-semibold leading-5 mt-4">
              Expert Guidance
            </div>
            <div className=" ml-[22px] w-[220] mt-4 flex flex-col flex-shrink-0 text-[#74757E] text-[12px] font-normal  not-italic leading-5">
              Gain expert guidance to navigate your career path.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
