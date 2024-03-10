"use client";

import Button from "@/components/ui/Button";

import { IoIosArrowForward } from "react-icons/io";

interface FilterProps {
  name: string;
  filters: any;
  onFilter: (filter: string) => void;
  activeCategory: string;
}

const Filter = ({ name, filters, onFilter, activeCategory }: FilterProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />

      <div className="flex flex-col gap-2">
        {filters.map((filter: any) => (
          <div
            key={filter}
            onClick={() => onFilter(filter)}
            className={`flex justify-start gap-2 items-center transition-all hover:opacity-100 ${
              filter === activeCategory
                ? "border-b-2 border-blue-400"
                : "opacity-50"
            }`}
          >
            <IoIosArrowForward />
            <Button>{filter}</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
