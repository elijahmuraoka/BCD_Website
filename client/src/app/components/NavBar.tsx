'use client';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/bcd_logo.png';

export default function NavBar() {
    return (
        <nav
            id="navbar"
            className="w-full z-10 bg-black fixed top-0 flex flex-row justify-between items-center shadow-xl px-4 py-3 md:px-6"
        >
            <div className="flex flex-row items-center space-x-4">
                <Image
                    src={logo}
                    alt="big city diner logo"
                    width={50}
                    height={50}
                    className="md:w-[75px] md:h-[75px]"
                ></Image>
                <span className="text-3xl text-white md:text-4xl">Home</span>
            </div>
            <MenuIcon fontSize="large" htmlColor="white" />
        </nav>
    );
}
