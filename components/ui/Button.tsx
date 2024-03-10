import { cn } from "@/lib/utils";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

const Button = ({ className, children }: ButtonProps) => {
  return (
    <button
      className={cn(
        "flex justify-center items-center gap-2 py-2 px-4 rounded-md font-semibold hover:bg-opacity-80 transition",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
