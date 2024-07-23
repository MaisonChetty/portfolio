import React from "react";
import ExperienceCards from "@/components/ExperienceCards";
import { client } from "@/app/lib/sanity";
import { Experience } from "@/app/lib/getSocials";
import { groq } from "next-sanity";

type Props = {};

async function getData() {
  const query = groq`
  *[_type == "experience"]{
    _id,
   points,
     companyImage,
     company,
      jobTitle,
      technologies->
  }
   `;
  const data = await client.fetch(query);

  return data;
}

export default async function page({}: Props) {
  const data: Experience[] = await getData();
  return (
    <div>
      <div
        className="h-screen
    flex
    relative
    overflow-hidden
    flex-col
    text-left
    md:flex-row
    max-w-full
    px-10
    justify-evenly
    mx-auto
    items-center"
      >
        <h3
          className="
        absolute 
        top-24
        uppercase
        tracking-[20px]
        text-gray-500
        text-2xl"
        >
          Experience
        </h3>

        <div className=" w-full flex spce-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
          {data.map((exp) => (
            <ExperienceCards key={exp._id} exprience={exp} />
          ))}
        </div>
      </div>
    </div>
  );
}
