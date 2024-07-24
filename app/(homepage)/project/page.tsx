import React from "react";
import { client, urlFor } from "@/app/lib/sanity";
import { Project } from "@/app/lib/getSocials";
import Image from "next/image";
import { groq } from "next-sanity";
import Link from "next/link";

type Props = {};

async function getData() {
  const query = groq`
  *[_type == "project"] | order(_createdAt asc){
    _id,
   title,
      summary,
      image,
      linkToBuilds,
      technologies->}
   `;
  const project = await client.fetch(query);

  return project;
}

export default async function page() {
  const project: Project[] = await getData();
  return (
    <div
      className="h-screen relative 
    flex overflow-hidden float-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0
    overflow-x-scroll"
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
      scroll-mx-2
      scrollbar-thick
      scrollbar-track-gray-400/20
      scrollbar-thumb-[pink]/80"
      >
        {project?.map((project, i) => (
          // eslint-disable-next-line react/jsx-key
          <div
          key={project._id}
            className="w-screen flex-shrink-0 snap-center
          flex flex-col space-y-1 items-center justify-center p-20 
          md:p-44 h-screen
          "
          >
            <Link href={project?.linkToBuilds}>
              <Image
                className="rounded-md h-4/5 w-auto md:h-3/5 lg:h-4/5"
                src={urlFor(project?.image).url()}
                height={900}
                width={900}
                alt=""
              />
            </Link>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="md:text-4xl text-xl  font-semibold text-center">
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

              {/* <p className="text-lg text-center md:text-left">
                {project.summary}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
