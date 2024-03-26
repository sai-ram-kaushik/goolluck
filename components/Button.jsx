import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`py-2 px-5 bg-secondary text-black font-lexend font-medium text-lg rounded-full hover:bg-transparent border border-secondary duration-300 hover:text-primary ${className}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

