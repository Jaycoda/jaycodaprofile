"use client";

import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="bg-cyan-200 mb-2 h-10 flex items-center justify-between px-4 ">
      <div className={` flex gap-2 bg-red-100  ${click ? "opacity-0" : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <div onClick={handleClick} className="cursor-pointer">
        {click ? <p>menuclose</p> : <p>menuopen</p>}
      </div>
    </div>
  );
};

export default NavBar;
