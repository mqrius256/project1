import Image from "next/image";
import Link from "next/link";
import { Mukta, Roboto } from "next/font/google";

const roboto = Mukta({
  weight: "400",
  subsets: ["latin"],
});

type ItemType = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const itemArray: ItemType[] = [
  {
    title: "HTML",
    description: "Gain hands-on experience and delve into the..",
    image: "/assets/html.png",
    link: "https://www.youtube.com/",
  },
  {
    title: "CSS",
    description: "Gain hands-on experience and delve into the..",
    image: "/assets/css.png",
    link: "https://www.youtube.com/",
  },
  {
    title: "JavaScript",
    description: "Gain hands-on experience and delve into the..",
    image: "/assets/js.png",
    link: "https://www.youtube.com/",
  },
];

export default function Form2() {
  return (
    <div className="  bg-white w-full h-[700px]  ">
      <div className=" mx-[150px] mt-[100px]  h-[520px]">
        <div className="flex w-734px flex-col flex-shrink-0 text-gray-700 justify-center items-center  text-center  text-[40px] not-italic font-extrabold leading-[54px]">
          Experience the World of Programming <br />
          through our Web Internship
        </div>
        <div className="   flex w-[1150px] mt-[16px] mx-[400px] text-gray-500 flex-col flex-shrink-0  justify-center items-center  text-center  text-[16px] font-normal not-italic leading-[20px]">
          Gain hands-on experience and delve into the intricacies of web
          development <br />
          as you work on real-world projects.
        </div>
        <div className="mx-[420px] grid grid-cols-4 gap-10 pt-10">
          <div className="flex h-80 w-64 flex-shrink-0 flex-col items-center justify-start gap-2 overflow-hidden rounded-2xl bg-red-50 px-4 py-2 text-slate-950">
            <span className="mt-2 w-full text-xl font-semibold text-orange-500">
              Our Classes
            </span>
            <p className="w-full text-sm font-semibold">
              Gain hands-on experience and delve into the intricacies of web
              development as you work on real-world projects.
            </p>
          </div>
          {itemArray.map((item, index) => (
            <ItemComponent
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ItemComponent({ title, description, image, link }: ItemType) {
  return (
    <div className="flex h-80 w-64 flex-shrink-0 flex-col items-center justify-start overflow-hidden rounded-2xl bg-slate-100 text-slate-950">
      <div className="h-[55%] w-full bg-[#f6f6f5] py-2">
        <div className="relative h-full w-full bg-[#f6f6f5]">
          <Image src={image} fill alt="" className="object-contain" />
        </div>
      </div>
      <div className="flex w-full flex-1 flex-col items-start justify-start gap-2.5 px-4 py-2">
        <span className="mt-2 text-lg font-semibold">{title}</span>
        <p className="text-sm font-semibold text-slate-700 opacity-60">
          {description}
        </p>
        <Link
          href={link}
          target="_blank"
          className="flex items-center justify-center gap-2.5 text-orange-500"
        >
          <div className="mb-1 flex flex-col items-center justify-center">
            <span className="font-semibold">Contact</span>
            <div className="-mt-0.5 h-0.5 w-full rounded-3xl bg-orange-500 opacity-50"></div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
