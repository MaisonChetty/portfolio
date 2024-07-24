import { PageInfo } from "@/app/lib/getSocials";
import { client, urlFor } from "@/app/lib/sanity";
import { groq } from "next-sanity";
import Image from "next/image";
import React from "react";

type Props = {};

async function getData() {
  const query = groq`
*[_type == "pageInfo"]  | order(_createdAt desc){
  background_Info,
  profilePic

}
   `;
  const data = await client.fetch(query);

  return data;
}

export default async function About({}: Props) {
  const data: PageInfo[] = await getData();
  return (
    <div>
      {data.map((post, idx) => (
        <div
          key={idx}
          className="flex flex-col  overflow-hidden
    relative 
    h-screen
    text-center
    md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center"
        >
          <h3
            className="absolute top-24
        uppercase tracking-[20px]
         text-white text-2xl md:text-3xl lg:text-4xl"
          >
            About
          </h3>
          <Image
            src={urlFor(post.profilePic).url()}
            height={900}
            width={900}
            alt=""
            className="mb-20 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover
         md:rounded-lg md:w-64px md:h-64px xl:w-[400px] xl:h-[500px]"
          />

          <div className=" space-y-10 px-0 md:px-10">
            <h4 className="md:text-4xl text-xl font-semibold ">
              Here is a{" "}
              <span className="underline decoration-[#84e0ff]">little</span>{" "}
              background
            </h4>
            <p className="text-base justify-center">{post.background_Info}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
