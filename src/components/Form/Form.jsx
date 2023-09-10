import React from "react";
import { Input } from "../input/Input";
import { FormProvider, useForm } from "react-hook-form";
import Button from "../button/Button";
import { emailValidation, messageValidation, nameValidation } from "../../utils/inputValidation";

const Form = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete="off"
        className=""
      >
        {/* BoxForm */}
        <div className="bg-black p-10 sm:p-16 md:p-20 lg:p-[8rem] mt-5 text-center">
          <div className="grid gap-5 md:grid-cols-1">
            <Input {...nameValidation} />
            <Input {...emailValidation} />
            <Input {...messageValidation} className="md:cols-span-2" />

            <div className="mt-5">
              <Button
                text="Send Request"
                type="submit"
                className="p-2 px-3 bg-transparent text-white border-2 border-[#F9BC60]"
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
