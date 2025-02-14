import Link from 'next/link'
import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { MdFavoriteBorder } from 'react-icons/md'

const HeaderIcons = () => {
    return (
        <>
            <Link href={"/favourite"}>

                <MdFavoriteBorder />
                <span className="absolute  -top-2/3 -right-2/3 text-[10px] font-medium w-4 h-4 bg-themeColor text-white rounded-full flex items-center justify-center">
                    0
                </span>

            </Link>
            <Link href={"/cart"}>
                <BiShoppingBag />
                <span className="absolute -top-1/2 -right-1/2 text-[10px] font-medium w-4 h-4 bg-themeColor text-white rounded-full flex items-center justify-center">
                    0
                </span>

            </Link>

        </>
    )
}

export default HeaderIcons