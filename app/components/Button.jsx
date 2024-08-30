import React from "react";

const Button = ({ title }) => {
  return (
    <button
      className=" rounded-md bg-slate-800 text-white px-4 py-2 hover:bg-slate-700"
      type="button"
    >
      {title}
    </button>
  );
};

export default Button;
