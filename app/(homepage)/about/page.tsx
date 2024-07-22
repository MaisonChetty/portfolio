import { pageInfo } from "@/app/lib/getSocials";
import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import React from "react";

type Props = {};

async function getData() {
  const query = `
*[_type == "pageInfo"]  | order(_createdAt desc){
backgroundInfo,
  profilePic
}
   `;
  const data = await client.fetch(query);

  return data;
}

export default async function About({}: Props) {
  const data: pageInfo[] = await getData();
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
            className="absolute lg:top-24
        md:top-14 top-7
        uppercase tracking-[20px]
         text-white text-2xl md:text-3xl lg:text-4xl"
          >
            About
          </h3>
          <Image
            src={urlFor(post.profilePic).url()}
            height={1}
              width={1}
            alt=""
            className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
         md:rounded-lg md:w-64px md:h-64px xl:w-[400px] xl:h-[500px]"
          />

          <div className=" space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold ">
              Here is a{" "}
              <span className="underline decoration-[#84e0ff]">little</span>{" "}
              background
            </h4>
            <p className="text-base justify-center">{post.backgroundInfo}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
