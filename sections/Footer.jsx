import Image from "next/image";
import logo from "@/public/assets/goolluck_investments_logo.png";
import { menuList } from "@/constants";
import { socials } from "@/constants";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full bg-footer p-5 py-5 mt-3">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <Image src={logo} alt="logo" width={200} height={200} />
        </div>

        <div className="hidden lg:flex flex-wrap items-center justify-center gap-10 mt-5">
          {menuList.map((link) => (
            <ul key={link.key} className="hover:text-secondary duration-200">
              <Link href={link.path}>
                <li>{link.label}</li>
              </Link>
            </ul>
          ))}
        </div>

        <div className="p-8 border-t border-gray-800 border-b flex flex-wrap items-center gap-10 lg:gap-28 justify-center mt-10">
          <div className="flex items-center gap-2">
            <AiOutlineMail size={20} className="text-secondary" />
            <p>info@goolluck.in</p>
          </div>

          <div className="flex items-center gap-2">
            <BiPhoneCall size={20} className="text-secondary" />
            <p>+91 96545572859</p>
          </div>

          <div className="flex items-center gap-2">
            <CiLocationOn size={20} className="text-secondary" />
            <p>Gurugram, India</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-5 mt-10">
          <div className="flex items-center gap-5 cursor-pointer">
            {socials.map((link) => (
              <div
                key={link.key}
                className="bg-secondary text-black rounded-full p-3">
                <div>{link.icon}</div>
              </div>
            ))}
          </div>

          <div>
            <p>Goolluck Investments. All Rights Reserved</p>
          </div>

          <div className="flex items-center gap-3">
              <p>Privacy Policy</p>
              <p>|</p>
              <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
