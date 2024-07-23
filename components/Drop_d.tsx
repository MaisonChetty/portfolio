"use client";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";
import React, { useState } from "react";

function Drop() {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <div>
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
  );
}

export default Drop;
