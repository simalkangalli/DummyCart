"use client"

import { getData } from '@/app/helpers';
import Link from 'next/link';

import React, { useEffect, useState} from 'react'
import { CiSearch } from 'react-icons/ci';
import { RiCloseLine, RiSearchLine } from 'react-icons/ri';
import { ProductType } from 'type';

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const [products,setProducts] = useState([]);
    const[filteredProducts , setFilteredProducts] = useState([]);


    useEffect(() => {
    const getProducts = async() =>{
      const endpoint = `https://dummyjson.com/products`;
      try {
        const data = await getData(endpoint)
        setProducts(data?.products)
      } catch (error) {
        console.log('Error fetchimg data',error)
        
      }
    }
    getProducts();
    },[]);

    useEffect(()=> {
      const filtered = products?.filter((item:ProductType) => 
        item?.title.toLocaleLowerCase().includes(search.toLowerCase())
      );
     setFilteredProducts(filtered)
      },[search,products]);
   
   
  return (
    <div className="hidden md:inline-flex flex-grow h-10 relative"> 
        
        <input
    type="text"
    placeholder="Search products here..."
    className="w-full h-full outline-none border-2 border-blue-600  px-4 "
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
        {search && (
        <RiCloseLine
          onClick={() => setSearch("")}
          className="text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200 "
        />
      )}
     
        
        <span className="w-10 h-10 bg-themeColor/80 inline-flex items-center justify-center text-white-500 absolute top-0 right-0 border-2 border-blue-500 hover:bg-themeColor duration-200 cursor-pointer ">
        <RiSearchLine />
      </span>
      {search && (
        <div className="absolute left-0 top-12 w-full mx-auto h-auto 
        max-h-96 bg-white rouded-md overflow-y-scroll cursor-pointer text-black"> 
       
          {filteredProducts?.map((item:ProductType) => (
            <Link key={item?.id}
            href = {`/products/${item.id}`} 
            onClick={() => setSearch("")}
            className="flex items-center gap-x-2 text-base font-medium 
            hover:bg-lightText/30 px-3 py-1.5"> 
            <CiSearch className='text-lg'/>{item?.title}</Link>
          ))}
          </div> 
      )}

   
    </div>
  )
}

export default SearchInput