import Button from "@/components/Button";
import TransitionEffect from "@/components/TransitionEffect";
import { training } from "@/constants";
import { getStockMarketTraining } from "@/lib/data";
import Image from "next/image";
import {
  life_at_goolluck_training_iit,
  life_at_goolluck_training_hansraj,
  life_at_goolluck_training_mdi,
  life_at_goolluck_training_imt,
  life_at_goolluck_training_offline,
} from "@/constants/index";

export const getStaticProps = async () => {
  const data = await getStockMarketTraining();
  return {
    props: {
      data,
    },
  };
};

const Stock_Market_Training = ({ data }) => {
  return (
    <section className="w-full p-5 hidden lg:block">
      <TransitionEffect />
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h3>Stock Market Training</h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 mt-10">
          {data.stockMarketTrainings.map((list) => (
            <div
              key={list.key}
              className="min-w-[600px] max-w-[900px] border border-secondary p-3 rounded-lg">
              <div className="flex flex-col gap-5 items-center">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
                  <p className="text-3xl">{list.date}</p>
                  <p>|</p>
                  <div className="flex flex-col items-center lg:items-start">
                    <p className="text-3xl">{list.title}</p>
                    <p className="text-3xl">{list.time}</p>
                    <p className="text-3xl">{list.price}</p>
                  </div>
                </div>

                <Button>
                  <a href="https://wa.me/8810473262" target="_blank">
                    Register Now
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-10">
          <h3>Stock Market Courses</h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 mt-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2">
            {data.stockMarketCourses.map((list) => (
              <div key={list.id}>
                <Image
                  src={list.backDrop.url}
                  width={300}
                  height={300}
                  alt={list.title}
                  className="rounded-xl"
                />
                <p className="text-xl font-bold">{list.title}</p>
                <p>{list.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-col gap-10 items-center justify-center mt-5">
            <div className="container mx-auto flex flex-col gap-5 items-center">
              <p className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center">
                Training Session at <span>IIT - Guwahati</span>
              </p>
              <div className="flex flex-wrap items-center gap-5 cursor-pointer">
                {life_at_goolluck_training_iit.map((item) => (
                  <div key={item.key}>
                    <Image
                      src={item.photo}
                      alt=""
                      width={300}
                      height={300}
                      className="rounded-lg hover:scale-90 duration-200"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 items-center">
              <p className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center">
                Training Session at <span>MDI, Gurgaon</span>
              </p>
              <div className="flex flex-wrap items-center justify-center gap-5 cursor-pointer">
                {life_at_goolluck_training_mdi.map((item) => (
                  <div key={item.key}>
                    <Image
                      src={item.photo}
                      alt=""
                      width={300}
                      height={300}
                      className="rounded-lg hover:scale-90 duration-200"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 items-center">
              <p className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center">
                Training Session at <span>Hansraj College, New Delhi</span>
              </p>
              <div className="flex flex-wrap justify-center items-center gap-5 cursor-pointer">
                {life_at_goolluck_training_hansraj.map((item) => (
                  <div key={item.key}>
                    <Image
                      src={item.photo}
                      alt=""
                      width={300}
                      height={300}
                      className="rounded-lg hover:scale-90 duration-200"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 items-center">
              <p className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center">
                Training Session at <span>IMT, Ghaziabad</span>
              </p>
              <div className="flex flex-wrap justify-center items-center gap-5 cursor-pointer">
                {life_at_goolluck_training_imt.map((item) => (
                  <div key={item.key}>
                    <Image
                      src={item.photo}
                      alt=""
                      width={300}
                      height={300}
                      className="rounded-lg hover:scale-90 duration-200"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 items-center">
              <p className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center">
                Offline Training at <span>Goolluck Institute</span>
              </p>
              <div className="flex flex-wrap justify-center items-center gap-5 cursor-pointer">
                {life_at_goolluck_training_offline.map((item) => (
                  <div key={item.key}>
                    <Image
                      src={item.photo}
                      alt=""
                      width={300}
                      height={300}
                      className="rounded-lg hover:scale-90 duration-200"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stock_Market_Training;
