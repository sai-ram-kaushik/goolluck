import Image from "next/image";
import TransitionEffect from "@/components/TransitionEffect";
import { life_at_goolluck } from "@/constants";
const LifeAtGoolluck = () => {
  return (
    <section className="w-full p-5">
      <TransitionEffect />
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-5">
          {life_at_goolluck.map((item) => (
            <div key={item.key}>
              <img src={item.photo} alt="photos" width={250} height={250}  className="rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeAtGoolluck;
