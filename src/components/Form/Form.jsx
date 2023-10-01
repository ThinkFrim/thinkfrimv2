import React, { useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  emailValidation,
  messageValidation,
  nameValidation,
} from "../../utils/inputValidation";
import { AiFillCheckCircle } from "react-icons/ai";
import { Input } from "../input/Input";
import Button from "../button/Button";
import emailjs from "@emailjs/browser";

const Form = () => {
  const methods = useForm();
  const [success, setSuccess] = useState(false);
  const form = useRef();

  const sendEmail = () => {
    console.log("Sending email...");

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

  const onSubmit = methods.handleSubmit(async (data) => {
    console.log(data);

    methods.reset();

    setSuccess(true);

    // calling sendEmail
    await sendEmail(data);
  });

  return (
    <FormProvider {...methods}>
      <form
        onClick={sendEmail}
        noValidate
        autoComplete='off'
        ref={form}>
        {/* BoxForm */}
        <div className='bg-black w-auto p-10 md:w-[30rem]  mt-5 text-center'>
          <div className='grid gap-5 md:grid-cols-1'>
            <Input {...nameValidation} name='name' />
            <Input {...emailValidation} name='email' />
            <Input
              {...messageValidation}
              name='message'
              className='md:cols-span-2'
            />

            <div className='mt-5'>
              {success && (
                <p className='flex items-center gap-1 mb-5 font-semibold text-green-500'>
                  <AiFillCheckCircle /> Form has been submitted successfully
                </p>
              )}
              <Button
                text='Send Request'
                type='submit'
                className='p-2 mt-4 md:mt-0 px-3 bg-transparent text-white border-2 border-[#F9BC60]'
                onClick={onSubmit}
              />
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
