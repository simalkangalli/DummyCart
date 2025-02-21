"use client"; 


import { signIn } from "next-auth/react";
import { LiaUser } from "react-icons/lia";

const SignInButton = () => {
 

  return (
    <>
      
        <div
          onClick={() => signIn()}
          className="flex items-center gap-2 text-sm cursor-pointer"
        >
          <div className="border-2 border-gray-700 rounded-full text-xl">
            <LiaUser />
          </div>
          <div>
            <p className="text-xs">Hello, user</p>
            <p className="font-medium">Login/Register</p>
          </div>
        </div>
     
    </>
  );
};

export default SignInButton;
