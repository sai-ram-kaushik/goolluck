import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClass = active
    ? "text-primary border-b-2 border-b-secondary"
    : "text-[#555] ";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-primary text-xl lg:text-4xl ${buttonClass}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
