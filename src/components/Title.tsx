import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className }: Props) => {
  return (
    <h2
      className={twMerge(
        "text-xl font-semibold mb-2 tracking-normal underline underline-offset-2 decoration-[1px]",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Title;
