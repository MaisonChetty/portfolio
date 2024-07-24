import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import "./tail.css";
import { client } from "@/app/lib/sanity";
import Dropdown from "@/components/Drop_d";
import { Social } from "@/app/lib/getSocials";
import { groq } from "next-sanity";

type Props = {};

async function getData() {
  const query = groq`
  *[_type == "social"]{
   _id,
   url
  }
`;

  const social = await client.fetch(query);

  return social;
}

export default async function Header({}: Props) {
  const social: Social[] = await getData();

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
    md:items-center
    p-2
    z-10"
    >
      <div className="flex flex-row items-center">
        {social.map((socials) => (
          <SocialIcon
            key={socials._id}
            url={socials.url}
            fgColor="transparent"
            bgColor="gray"
          />
        ))}
      </div>

      <div className="p-5 hidden md:inline-flex">
        <Link href={"./"}>
          <button className="heroButton">Home</button>
        </Link>
        <Link href={"/about"}>
          <button className="heroButton">About</button>
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
