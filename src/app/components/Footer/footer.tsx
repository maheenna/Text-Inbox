import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa6';
import logo from "../../../../public/images/Group 18894logo.png";
import footericon from "../../../../public/images/footericon.png";

const Footer = () => {
    return (
        <div className='pt-[3rem] md:pt-[5rem] pb-[3rem] bg-white overflow-hidden mr-4'>
            <div className='w-full lg:w-full ml-[1.5rem] md:ml-[5rem] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 items-start'>
                <div className='md:pl-10 col-span-1 lg:col-span-1'>
                    <div className='flex items-center gap-3 text-black'>
                        <Image src={logo} alt='logo' />
                        <h1 className='text-[25px] md:text-[30px] font-extrabold text-[#2B88D9]'>Hlv</h1>
                    </div>
                    <p className='text-black mt-[1rem] text-[16px] font-medium'>
                        Pharmaceutical Digital Medicine Matchmaker
                    </p>
                    <p className='md:mt-[2rem] mt-[1rem] text-black text-[16px] font-medium'>Hlv@example.com</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 text-center items-center md:gap-[0rem] col-span-3'>
                    <div className='text-start'>
                        <h1 className='text-[18px] font-extrabold'>Application</h1>
                        <p className='mt-4'>Home</p>
                        <p className='mt-4'>FAQ</p>
                        <p className='mt-4'>Join Wishlist</p>
                        <p className='mt-4'>About</p>
                        <p className='mt-4'>Contact</p>
                    </div>
                    <div>
                        <div className='text-start'>
                            <h1 className='text-[18px] font-extrabold'>Quick Links</h1>
                            <p className='mt-4'>Home</p>
                            <p className='mt-4'>FAQ</p>
                            <p className='mt-4'>Join Wishlist</p>
                            <p className='mt-4'>About</p>
                            <p className='mt-4'>Contact</p>
                        </div>
                    </div>
                    <div>
                        <div className='text-start'>
                            <h1 className='text-[18px] font-extrabold'>Solutions</h1>
                            <p className='md:mt-20 mt-4'>Online store builder</p>
                            <p className='mt-4'>Medicine matchmaker</p>
                            <p className='mt-4'>Delivery</p>
                        </div>
                    </div>
                    <div>
                        <div className='text-start'>
                            <h1 className='text-[18px] font-extrabold'>Opening Hours</h1>
                            <p className='md:mt-20 mt-4'>Mon-Fri : 8am-4pm</p>
                            <p className='mt-4'>Saturday : 8am-12pm</p>
                            <p className='mt-4'>Delivery</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:flex md:flex-cols-2 md:gap-[20rem] opacity-60 md:ml-[3rem]'>
            <div className='md:flex md:flex-cols-3 md:items-center  md:gap-7 mt-4 ml-[1.5rem]'>
                <p className='md:mt-[1.5rem] mt-[2rem]'>Terms of services</p>
                <p className='mt-[1.5rem]'>Privacy Policy</p>
                <p className='mt-[1.5rem]'>Privacy Choices</p>
            </div>
            <div className='mt-[2rem] flex items-center ml-[1.5rem] space-x-12'>
                <Image src={footericon} alt='footericon' className='w-[2rem] h-[2rem]' />
                <FaFacebook className='w-[2rem] h-[2rem] text-black' />
                <FaInstagram className='w-[2rem] h-[2rem] text-black' />
                <FaTiktok className='w-[2rem] h-[2rem] text-black' />
                <FaLinkedin className='w-[2rem] h-[2rem] text-black' />
            </div>
            </div>
        </div>
    );
};

export default Footer;
