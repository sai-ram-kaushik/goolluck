import React from "react";
import { MdBusinessCenter } from "react-icons/md";
import { RiStockFill } from "react-icons/ri";
import rohit from "@/public/assets/team/rohit.png";
import Image from "next/image";
import { team } from "@/constants";
import TransitionEffect from "@/components/TransitionEffect";
import portfolio from "@/public/portfolio.svg";
import stock from "@/public/stock.svg";
const About = () => {
  return (
    <section className="w-full p-5">
      <TransitionEffect />
      <div className="container mx-auto">
        <div className="flex justify-center">
          <h3>
            About <span>Goolluck Investments</span>
          </h3>
        </div>

        <div className="flex items-center justify-center gap-32 mt-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-52 mt-10">
          <div className="flex flex-col items-center gap-10">
            <h3 className="text-4xl text-secondary">Portfolio Advisory Firm</h3>
            <p className="text-lg text-justify">
              Welcome to <b>GOOLLUCK INVESTMENTS</b>, your reliable and
              comprehensive financial service provider. We understand the
              importance of your financial goals and strive to offer tailored
              solutions that meet your unique needs. With years of experience in
              the industry, we have established ourselves as industry experts
              committed to assisting individuals and businesses in achieving
              financial success.
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-10">
            <h3 className="text-4xl text-secondary">Stock Market Training Institute</h3>
            <p className="text-justify  text-lg">
              As a leading financial training institute, we are dedicated to
              empowering individuals and professionals. Our focus is on
              providing knowledge and skills essential for excelling in the
              dynamic world of finance. Through a commitment to excellence,
              innovation, and a passion for education, we have become a trusted
              resource for financial education and training.
            </p>
          </div>
        </div>

         
        </div>

        <div className="flex items-center justify-center mt-10">
          <h3>
            Our <span>Team</span>
          </h3>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 mt-5">
            <Image
              src={rohit}
              alt="rohit"
              width={250}
              height={250}
              className="rounded-full border-2 border-secondary"
            />
            <p className="text-2xl text-secondary font-bold">Rohit Mongia</p>
            {/* <p className="font-bold">{list.designation}</p> */}
            <p className="max-w-[600px] text-justify text-sm lg:text-lg">
              Possesses over 20+ years of Stock Market Investing Experience. 19
              Times winner of CNBC Bulls Eye Contest (Best Portfolio Manager
              Contest in the Country). Derivatives Expert with Zee Business Live
              News Channel. Equity Expert with Investor India Magzine. Former
              Trainer at State Street Corp US for Hedge fund Training.
              Ex-National Head for Stock Broking Arm of Bajaj Capital.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
          {team.map((list) => (
            <div key={list.key} className="flex flex-col items-center gap-2">
              <Image
                src={list.photo}
                alt={list.name}
                width={250}
                height={250}
                className="rounded-full border-2 border-secondary"
              />
              <p className="text-2xl text-secondary font-bold">{list.name}</p>
              {/* <p className="font-bold">{list.designation}</p> */}
              <p className="max-w-[400px] text-justify text-sm lg:text-lg">
                {list.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
