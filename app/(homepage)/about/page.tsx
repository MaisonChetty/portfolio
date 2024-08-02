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
    <div
      className="    
    flex-1
    overflow-scroll
    p-2
    lg:p-5"
    >
      {data.map((post, idx) => (
        <div
          key={idx}
          className="
          flex 
          flex-col
    h-screen
    text-center
    md:text-left md:flex-row
    max-w-7xl 
    px-10 
    justify-evenly
    mx-auto 
    items-center"
        >
          <h3
            className="absolute
        uppercase tracking-[20px]
         text-white text-2xl md:text-3xl lg:text-4xl top-24"
          >
            About
          </h3>
          <Image
            src={urlFor(post.profilePic).url()}
            height={900}
            width={900}
            alt=""
            className="mb-20 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover
         md:rounded-lg md:w-64px  md:h-64px xl:w-[400px] xl:h-[500px]"
          />
          <div className=" space-y-10 md:px-10 items-center">
            <h4 className="md:text-4xl text-xl font-semibold ">
              Here is a{" "}
              <span className="underline decoration-[#84e0ff]">little</span>{" "}
              background
            </h4>
            <p className="text-base justify-center">
              My name is Maison Chetty, a passionate Web and Game Developer
              based in Johannesburg, South Africa.
              <br />
              As part of my final year of study, I am currently seeking a work
              Integrated learning internship in Web development or Game
              Development.
              <br />
              Academically I will complete a Diploma in Information Technology
              in Nov 2024 and BSC Degree in Information Technology in Nov 2025.
              With multiple academic distinctions in Software Engineering,
              Information Systems, Internet Programming, Database Systems, Web
              Technology, Networks and Programming.
              <br />
              I excel in React, Tailwind CSS, NextJS, Unity, and Unreal Engine.
              Professionally, I have assisted in developing and maintaining a
              WordPress website for Blue Storm Trading and have sales
              experience. My extracurricular achievements include top-three in
              the Sonny Sangha Metaverse Challenge with NextJS and World
              Championships in karate.
              <br />I am eager to apply my skills and contribute to innovative
              projects through this internship.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
