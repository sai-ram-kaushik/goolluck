import { MdBusinessCenter } from "react-icons/md";
import { BiSolidSchool } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
export const menuList = [
  { label: "Home", path: "/", key: "Home" },
  { label: "About Us", path: "/#about", key: "About" },
  {
    label: "Stock Market Training",
    path: "/stock-market-training",
    key: "Stock Market Training",
  },
  {
    label: "Investment Platform",
    path: "/investment-platform",
    key: "Investment Platform",
  },
  {
    label: "Virtual Stock Market",
    path: "/virtual-stock-market",
    key: "Virtual Stock Market",
  },
  {
    label: "Life @ Goolluck",
    path: "/ife-at-goolluck",
    key: "Life @ Goolluck",
  },
  { label: "Contact Us", path: "/contact", key: "Contact Us" },
];

export const about_list = [
  {
    label: "Comprehensive Financial Services",
    key: "Comprehensive Financial Services",
    icon: <MdBusinessCenter size={70} />,
    desc: "GOOLLUCK INVESTMENTS serves as your reliable and comprehensive financial service provider. We understand the importance of your financial goals and strive to offer tailored solutions. With years of industry experience, we are committed to assisting individuals and businesses in achieving financial success.",
  },

  {
    label: "Leading Financial Training Institute",
    key: "Leading Financial Training Institute",
    icon: <BiSolidSchool size={70} />,
    desc: "As a leading financial training institute, we are dedicated to empowering individuals and professionals. Our focus is on providing knowledge and skills essential for excelling in the dynamic world of finance. Through a commitment to excellence, innovation, and a passion for education, we have become a trusted resource for financial education and training.",
  },

  {
    label: "Commitment to Excellence and Innovation",
    key: "Commitment to Excellence and Innovation",
    icon: <BsFillPersonFill size={60} />,
    desc: "At GOOLLUCK INVESTMENTS, our commitment to excellence and innovation sets us apart. We are not just financial experts but also dedicated educators, ensuring you have the tools for success. Count on us as a trusted partner in your financial journey, where a passion for education drives our commitment to your financial well-being.",
  },
];
