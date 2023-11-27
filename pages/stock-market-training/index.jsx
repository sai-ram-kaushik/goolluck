import TransitionEffect from "@/components/TransitionEffect";
import { getStockMarketTraining } from "@/lib/data";
import Image from "next/image";
import {
  life_at_goolluck_training_iit,
  life_at_goolluck_training_hansraj,
  life_at_goolluck_training_mdi,
  life_at_goolluck_training_imt,
  life_at_goolluck_training_offline,
} from "@/constants";
import Link from "next/link";
import Scroll from "@/components/Scroll";

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
    <section className="w-full p-5">
      <TransitionEffect />
      <Scroll />
      <div className="container mx-auto">
        <div className="flex items-center justify-center mt-10">
          <p className="text-4xl font-playfair font-bold">
            Instructions for New Upcoming Batch
          </p>
        </div>

        <div className="flex flex-col items-center text-center lg:text-start mt-5">
          <p className="lg:max-w-[80rem] text-lg">
            Welcome to Goolluck Investments: Stock market training Institute,
            where Our mission is to convert your financial dreams into
            actionable plans and equip you with the knowledge and skills needed
            to navigate the dynamics world of finance. Below are the terms and
            conditions for our upcoming batch. Please read them carefully to
            ensure a smooth and enriching learning experience:
          </p>

          <ul
            role="list"
            className="marker:text-secondary list-decimal lg:max-w-[70rem] text-lg">
            <li>
              The first class serves as a trial or complementary session for you
              to get a feel for our teaching methods and course content.
            </li>

            <li>
              Live Training and No Recording: Our training is conducted live to
              align with the changing dynamics of the market. Recordings will
              not be provided to ensure real-time engagements and interaction.
            </li>

            <li>
              Receive a comprehensive Bullet points rule book to guide you
              through the essentials of financial trading.
            </li>

            <li>
              For Pro-Traders: If, within the 3-month training period, you are
              unable to make a profit or incur losses, we refund your full
              course fees.
            </li>

            <li>
              If, after completing the course, you find it challenging to
              understand certain concepts you can re-enroll for classes without
              paying additional fees.
            </li>

            <li>
              Enroll in a group of 2 or more and enjoy a flat 20% additional
              discount on the total fees.
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center mt-10">
          <h3>
            Stock <span>Market Courses</span>
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 mt-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
            {data.stockMarketCourses.map((list) => (
              <Link href={`/stock-market-training/${list.slug}`} key={list.id}>
                <div className="flex flex-col items-center lg:items-start gap-2 border border-secondary p-5 rounded-xl sha">
                  <Image
                    src={list.backDrop.url}
                    width={300}
                    height={300}
                    alt={list.title}
                    className="rounded-xl"
                  />
                  <p className="text-xl text-center lg:text-start font-bold">
                    {list.title}
                  </p>
                  <p className="lg:w-[15rem] text-center lg:text-start">
                    {list.desc.slice(0, 100)}{" "}
                    {list.desc.length > 100 ? "..." : ""}
                    {/* {list.desc} */}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center mt-10">
          <h3>Previous Training Sessions</h3>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-col gap-10 items-center justify-center mt-5">
            <div className="container mx-auto flex flex-col gap-5 items-center">
              <p className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center">
                Workshop at <span>IIT - Guwahati</span>
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
                Workshop at <span>MDI, Gurgaon</span>
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
                Workshop at <span>Hansraj College, New Delhi</span>
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
                Workshop at <span>IMT, Ghaziabad</span>
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
