import React from "react";
import Image from "next/image";
import { client, urlFor } from "@/app/lib/sanity";
import { Experience } from "@/app/lib/getSocials";

type Props = {
  exprience: Experience;
};

export default async function ExperienceCards({ exprience }: Props) {
  return (
    <div>
      <article
        className="flex 
        flex-col 
        rounded-l 
        items-center 
        space-y-7 
        flex-shrink-0 
        w-[400px] 
        md:w-[600px] 
        xl:w-[600px] 
        snap-center 
        p-10 
        bg-[#292929]
        hover:opacity-100 
        opacity-40 
        cursor-pointer 
        transition-opacity 
        duration-200 
        h-full
        overflow-hidden"
      >
        <Image
          height={900}
          width={900}
          className=" w-32 h-32 rounded-full xl:w-200 xl:h-200 object-cover object-center"
          src={urlFor(exprience?.companyImage).url()}
          alt=""
        />

        <div className="px-0 md:px-10 ">
          <h4 className="text-4xl font-light">Experience</h4>
          <p className="font-bold text-2xl mt-1 ">{exprience?.company}</p>
          <div className=" flex space-x-2 my-2">
            {exprience.technologies?.map((technology, idx) => (
              <Image
                key={idx}
                height={900}
                width={900}
                className="h-10 w-10 rounded-full"
                src={urlFor(technology?.image).url()}
                alt=""
              />
            ))}
          </div>
          <p className="uppercase py-5 text-gray-300">
            started work ...- Ended...
          </p>

          <ul className=" list-disc space-y-4 ml-5 text-lg scroll-smooth">
            {exprience.points?.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
