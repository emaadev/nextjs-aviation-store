"use client";
import { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mx-auto max-w-[900px] border-b border-gray-200">
      <h2 className="w-full transition-all">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 bg-white hover:bg-gray-100 focus:outline-none hover:text-blue-600 transition-all"
          aria-expanded={isOpen}
          onClick={toggleAccordion}
        >
          <span>{title}</span>
          <svg
            className={`w-4 h-4 transform hover:text-blue-600 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </h2>

      <div
        className={`${isOpen ? "block" : "hidden"} transition-all p-5 bg-white`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
