import TransitionEffect from "@/components/TransitionEffect";
import { team } from "@/constants";
import rohit from "@/public/assets/team/rohit.png";
import Image from "next/image";
const index = () => {
  return (
    <section className="w-full p-5">
      <TransitionEffect />
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h3>
            About <span>Goolluck Investments</span>
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-52 mt-10">
          <div className="flex flex-col items-center gap-10">
            <h3 className="text-4xl">Portfolio Advisory Firm</h3>
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
            <h3 className="text-4xl">Stock Market Training Institute</h3>
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

        <div className="flex items-center justify-center mt-10">
          <h3>
            Why <span>Goolluck Investments</span>
          </h3>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 py-10 ">
          <p className="text-xl lg:max-w-[80rem] text-justify">
            Welcome to GOOLLUCK INVESTMENTS: Where expertise meets excellence in
            Stock market training.
          </p>

          <p className="lg:max-w-[80rem] text-xl text-justify">
            Unlock the secrets of successful trading with Goolluck Investments,
            your gateway to a world of financial possibilities. Our instructors
            bring real-world experience and proven strategies to the forefront,
            ensuring you receive top-notch education from the very best. Our
            unique approach sets us apart, and here’s why you should choose
            GOOLLUCK INVESTMENT for stock market training
          </p>

          <ul
            role="list"
            className="marker:text-secondary list-decimal lg:max-w-[70rem] text-xl text-justify p-5 lg:p-0"
          >
            <li>
              Learn from champions: Gain a competitive edge, and Benefit
              yourself from training by the 19 times winner of CNBC Bulls Eye
              contest (Best Portfolio Manager Contest). BSE and NISM certified
              trainers.{" "}
            </li>
            <li>
              Notable Speaker: Featured as speaker at Antim Bazzi on Zee
              Business News Channel, our experts are trusted voices in the
              financial industry. Learn from the best to become the best.
            </li>
            <li>
              Global Expertise: Our trainers boast a background of Trainers for
              Hedge funds at State Street, US. Understand the dynamics of
              international markets and refine your trading skills with a truly
              global perspective.
            </li>
            <li>
              Real-time Learning, Real-time Results: We go beyond historical
              data. Witness the power of our strategies as we showcase live
              trades in our personal portfolio. Transparency and real-time
              results are the cornerstones of our approach, ensuring you stay
              informed and confident in your financial decisions.
            </li>
            <li>
              Unmatched Support: Your success is our priority. Enjoy the
              advantage of multiple revisions at no extra cost. We believe in
              refining your skills until you are confident and ready to navigate
              the stock market with precision.
            </li>
            <li>
              Lifetime Association: Join the elite ranks of Goolluck Pro-traders
              and Goolluck Scholars. As a member, your association with us
              doesn&apos;t end with training. Benefit from lifelong support,
              exclusive insights, and a community of like-minded individuals
              dedicated to mastering the art of trading.
            </li>
          </ul>

          <p className="lg:max-w-[80rem] text-xl text-justify">
            At Goolluck Investments, we don’t just teach; we empower. Choose a
            training experience that goes beyond theory, providing you with the
            practical knowledge and tools needed to thrive in the dynamic world
            of stock trading. Ready to embark on a Journey of financial
            empowerment? Contact us today.
          </p>
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
              Possesses over 20+ years of Stock Market Trader. 19 Times winner
              of CNBC Bulls Eye Contest (Best Portfolio Manager Contest in the
              Country). Derivatives Expert with Zee Business Live News Channel.
              Equity Expert with Investor India Magzine. Former Trainer at State
              Street Corp US for Hedge fund Training. Ex-National Head for Stock
              Broking Arm of Bajaj Capital.
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

export default index;
