import Button from "@/components/Button";
import { CiLocationOn } from "react-icons/ci";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { BiPhoneCall } from "react-icons/bi";
import { useForm, ValidationError } from "@formspree/react";
import TransitionEffect from "@/components/TransitionEffect";
const Contact = () => {
  const [state, handleSubmit] = useForm("xeqbwokn");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <section className="w-full p-5">
      <TransitionEffect />
      <div className="container mx-auto w-full h-full">
        <div className="flex items-center justify-center">
          <h3>
            Contact <span>Us</span>
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-32 mt-10">
          <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-background shadow-md shadow-secondary p-6 rounded-lg mx-auto">
            <form
              className="flex flex-col flex-1 gap-5"
              onSubmit={handleSubmit}>
              <p className="text-3xl">Have a Query</p>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="bg-transparent p-2"
                errors={state.errors}
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="bg-transparent p-2"
                errors={state.errors}
              />
              <input
                type="text"
                placeholder="Your Phone Number"
                name="number"
                className="bg-transparent p-2"
                errors={state.errors}
              />

              <textarea
                placeholder="Your Query"
                name="message"
                cols="30"
                rows="10"
                className="bg-transparent p-2"
                errors={state.errors}></textarea>
              <button
                className="border p-2 border-secondary rounded-xl w-[100px]"
                disabled={state.submitting}>
                Send
              </button>
            </form>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-10">
            <div className="flex items-center gap-3">
              <CiLocationOn size={45} className="text-secondary" />
              <p>
                Star Tower, Silokhera, Block A, Sector 30, Gurugram, Haryana
                122001
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.6236483632965!2d77.0517926113594!3d28.460759391758803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c6fa02b4b1%3A0xa7b111d6d6499b27!2sGoolluck%20Investments%20-%20Stock%20Market%20Training%20Institute!5e0!3m2!1sen!2sin!4v1699865214367!5m2!1sen!2sin"
              width="400"
              height="250"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
            <div className="flex items-center gap-2">
              <TbDeviceLandlinePhone size={45} className="text-secondary" />
              <p>0124-4200901 or 4200903</p>
            </div>

            <div className="flex items-center gap-2">
              <BiPhoneCall size={45} className="text-secondary" />
              <p>+91 9999974265</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
