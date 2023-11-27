import Button from "@/components/Button";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { IoMailSharp } from "react-icons/io5";
import { useForm, ValidationError } from "@formspree/react";
import TransitionEffect from "@/components/TransitionEffect";
import { socials } from "@/constants";
const Conatct = () => {
  const [state, handleSubmit] = useForm("xeqbwokn");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <section className="w-full p-5">
      <TransitionEffect />
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h2>Contact Us</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-10">
          <div className="flex flex-col items-center lg:items-start gap-3">
            <div className="flex flex-col items-center lg:items-start gap-3">
              <div className="flex items-center gap-2 ">
                <FaLocationDot size={30} className="text-secondary" />
                <p className="lg:w-[30rem] text-lg lg:text-2xl font-medium text-center lg:text-start">
                  Unit-15, Ground Floor, Star Tower, Sector 30, Gurugram,
                  Haryana, 122001
                </p>
              </div>

              <div className="flex items-center gap-2">
                <FaPhone size={30} className="text-secondary" />
                <p className="text-center text-lg lg:text-2xl font-medium lg:text-start">
                  9999974265
                </p>
              </div>

              <div className="flex items-center gap-3">
                <TbDeviceLandlinePhone size={30} className="text-secondary" />
                <div className="flex flex-col items-start text-lg lg:text-2xl font-medium">
                  <p>0124-4200901 /</p>
                  <p>0124-4200903</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <IoMailSharp size={30} className="text-secondary" />
                <p className="lg:w-[30rem] text-lg lg:text-2xl font-medium text-center lg:text-start">
                  goollucktraining@gmail.com
                </p>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.626498699067!2d77.0528296!3d28.460673500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c6fa02b4b1%3A0xa7b111d6d6499b27!2sGoolluck%20Investments%20-%20Stock%20Market%20Training%20Institute!5e0!3m2!1sen!2sin!4v1701067179802!5m2!1sen!2sin"
                width="400"
                height="250"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />

              <div className="flex items-center gap-5 mt-3">
                {socials.map((link) => (
                  <div
                    key={link.key}
                    className="bg-secondary text-black rounded-full p-3">
                    <a href={link.path} target="_blank">
                      <div>{link.icon}</div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-5 lg:mt-0">
            <p className="text-xl lg:text-4xl font-bold font-playfair">
              Our teams are here to help
            </p>
            <p className="lg:w-[30rem] text-center">
              For any questions, comments, or suggestions? Simply fill in the
              form and we’ll be in touch shortly.
            </p>

            <form
              className="bg-background shadow-lg border border-primary p-5 rounded-xl flex flex-col items-center mt-5 gap-5"
              onSubmit={handleSubmit}>
              <div className="flex flex-col lg:flex-row items-center gap-5">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="p-3 rounded-lg bg-transparent border"
                  name="first name"
                  errors={state.errors}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="p-3 rounded-lg bg-transparent border"
                  name="last name"
                  errors={state.errors}
                />
              </div>

              <div className="flex flex-col items-center gap-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  name="email"
                  className="p-3 rounded-lg bg-transparent border lg:min-w-[30rem]"
                  errors={state.errors}
                />
                <input
                  type="text"
                  placeholder="Enter your mobile number"
                  required
                  name="mobile number"
                  className="p-3 rounded-lg bg-transparent border lg:min-w-[30rem]"
                  errors={state.errors}
                />
                <textarea
                  placeholder="Your message"
                  name="message"
                  className="p-3 rounded-lg bg-transparent border lg:min-w-[30rem]"
                  errors={state.errors}
                />

                <Button
                  className="lg:min-w-[30rem]"
                  disabled={state.submitting}>
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conatct;
