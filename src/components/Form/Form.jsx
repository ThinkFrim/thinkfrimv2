import React, { useRef, useState } from "react";
import Button from "../button/Button";
import emailjs from '@emailjs/browser'
const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_te7ls9s",
        "template_lmr13kk",
        form.current,
        "bll7AS4TVykSes83R"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form
      className="py-5 flex flex-wrap justify-center gap-6 bg-black lg:flex-nowrap lg:flex-col lg:p-24 lg:justify-normal"
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="text-white flex-[1 0 130px]">
        <button className="border-2 border-[#F9BC60] p-3 mx-2 my-2">
          SaaS
        </button>
        <button className="border-2 border-[#F9BC60] p-3 mx-2 my-2">
          Mobile Dev
        </button>
        <button className="border-2 border-[#F9BC60] p-3 mx-2 my-2">
          Web Dev
        </button>
        <button className="border-2 border-[#F9BC60] p-3 mx-2 my-2">
          UI UX
        </button>
      </div>
      <input
        type="text"
        className="flex-[1 0 130px] bg-inherit text-white border-b-2 border-[#bebebe] py-2 outline-none"
        placeholder="your name"
        name="name"
      />
      <input
        type="email"
        className="flex-[1 0 130px] bg-inherit text-white border-b-2 border-[#bebebe] py-2 outline-none"
        placeholder="your email"
        name="email"
      />
      <textarea
        type="text"
        className="flex-[1 0 130px] bg-inherit text-white border-b-2 border-[#bebebe] py-2 outline-none overflow-auto"
        placeholder="your message"
        name="message"
      />
      <input type="file" className="input-file flex-[1 0 130px]" />
      <Button
        text="Send Request"
        className="text-white flex-[0 130px] border-2 border-[#F9BC60] p-3"
      />
    </form>
  );
};

export default Form;
