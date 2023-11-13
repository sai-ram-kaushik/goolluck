import { team } from "@/constants";
import Image from "next/image";
const index = () => {
  return (
    <section className="w-full p-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h3>
            About <span>Goolluck Investments</span>
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-52 mt-10">
          <div className="flex flex-col items-center gap-10">
            <h3 className="text-4xl">Portfolio Advisory Firm</h3>
            <p className="text-center text-lg">
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
            <p className="text-center  text-lg">
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
            Our <span>Team</span>
          </h3>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
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
              <p className="font-bold">{list.designation}</p>
              <p className="max-w-[400px] text-center">{list.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
