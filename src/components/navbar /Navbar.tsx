import React from 'react'

import CardCount from './CardCount';
import HamburgerMenu from './HamburgerMenu';
import Search from './Search';
import User from './User';




const Navbar = () => {
  return (
    <div className='flex items-center jsutify-between gap-3 md: gap-10 px-3 md:px:10 h-16 bg-stone-700 text-slate-100'>


<Search/>
<CardCount/>
<User/>
<HamburgerMenu/>






</div>
   
  );
};

export default Navbar


