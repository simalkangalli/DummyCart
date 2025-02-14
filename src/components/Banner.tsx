import React from 'react'
import Container from '@components/Container';
import { banner } from './constants';
import { GoArrowRight } from 'react-icons/go';
import Button from './Button';




const Banner = () => {
  return (
    <div className="bg-blue-500 py-60 flex items-center justify-center text-themeWhite pt-10">
      <Container className="flex flex-col items-center gap-4 text-center">
        <div className='flex flex-col gap-5 '>
        <p className="text-base font-semibold">{banner?.priceText}</p>
        <h2 className="text-5xl font-bold max-w-[500px]">{banner?.title}</h2>
        <p className="text-lg font-bold">
          {banner?.textOne}{" "}
          <span className="text-yellow-400 mx-1">{banner?.offerPrice}</span>
          {banner?.textTwo}
        </p>
        <Button
            href={banner?.buttonLink} 
            className="flex items-center gap-1 bg-themeWhite text-black rounded-md w-32 px-0 justify-center text-sm font-semibold hover:bg-transparent hover:text-themeWhite py-3 border border-transparent hover:border-white/40 duration-200">
            Shop Now <GoArrowRight className="text-lg" />
          </Button>
        </div>
       
      </Container>
    </div>
  );
};

export default Banner;
