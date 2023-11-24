/** @format */

import Typed from "react-typed";
import Image from "next/image";
import vector from "@/public/assets/8.png";
import Button from "@/components/Button";
import design from "@/public/assets/design.png";
import TransitionEffect from "@/components/TransitionEffect";
const HomePage = () => {
  return (
    <section className='w-full lg:h-[85vh] p-5'>
      <TransitionEffect />
      <Image src={design} alt='design' className='absolute top-0 left-0' />
      <div className='container mx-auto w-full h-full'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-40 w-full h-full'>
          <div className='flex flex-col items-center lg:items-start lg:w-[649.81px] gap-[50px]'>
            <h1 className='leading-[4.5rem]'>
              Goolluck Investments -{" "}
              <span>Stock Market Training Institute</span>
            </h1>

            <p className='text-center lg:text-start'>
              Goolluck Investments is a portfolio advisory firm and stock market training
              institute. Here, you will learn about real time trading and
              strategies used by the traders of our institution. Learn directly
              from trader. Come & learn directly from traders.
            </p>

            <Button>Get Started</Button>
          </div>

          <div>
            <Image src={vector} alt='home_vector' width={700} height={700} className="rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
