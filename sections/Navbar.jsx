import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import { menuList } from "@/constants";
import Link from "next/link";
import { GrFormClose } from "react-icons/gr";
import { BiMenuAltRight } from "react-icons/bi";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleChange = () => {
    setNav(!nav);
  };

  return (
    <nav className="w-full h-20 z-[999] bg-background lg:bg-transparent sticky top-0">
      <div className="container mx-auto max-w-[1920px] lg:w-[1340px]  2xl:w-[1569px] h-full lg:border 2xl:border-secondary lg:p-2 lg:bg-background rounded-full">
        <div className="flex items-center justify-between w-full h-full px-4 lg:px-16">
          <div>
            <Link href="/">
              <Image src={logo} alt="logo" width={270} height={270} />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-10 text-[14px] 2xl:text-lg">
            {menuList.map((link) => (
              <ul
                key={link.key}
                className="hover:text-secondary transition-all duration-150">
                <Link href={link.path}>{link.label}</Link>
              </ul>
            ))}
          </div>

          <div
            className="inline-block lg:hidden p-2 bg-secondary rounded-full text-black"
            onClick={handleChange}>
            {nav ? <GrFormClose size={30} /> : <BiMenuAltRight size={30} />}
          </div>
        </div>

        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-background p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 h-screen p-10 ease-in duration-700"
          }>
          <Link href="/" onClick={handleChange}>
            <Image src={logo} alt="logo" width={150} height={150} />
          </Link>
          <div className="flex flex-col items-center justify-center w-full h-full gap-10">
            {menuList.map((link) => (
              <ul
                key={link.key}
                className="text-xl text-background"
                onClick={handleChange}>
                <Link
                  href={link.path}
                  className="text-primary hover:text-secondary text-center duration-200">
                  <li>{link.label}</li>
                </Link>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
