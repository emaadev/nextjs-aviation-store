import { cn } from "@/lib/utils";
import { ButtonProps } from "@/interfaces";

const Button = ({ className, children }: ButtonProps) => {
  return (
    <button
      className={cn(
        "py-2 px-4 rounded-md font-semibold hover:bg-opacity-80 transition",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
