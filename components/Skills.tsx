import React from "react";
import { Skill } from "@/app/lib/getSocials";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

export default async function Skills({ skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer ">
      <Image
        src={urlFor(skill.image).url()}
        height={900}
        width={900}
        alt=""
        className=" rounded-full border border-gray-500 
            object-cover w-16 h-16 md:w-16 md:h-16 xl:w-24 xl:h-24 filter group-hover:grayscale
            transition duration-300 ease-in-out"
      />
      <div
        className=" absolute opacity-0 group-hover:opacity-80 
            transition duration-300 ease-in-out group-hover:bg-white
            w-16 h-16 md:w-16 md:h-16 xl:w-24 xl:h-24 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className=" text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
