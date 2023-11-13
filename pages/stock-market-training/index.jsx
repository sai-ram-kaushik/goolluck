import Button from "@/components/Button";
import TransitionEffect from "@/components/TransitionEffect";
import { training } from "@/constants";
const Stock_Market_Training = () => {
  return (
    <section className="w-full p-5">
      <TransitionEffect />
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h3>Stock Market Training</h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 mt-10">
          {training.map((list) => (
            <div
              key={list.key}
              className="min-w-[600px] max-w-[900px] border border-secondary p-3 rounded-lg">
              <div className="flex flex-col gap-5 items-center">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
                  <p className="text-3xl">{list.date}</p>
                  <p>|</p>
                  <div className="flex flex-col items-center lg:items-start">
                    <p className="text-3xl">{list.label}</p>
                    <p className="text-3xl">{list.time}</p>
                    <p className="text-3xl">{list.cost}</p>
                  </div>
                </div>

                <Button>Register Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stock_Market_Training;
