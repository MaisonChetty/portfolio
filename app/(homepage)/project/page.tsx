import React from "react";
import { client, urlFor } from "@/app/lib/sanity";
import { Project } from "@/app/lib/getSocials";
import Image from "next/image";
import { groq } from "next-sanity";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
        className="absolute top-8 lg:top-10
        md:top-12 
        uppercase tracking-[20px]
         text-gray-500 text-2xl"
      >
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll
        items-center
      scroll-my-2
      scrollbar-thick
      scrollbar-track-gray-400/20
      scrollbar-thumb-[pink]/80"
      >
          <Carousel className="">
            <CarouselContent>
            {project?.map((project, i) => (
            <CarouselItem key={project._id} className="">
            <div
            className="w-auto flex-shrink-0 snap-center
          flex flex-col space-y-1 items-center justify-center
           h-screen
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
              <div className="flex flex-col items-center space-x-2 justify-center">
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
            </div>
          </div>
            </CarouselItem>
                    ))}
            </CarouselContent>
            <CarouselPrevious />
          <CarouselNext />
          </Carousel>

      </div>
    </div>
  );
}
