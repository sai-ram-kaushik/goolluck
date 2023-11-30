import Image from "next/image";
import React from "react";
import { TbTimeDuration30 } from "react-icons/tb";
import { MdMode } from "react-icons/md";
import { RiPriceTag3Fill } from "react-icons/ri";
import { GiTargetPrize } from "react-icons/gi";
import investor from "@/public/assets/investor.jpg";
import { getStockMarketCourseDetails } from "@/lib/data";

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const data = await getStockMarketCourseDetails(params.slug);
  return {
    props: {
      data,
    },
  };
};

const DynamicStockMarketTraining = ({ data }) => {
  return (
    <div className="w-full p-5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-28">
          <div className="flex flex-col items-center lg:items-start">
            {data.stockMarketCourses.map((list) => (
              <div key={list.title} className="flex flex-col gap-3">
                <h2>{list.title}</h2>
                <p className="lg:max-w-[30rem] text-justify text-lg">
                  {list.desc}
                </p>
              </div>
            ))}
          </div>

          <div>
            {data.stockMarketCourses.map((list) => (
              <Image
                src={list.backDrop.url}
                key={list.id}
                alt={list.title}
                width={500}
                height={500}
                className="rounded-3xl"
              />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-24 bg-background shadow-xl rounded-lg p-5">
            {data.stockMarketCourses.map((list) => (
              <div
                key={list.slug}
                className="flex flex-col lg:flex-row items-center justify-center gap-20">
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="flex items-center gap-3">
                    <TbTimeDuration30 size={40} />
                    <span className="text-2xl font-bold">Duration</span>
                  </div>
                  <p className="text-xl font-bold">{list.duration}</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="flex items-center gap-3">
                    <MdMode size={40} />
                    <span className="text-2xl font-bold">Mode</span>
                  </div>
                  <p className="text-xl font-bold text-center">{list.mode}</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="flex items-center gap-3">
                    <RiPriceTag3Fill size={40} />
                    <span className="text-2xl font-bold">Price</span>
                  </div>
                  <p className="text-xl font-bold">{list.price}</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="flex items-center gap-3">
                    <RiPriceTag3Fill size={40} />
                    <span className="text-2xl font-bold">Requirement</span>
                  </div>
                  <p className="text-xl font-bold text-center">
                    {list.requirement}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="flex items-center gap-3">
                    <GiTargetPrize size={40} />
                    <span className="text-2xl font-bold">Rewards</span>
                  </div>
                  <p className="text-xl font-bold text-center">
                    {list.rewards}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-center lg:items-start">
            <h3>
              Course <span>Content</span>
            </h3>
          </div>

          <div className="flex flex-wrap gap-10 item-center justify-center p-3 mt-5">
            {data.courseContents.map((list) => (
              <div
                key={list.courseTitle}
                className="flex flex-col p-5 bg-background rounded-lg min-w-[10rem] max-w-[16rem] gap-3 shadow-md shadow-primary">
                <p className="text-center text-xl text-secondary font-bold">{list.courseTitle}</p>
                <p>{list.courseContentDetails}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicStockMarketTraining;
