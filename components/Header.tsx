"use client";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import "./tail.css";
import Dropdown from "./Dropdown";
import Image from "next/image";

type Props = {};

export default function Header({}: Props) {
  const [openProfile, setOpenProfile] = useState(false);
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
        <SocialIcon
          url="https://www.tiktok.com/@flower_floof_"
          fgColor="transparent"
          bgColor="gray"
        />
        <SocialIcon
          url="https://www.youtube.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/kiarawoods472/?next=%2F"
          fgColor="gray"
          bgColor="transparent"
        />
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

        {openProfile && <Dropdown />}
        <Link href="" onClick={() => setOpenProfile((prev) => !prev)}>
          <Image
            height={16}
            width={16}
            src="https://www.svgrepo.com/show/336707/drop-down-list.svg"
            alt="Dropdown Menu"
            className="md:hidden"
          />
        </Link>
      </div>
    </header>
  );
}
