import Image from 'next/image';
import Container from '@components/Container';
import SearchInput from './SearchInput';
import Link from 'next/link';

import HeaderIcons from './HeaderIcons';
import logo from "@/assets/logo.png"; 
import Logo from '@components/Logo';
import SignInButton from '@components/SignInButton';


const MiddleHeader = () => {
    return (

        <div className="border-b-[1px] border-b-gray-400">
            <Container className="max-w-screen-xl mx-auto w-full">

                <Link href={"/"}>
                <Image src={logo} alt="logo" width={60} height={70} unoptimized />
                </Link>
                <Logo/>

                <SearchInput />
                <div className='hidden md:inline-flex items-center gap-3'>

                </div>
                <SignInButton/>
                <HeaderIcons />
            



            
            </Container >
        </div >
    );
};

export default MiddleHeader;
