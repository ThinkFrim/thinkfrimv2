// name validator
export const nameValidation = {
  name: "name",
  label: "name",
  type: "text",
  id: "name",
  placeholder: "write your name ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};

export const emailValidation = {
  name: "email",
  label: "email",
  type: "email",
  id: "email",
  placeholder: "Enter your email address...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    pattern: {
      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      message: "Invalid email address",
    },
  },
};

export const messageValidation = {
  name: 'message',
  label: 'description',
  multiline: true,
  id: 'description',
  placeholder: 'write description ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 100,
      message: '200 characters max',
    },
  },
}
