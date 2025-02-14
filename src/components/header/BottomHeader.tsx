
import { navigation } from '@components/constants';
import Container from '@components/Container';
import Link from 'next/link';
import React from 'react'

const BottomHeader = () => {
    return (
        <div className="border-b border-b-gray-400">
            <Container className="flex items-center justify-between py-1">

                <div className="text-xs md:tsxt-sm font-medium flex items-center gap-2 md:gap-5">




                    {navigation?.map((item) => (
                        <Link key={item?.title} href={item?.href} className="hover:text-themeColor duration-200">
                            {item?.title}
                        </Link>

                    ))}
                    <Link href={'/signin'} className="hover:text-themeColor duration-200">
                        Please signin to view your profile
                    </Link>
                </div>
                <p className=" md: inline-flex text-xs text-black font-medium">Contact:<span>+90 789 6589</span></p>

            </Container>
        </div>

    )
}


export default BottomHeader