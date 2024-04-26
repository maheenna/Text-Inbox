import React from 'react';

const Joinwaitlist = ({ isVisible, onClose }: any) => {
    if (!isVisible) return null;
    return (
        <div className='fixed inset-0 bg-[#99C8FF] bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-[9999]'> {/* Increase z-index */}
            <div className='mx-[1rem] w-full md:w-[600px] flex flex-col relative'>
                <button className='text-black text-3xl absolute top-0 right-0 p-4' onClick={() => onClose()}>x</button>
                <div className='bg-white rounded-lg shadow-md p-12 mt-16 md:mt-0'>
                    <h2 className='text-3xl text-center text-black font-sans font-bold mb-6'>Join our waitlist</h2>
                    <form action="">
                        <div className='mb-4 mt-12'>
                            <label htmlFor="" className='block text-black text-sm font-semibold mb-2'>First Name</label>
                            <input placeholder='First Name' className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500' required type="text" />
                        </div>
                        <div className='mb-4 mt-4'>
                            <label htmlFor="" className='block text-black text-sm font-semibold mb-2'>Last Name</label>
                            <input type="email" placeholder='Last Name' className='w-full px-3 py-2 border rounded-lg focus:border-blue-500' required />
                        </div>
                        <div className='mb-4 mt-4'>
                            <label htmlFor="" className='block text-black text-sm font-semibold mb-2'>Please enter your email address</label>
                            <input type="email" placeholder='Please enter your email address' className='w-full px-3 py-2 border rounded-lg outline-8 focus:border-blue-500' required />
                        </div>
                        <div className='flex justify-center mt-8'>
                            <button type='submit' className='bg-[#2B88D9] text-black font-semibold px-4 py-2 rounded-lg w-[100%] focus:outline-white'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Joinwaitlist;
