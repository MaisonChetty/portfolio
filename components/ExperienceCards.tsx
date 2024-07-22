import React from "react";
import Image from "next/image";
import { client, urlFor } from "@/app/lib/sanity";
import { experience } from "@/app/lib/getSocials";

type Props = {};

async function getData() {
  const query = `
*[_type == "experience"]  | order(_createdAt desc){
title,
  technologies,
  company,
  companyImage,
  dateStarted,
  dateEnded,
  jobTitle,
  points
}
  
    `;
  const data = await client.fetch(query);

  return data;
}

export default async function ExperienceCards() {
  const data: experience[] = await getData();
  return (
    <div>
      {data.map((post, idx) => (
        <article
          key={idx}
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
        overflow-hidden"
        >
          <Image
            className=" w-32 h-32 rounded-full xl:w-200 xl:h-200 object-cover object-center"
            src={urlFor(post.companyImage).url()}
            height={1}
            width={1}
            alt=""
          />

          <div className="px-0 md:px-10 ">
            <h4 className="text-4xl font-light">{post.jobTitle}</h4>
            <p className="font-bold text-2xl mt-1 ">{post.company}</p>
            <div className=" flex space-x-2 my-2">
              <Image
              height={1}
              width={1}
              className="h-10 w-10 rounded-full" 
              src={urlFor(post.companyImage).url()}
              alt="" />
            </div>
            <p className="uppercase py-5 text-gray-300">
              started work ...- Ended...
            </p>

            <ul className=" list-disc space-y-4 ml-5 text-lg">
              <li>{post.title}</li>
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
