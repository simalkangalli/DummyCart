import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={twMerge("flex items-center md:gap-x-5 justify-between md:justify-start ", className)}>
      {children}
    </div>
  );
};

export default Container;
