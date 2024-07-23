import React from "react";
import { client, urlFor } from "@/app/lib/sanity";
import { Project } from "@/app/lib/getSocials";
import Image from "next/image";
import { groq } from "next-sanity";
import Link from "next/link";

type Props = {};

async function getData() {
  const query = groq`
  *[_type == "project"] | order(_createdAt desc){
    _id,
   title,
      summary,
      image,
      linkToBuilds,
      technologies->,
  }
   `;
  const project = await client.fetch(query);

  return project;
}

export default async function page() {
  const project: Project[] = await getData();
  return (
    <div>
      {project.map((post) => (
        <div
          key={post._id}
          className="h-screen relative 
    flex overflow-hidden float-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0"
        >
          <h3
            className="absolute top-24 
        uppercase tracking-[20px]
         text-gray-500 text-2xl"
          >
            Projects
          </h3>

          <div
            className="relative w-full flex overflow-x-scroll 
      overflow-y-hidden snap-x snap-mandatory z-20
      scroll-m-1
      scrollbar-thick
      scrollbar-track-gray-400/20
      scrollbar-thumb-[pink]/80"
          >
            {project?.map((project, i) => (
              // eslint-disable-next-line react/jsx-key
              <div
                key={i}
                className="w-screen flex-shrink-0 snap-center
          flex flex-col space-y-5 items-center justify-center p-20 
          md:p-44 h-screen
          "
              >
                <Link href={project?.linkToBuilds}>
                  <Image
                    className="rounded-md h-4/5 w-auto"
                    src={urlFor(project?.image).url()}
                    height={900}
                    width={900}
                    alt=""
                  />
                </Link>

                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                  <h4 className="text-4xl font-semibold text-center">
                    <span
                      className="
                underline decoration-[pink]/50"
                    >
                      Case Study {i + 1}:
                    </span>{" "}
                    {project.title}
                  </h4>
                  <div className="flex items-center space-x-2 justify-center">
                    {project.technologies?.map((technology) => (
                      <Image
                        key={technology._id}
                        height={900}
                        width={900}
                        className="h-10 w-10 rounded-full"
                        src={urlFor(technology?.image).url()}
                        alt=""
                      />
                    ))}
                  </div>

                  <p className="text-lg text-center md:text-left">
                    {project.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="w-full absolute top-[30%] bg-[pink]/10 
      left-0 h-[500px]
      -skew-y-12"
          ></div>
        </div>
      ))}
    </div>
  );
}
