import Image from "next/image";
import React from "react";
import { TbTimeDuration30 } from "react-icons/tb";
import { MdMode } from "react-icons/md";
import { RiPriceTag3Fill } from "react-icons/ri";
import { GiTargetPrize } from "react-icons/gi";
import investor from "@/public/assets/investor.jpg";
const DynamicStockMarketTraining = () => {
  return (
    <div className="w-full p-5">
      <div className="container mx-auto">
        <div className="flex flex-col items-start  justify-start">
          <div className="flex items-center justify-center gap-56 px-28">
            <div className="flex flex-col items-center lg:items-start gap-8 py-16">
              <h2>Investor Module</h2>
              <p className="lg:max-w-[34rem] text-lg">
                Welcome to our Investor module designed to equip you with the
                knowledge and skills needed for successful investing. This
                module covers four key areas that form the foundation of a
                robust investment portfolio.
              </p>
            </div>

            <div>
              <Image src={investor} width={400} height={400} alt="investor" />
            </div>
          </div>

          <div className="flex items-center py-5 bg-background shadow-xl p-5">
            <div className="flex items-center gap-20">
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="flex items-center gap-3">
                  <TbTimeDuration30 size={40} />
                  <span className="text-2xl font-bold">Duration</span>
                </div>
                <p className="text-2xl font-bold">1 month</p>
              </div>

              <div className="text-4xl">|</div>

              <div className="flex flex-col items-center justify-center gap-3">
                <div className="flex items-center gap-3">
                  <MdMode size={40} />
                  <span className="text-2xl font-bold">Mode</span>
                </div>
                <p className="text-2xl font-bold">Online</p>
              </div>

              <div className="text-4xl">|</div>

              <div className="flex flex-col items-center justify-center gap-3">
                <div className="flex items-center gap-3">
                  <RiPriceTag3Fill size={40} />
                  <span className="text-2xl font-bold">Price</span>
                </div>
                <p className="text-2xl font-bold">Rs. 12,000</p>
              </div>

              <div className="text-4xl">|</div>

              <div className="flex flex-col items-center justify-center gap-3">
                <div className="flex items-center gap-3">
                  <TbTimeDuration30 size={40} />
                  <span className="text-2xl font-bold">Requirement</span>
                </div>
                <p className="text-2xl font-bold">No</p>
              </div>

              <div className="text-4xl">|</div>

              <div className="flex flex-col items-center justify-center gap-3">
                <div className="flex items-center gap-3">
                  <GiTargetPrize size={40} />
                  <span className="text-2xl font-bold">Rewards</span>
                </div>
                <p className="text-2xl font-bold">Certificate</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-8 py-16 px-28">
            <h3>Course <span>Content</span></h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-10 px-28">
            <div className="flex items-center gap-5">
              <p className="p-3 bg-secondary rounded-full text-background">1</p>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <p className="text-3xl font-playfair font-bold">
                  IPO&apos;s(Initial Public Offering) Investing
                </p>
                <ul
                  role="list"
                  className="marker:text-secondary list-disc pl-5">
                  <li>Introduction</li>
                  <li>How to Select and how to apply</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <p className="p-3 bg-secondary rounded-full text-background">2</p>
              <div className="flex flex-col items-center justify-center lg:items-start gap-2">
                <p className="text-3xl font-playfair font-bold">Mutual Fund</p>
                <ul
                  role="list"
                  className="marker:text-secondary list-disc pl-5">
                  <li>How to select</li>
                  <li>How to invest</li>
                  <li>SIP Vs Lumsum</li>
                  <li>When to make transitions</li>
                  <li>Grey Areas</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <p className="p-3 bg-secondary rounded-full text-background">3</p>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <p className="text-3xl font-playfair font-bold">
                  Smarter than FD&apos;s (Bonds)
                </p>
                <ul
                  role="list"
                  className="marker:text-secondary list-disc pl-5">
                  <li>Investing in bonds Longer or Shorter dated bonds</li>
                  <li>How to select</li>
                  <li>When to invest</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <p className="p-3 bg-secondary rounded-full text-background">4</p>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <p className="text-3xl font-playfair font-bold">
                  Fundamental Analysis
                </p>
                <ul
                  role="list"
                  className="marker:text-secondary list-disc pl-5">
                  <li>Portfolio during different market scenarios</li>
                  <li>Stocks for Long Term</li>
                  <li>Challenges, how to manage them</li>
                  <li>How much I can make, the magic Figure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicStockMarketTraining;
