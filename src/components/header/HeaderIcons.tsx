"use client"
import Link from 'next/link'
import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { MdFavoriteBorder } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { StateType } from 'type'

const HeaderIcons = () => {
    // Store'dan verileri alırken varsayılan değerler ata
    const { cart = [] } = useSelector((state: StateType) => state?.dummy || {});

    return (
        <>
            <Link href={"/favourite"}>
                <MdFavoriteBorder />
                <span className="absolute  -top-2/3 -right-2/3 text-[10px] font-medium w-4 h-4 bg-themeColor text-white rounded-full flex items-center justify-center">
                    
                </span>
            </Link>
            <Link href={"/cart"}>
                <BiShoppingBag />
                <span className="absolute -top-1/2 -right-1/2 text-[10px] font-medium w-4 h-4 bg-themeColor text-white rounded-full flex items-center justify-center">
                    {cart.length > 0 ? cart.length : '0'}
                </span>
            </Link>
        </>
    )
}

export default HeaderIcons
