import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface ButtonProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = ({ className, children, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className={cn(
        "flex justify-center items-center gap-2 py-2 px-4 rounded-md font-semibold hover:bg-opacity-80 transition",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
