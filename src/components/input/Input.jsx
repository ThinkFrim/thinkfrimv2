import React from "react";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { BiErrorCircle } from "react-icons/bi";
import { findInputError, isFormInvalid } from "../../utils";

export const Input = ({
  name,
  validation,
  label,
  type,
  id,
  placeholder,
  multiline,
  className,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, label);
  const isInvalid = isFormInvalid(inputError);

  const input_Tailwind = "p-2 font-medium border rounded-md border-slate-300";
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex justify-between">
        <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      {multiline ? (
        <textarea
          type={type}
          id={id}
          className={`${input_Tailwind}, min-h-[10rem] max-h-[20rem] resize-y'`}
          {...register(`${name}`, validation, className)}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={`${input_Tailwind} ${className}` }
          placeholder={placeholder}
          {...register(name, validation)}
        />
      )}
    </div>
  );
};

const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 text-red-600 rounded-md"
      {...framer_error}
    >
      <BiErrorCircle />
      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
