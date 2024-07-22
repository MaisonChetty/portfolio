import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import "./tail.css";
import { client } from "@/app/lib/sanity";
import Dropdown from "@/components/Drop_d"
import { social } from "@/app/lib/getSocials";

type Props = {};

async function getData() {
  const query =`
    *[_type == "social"] | order(_createdAt desc){
title,
  url
}`

const data = await client.fetch(query)

return data
}



export default async function Header({}: Props) {
  const data:social[] = await getData();

  return (
    <header
      className="
      sticky
      top-0
    bg-white
    shadow-sm 
    text-gray-800
    flex 
    justify-between 
    p-2
    z-10"
    >
      <div className="flex flex-row items-center">
        {data.map((post, idx,) => (
          <SocialIcon
            key={idx}
            url={post.url}
            fgColor="transparent"
            bgColor="gray"
          />
        ))}
      </div>

      <div className="p-5 hidden md:inline-flex">
        <Link href={"/about"}>
          <button className="heroButton">About</button>
        </Link>
        <Link href={"/experience"}>
          <button className="heroButton">Experience</button>
        </Link>
        <Link href={"/skills"}>
          <button className="heroButton">Skills</button>
        </Link>
        <Link href={"/project"}>
          <button className="heroButton">Projects</button>
        </Link>
      </div>

      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          url="/contact"
        />
        <Link href="/contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in touch
          </p>
        </Link>

        <Dropdown />
      </div>
    </header>
  );
}

