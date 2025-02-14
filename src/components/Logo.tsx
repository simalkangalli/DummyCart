import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href={"/"}>
            <h3 className=' text-pink-600 text-3xl px-8 font-semibold hover:text-green-500 cursor-pointer duration-200'>
                DummyCart
            </h3>
        </Link>

    )
}

export default Logo