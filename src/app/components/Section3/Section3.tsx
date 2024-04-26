import React from 'react'
import section3 from "../../../app/data.json"
import Image from 'next/image'

const Section3 = () => {
  return (
    <div className='bg-[#0ECFC6] md:rounded-t-[70px] rounded-b-2xl rounded-t-2xl md:rounded-b-[70px]'>
      <div className="pt-[8rem] pb-[4rem] mx-[1.5rem] md:mx-[5rem]">
        <div className='grid md:grid-cols-[1.5fr,1fr] grid-cols-1 gap-[3rem]'>
          <div className=''>
            <h1 className='text-[30px] md:text-[40px] font-[700] text-[#004D4A]'>{section3.section3.mainheading}</h1>
            <p className='mt-6 text-[18px]'>{section3.section3.description}</p>
            <button className=' px-10 py-4 sm:px-8 sm:py-3 text-[14px] sm:text-[13px] bg-[#004D4A] transition-all duration-200  rounded-full   text-center mx-auto mt-9 text-white'>
                            {section3.section3.button}
                    </button>
          </div>
          <div>
            <div className='relative'>
              <Image src={"/images/section3.png"} alt='hero' width={500} height={500} className='mx-auto w-[400px]' />
              <Image src={"/images/heroimagebutton.png"} alt='hero' width={500} height={500} className='w-[50px] absolute top-[41%] md:top-1/2 md:left-[47.5%] left-[43.5%]'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3