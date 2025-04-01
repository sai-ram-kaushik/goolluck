import { about_list } from "@/constants";
const About = () => {
  return (
    <section className="w-full p-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-center lg:justify-start">
          <h3>
            About <span>Goolluck Investments</span>
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-28 mt-16">
          {about_list.map((list) => (
            <div key={list.key} className="flex flex-col items-center gap-5">
              <div className="p-5 bg-secondary/10 rounded-full">{list.icon}</div>
              <p className="text-2xl font-bold text-center text-secondary font-playfair">{list.label}</p>
              <p className="font-light text-justify text-sm max-w-[900px]">{list.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
