import React from "react";
import { BiCaretDown } from "react-icons/bi";

interface NavTitleProps {
  children: React.ReactNode;
  icons?: boolean;
}

const NavTitle: React.FC<NavTitleProps> = ({ children, icons }) => {
  return (
    <div className="flex items-center justify-between pb-5">
      <h3 className="font-bold lg:text-xl text-primeColor">{children}</h3>
      {icons && <BiCaretDown />}
    </div>
  );
};

export default NavTitle;
