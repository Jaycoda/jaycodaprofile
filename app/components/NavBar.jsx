"use client";

import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="bg-gray-800 mb-2 h-10 flex text-white px-4 items-center justify-between sticky top-0">
      <div className={` flex gap-2  ${click ? "opacity-0" : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/setting">Setting</Link>
      </div>
      <div onClick={handleClick} className="cursor-pointer">
        {click ? <p>menuclose</p> : <p>menuopen</p>}
      </div>
    </div>
  );
};

export default NavBar;
