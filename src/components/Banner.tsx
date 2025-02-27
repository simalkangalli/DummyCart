import React from 'react';
import Container from '@components/Container';
import { banner } from './constants';
import { GoArrowRight } from 'react-icons/go';
import Button from './Button';

const Banner = () => {
  return (
    <div className="bg-blue-500 flex items-center justify-center text-themeWhite py-20">
      <Container className="flex flex-col items-center text-center gap-6">
        <p className="text-base font-semibold">{banner?.priceText}</p>
        <h2 className="text-5xl font-bold max-w-[500px]">{banner?.title}</h2>
        <p className="text-lg font-bold">
          {banner?.textOne}{" "}
          <span className="text-yellow-400 mx-1">{banner?.offerPrice}</span>
          {banner?.textTwo}
        </p>
        <div className="flex justify-center">
          <Button
            href={banner?.buttonLink} 
            className="flex items-center gap-1 bg-themeWhite text-black font-semibold rounded-md px-6 py-3 border border-transparent hover:bg-transparent hover:text-themeWhite hover:border-white/40 duration-200">
            Shop Now <GoArrowRight className="text-lg" />
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
