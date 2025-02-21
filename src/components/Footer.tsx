import React from 'react'
import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'
import { logo } from '@/assets'
import Title from './Title'
import { GoDotFill } from 'react-icons/go'
import { navigation } from './constants'
import { BsEnvelopeAt } from 'react-icons/bs'

const Footer = () => {
    
    return (
        <footer className=''>
        <div className="bg-white text-pink-600 py-10 lg:py-20 font-semibold ">
            <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                {/* Logo ve Marka İsmi */}
                <div className="flex justify-end">
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="logo"
                            width={150}
                            height={100}
                            unoptimized
                            className="mt-[-10px] ml-auto" // Yukarı ve sağa kaydırma
                        />
                    </Link>
                    <p className="mt-14 font-bold  text-gray-700 ">DummyCart</p>
                </div>



                {/* My Account Bölümü */}
                <div>
                    <Title>My Account</Title>
                    <div className="mt-3 flex flex-col gap-y-2">
                        {navigation?.map((item) => (
                            <Link
                                key={item?.title}
                                href={item?.href}
                                className="flex items-center gap-x-2 text-gray-700 hover:text-themeColor duration-200 font-medium"
                            >
                                <GoDotFill size={10} />
                                {item?.title}
                            </Link>
                        ))}
                    </div>
                </div>



                {/* Information Bölümü */}
                <div>
                    <Title>Information</Title>
                    <div className="mt-3 flex flex-col gap-y-2">
                        {navigation?.map((item) => (
                            <Link
                                key={item?.title}
                                href={item?.href}
                                className="flex items-center gap-x-2 text-gray-700 hover:text-themeColor duration-200 font-medium"
                            >
                                <GoDotFill size={10} />
                                {item?.title}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Destek veya Ekstra Bölüm */}
                <div>
                    <Title>Support</Title>
                    <div className="mt-3 flex flex-col gap-y-2">
                        <Link href="/contact" className="text-gray-700 hover:text-themeColor duration-200">
                            Contact Us
                        </Link>
                        <Link href="/faq" className="text-gray-700 hover:text-themeColor duration-200">
                            FAQs
                        </Link>
                        <Link href="/mail" className="text-gray-700 hover:text-themeColor duration-200" >
                            <div className="mt-3">
                                <p className="text-base flex items-center gap-x-3 text-gray-600">
                                    <BsEnvelopeAt /> dummy@support.com
                                </p>
                            </div>
                        </Link>

                    </div>
                </div>
               



            </Container>
        </div>
        </footer>
    )
}

export default Footer
