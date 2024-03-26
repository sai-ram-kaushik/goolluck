import React from "react";
import { MdBusinessCenter } from "react-icons/md";
import { RiStockFill } from "react-icons/ri";
import rohit from "@/public/assets/team/rohit.png";
import Image from "next/image";
import { team } from "@/constants";
import TransitionEffect from "@/components/TransitionEffect";

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

        <div className="flex flex-col md:flex-row items-center justify-center gap-32 mt-10">
          <div className="artboard phone-2 bg-background shadow-xl shadow-secondary rounded-xl border-2 border-secondary h-full w-full">
            <div className="flex flex-col gap-5 items-center justify-center h-full">
              <MdBusinessCenter size={90} />
              <h4 className="text-3xl text-center font-bold text-secondary">
                Portfolio Advisory Firm
              </h4>
              <ol
                role="list"
                className="marker:text-secondary list-decimal text-xl flex flex-col items-start px-10 py-5"
              >
                <li className="font-bold">Introduction:</li>
                <ul
                  role="list"
                  className="marker:text-secondary list-disc w-full mt-2"
                >
                  <li className="ml-5 ">Welcome to Goolluck Investments.</li>
                  <li className="ml-5 text-start text-lg">
                    We are a reliable and comprehensive financial service
                    provider.
                  </li>
                </ul>
                <li className="font-bold mt-2">
                  Understanding of Client Goals:
                </li>
                <ul role="list" className="marker:text-secondary list-disc">
                  <li className="ml-5 text-start text-lg mt-2">
                    We understand the importance of your financial goals.
                  </li>
                  <li className="ml-5 text-start text-lg">
                    We strive to offer tailored solutions that meet your unique
                    needs.
                  </li>
                </ul>
              </ol>
            </div>
          </div>

          <div className="artboard phone-2 bg-background shadow-xl shadow-secondary rounded-xl border-2 border-secondary h-full w-full">
            <div className="flex flex-col gap-5 items-center justify-center h-full">
              <RiStockFill size={90} />
              <h4 className="text-3xl text-center font-bold text-secondary">
                Stock Market Training Institute
              </h4>
              <ol
                role="list"
                className="marker:text-secondary list-decimal text-xl flex flex-col items-start px-10 py-5"
              >
                <li className="font-bold">Introduction:</li>
                <ul
                  role="list"
                  className="marker:text-secondary list-disc w-full mt-2"
                >
                  <li className="ml-5 ">
                    As a leading financial training institute.
                  </li>
                </ul>
                <li className="font-bold mt-2">Mission:</li>
                <ul role="list" className="marker:text-secondary list-disc">
                  <li className="ml-5 text-start text-lg mt-2">
                    Dedicated to empowering individuals and professionals.
                  </li>
                  <li className="ml-5 text-start text-lg">
                    Providing knowledge and skills essential for excelling in
                    finance.
                  </li>
                </ul>
                <li className="font-bold mt-2">Core Values:</li>
                <ul role="list" className="marker:text-secondary list-disc">
                  <li className="ml-5 text-start text-lg mt-2">
                    Commitment to excellence.
                  </li>
                  <li className="ml-5 text-start text-lg">
                    Embracing innovation.
                  </li>
                </ul>
              </ol>
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
