import Image from "next/image";
import { Mukta, Roboto } from "next/font/google";
import Link from 'next/link'

const roboto = Mukta({
  weight: "800",
  subsets: ["latin"],
});

export default function Form4() {
  return (
    <div className=" w-full h-[700px] flex pl-[150px] pr-[150px] pt-[122px] pb-[105px] justify-center gap-[25px] items-start bg-white">
      <div className="grid grid-cols-3  gap-[25px]">
        <div className="  ml-[150px] h-[350px] flex w-[500px] p-4 flex-col items-start gap-[25px] flex-shrink-0">
          <div className="flex flex-col self-stretch text-[26px] not-italic font-semibold leading-8  gap-4">
            Experience the World of Programming through our Web Internship
            <div className="flex flex-col self-stretch text-[#6B7280] text-[16px] not-italic font-normal leading-7">
              Gain hands-on experience and delve into the intricacies of web
              development as you work on real-world projects.
            </div>
          </div>
          <Link href="https://www.ivfuture.ro/">
          <button className=" text-orange-600  rounded-[8px] flex  py-[16px] px-[48px] justify-center items-center gap-[10px] border-orange-600  border-solid border-2 ">
            Enroll Now!
            <Image
              className=" w-6 h-6 "
              src="/ArrowOrange.png"
              alt="iv future"
              width={104}
              height={102}
            />
          </button>
          </Link>
        </div>

        <div>
          <Image
            className=" ml-[80px]"
            src="/persoane1.png"
            alt="iv future"
            width={450}
            height={200}
          />
        </div>

        <div>
          <Image
            className=" "
            src="/persoane2.png"
            alt="iv future"
            width={450}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
