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
            <div key={item.key} className="relative w-[250px] h-[250px]">
              <Image 
                src={item.photo} 
                alt="photos" 
                fill
                sizes="250px"
                className="rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeAtGoolluck;
