import React from 'react'

interface HeadingProps {
    center?:boolean 
    text:string



}
const Heading: React.FC<HeadingProps> = ({ center, text }) => {
    return (
      <div
        className={`text-slate-500 px-3 d:px-10 md:text-xl my-3 md:my-10 ${
          center ? 'text-center' : 'text-start'
        }`}
      >
        {text}
      </div>
    );
  };
  
  export default Heading;