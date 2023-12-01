import Image from "next/image";
import React from "react";
import { TbTimeDuration30 } from "react-icons/tb";
import { MdMode } from "react-icons/md";
import { RiPriceTag3Fill } from "react-icons/ri";
import { GiTargetPrize } from "react-icons/gi";
import { getStockMarketCourseDetails } from "@/lib/data";
import TransitionEffect from "@/components/TransitionEffect";

export const getServerSideProps = async ({ params }) => {
  const data = await getStockMarketCourseDetails(params.slug);
  return {
    props: {
      data,
    },
  };
};

const DynamicStockMarketTraining = ({ data }) => {
  if (!data || !Array.isArray(data.stockMarketCourses)) {
    return <div>No course data available</div>;
  }
  return (
    <div className="w-full p-5">
      <TransitionEffect />
      {data.stockMarketCourses.map((list, index) => (
        <div className="container mx-auto" key={index}>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-28">
            <div className="flex flex-col items-center lg:items-start">
              <div key={list.id} className="flex flex-col gap-3">
                <h2>{list.title}</h2>
                <p className="lg:max-w-[30rem] text-justify text-lg">
                  {list.desc}
                </p>
              </div>
            </div>

            <div>
              <Image
                src={list.backDrop.url}
                key={list.id}
                alt={list.title}
                width={500}
                height={500}
                className="rounded-3xl"
              />
            </div>
          </div>

          <div className="mt-10">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-24 bg-background shadow-xl rounded-lg p-5">
              <div
                key={list.id}
                className="flex flex-col lg:flex-row items-center justify-center gap-20">
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="flex items-center gap-3">
                    <TbTimeDuration30 size={40} />
                    <span className="text-2xl font-bold">Duration</span>
                  </div>
                  <p className="text-xl font-bold">{list.duration}</p>
                </div>

                <div className="text-3xl hidden lg:block">|</div>

                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="flex items-center gap-3">
                    <MdMode size={40} />
                    <span className="text-2xl font-bold">Mode</span>
                  </div>
                  <p className="text-xl font-bold text-center">{list.mode}</p>
                </div>

                <div className="text-3xl hidden lg:block">|</div>

                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="flex items-center gap-3">
                    <RiPriceTag3Fill size={40} />
                    <span className="text-2xl font-bold">Price</span>
                  </div>
                  <p className="text-xl font-bold">{list.price}</p>
                </div>

                <div className="text-3xl hidden lg:block">|</div>

                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="flex items-center gap-3">
                    <RiPriceTag3Fill size={40} />
                    <span className="text-2xl font-bold">Requirement</span>
                  </div>
                  <p className="text-xl font-bold text-center">
                    {list.requirement}
                  </p>
                </div>

                <div className="text-3xl hidden lg:block">|</div>

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
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-center">
              <h3>
                Course <span>Content</span>
              </h3>
            </div>

            <div className="flex flex-wrap gap-10 item-center justify-center p-3 mt-5">
              {list.courseContents.map((course) => (
                <div key={course.id} className="flex flex-col items-center text-center bg-background gap-3 p-5 shadow-xl border border-primary rounded-xl min-w-[10rem] max-w-[20rem]">
                  <p className="text-secondary font-bold text-xl">{course.courseTitle}</p>
                  <p className="font-semibold text-lg text-justify">{course.courseContentDetails}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DynamicStockMarketTraining;
