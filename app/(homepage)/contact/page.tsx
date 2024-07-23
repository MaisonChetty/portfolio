"use client";
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:maisonchetty4@gmail.com?subject=${formData.subject}&
body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div
      className="h-screen flex relative flex-col text-center
    md:text-left md:flex-row max-w-7xl px-10 
    justify-evenly mx-auto items-center
    "
    >
      <h3
        className="absolute lg:top-32
        md:top-16
        top-12
        text-2xl md:text-3xl lg:text-4xl 
        uppercase tracking-[20px]
         text-gray-500"
      >
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="md:text-3xl lg:text-4xl  font-semibold text-center">
          You found the best place to connact me so,{" "}
          <span className="decoration-[pink]/50 underline">Lets Talk</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[pink] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+2776 235 6734</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[pink] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Johannesburg, South Africa</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[pink] h-7 w-7 animate-pulse" />
            <p className="text-2xl">maisonchetty4@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput text-black"
          />
          <button
            type="submit"
            className=" bg-[pink] py-5 px-10 rounded-md text-black 
                font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
