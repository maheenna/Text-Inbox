'use client'
import React from 'react'
import section5 from "../../../app/data.json";
import Carousel1 from "./carouel"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Section5 = () => {
    const responsive = {

        desktop: {
          breakpoint: { max: 3000, min: 1324 },
          items: 3,
          slideToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1324, min: 764 },
          items: 2,
          slideToSlide: 1
        },
        mobile: {
          breakpoint: { max: 764, min: 0 },
          items: 1,
          slideToSlide: 1
        }
      };
  return (
    <div className='md:rounded-t-[70px] md:rounded-b-[70px] rounded-t-2xl rounded-b-2xl bg-[#0ECFC6]'>
        <div className='pt-[5rem] pb-[3rem] md:pb-[3rem] text-center'>
            <h1 className=' text-[40px] font-[700] md:block hidden text-[#004D4A]'>
                {section5.section5.heading1}
            </h1>
            <h1 className=' text-[40px] font-[700]  md:block hidden text-[#004D4A]'>
                {section5.section5.heading2}
            </h1>
            <h1 className=' text-[30px] font-[700] mx-3 md:hidden block text-[#004D4A]'>{section5.section5.heading1} {section5.section5.heading2}</h1>
            <p className='text-[20px] font-sans pt-14 px-5 md:px-0 md:pt-10'>
            {section5.section5.para}
            </p>
        </div>
        <div className='w-[80%] mt-[rem] mb-[3rem] mx-auto'>
        <Carousel additionalTransfrom={0} autoPlay={false}  arrows={false} centerMode={false} infinite responsive={responsive} itemClass='item' showDots={true}>

          <Carousel1 
          title="Emily Johnson" 
          image="/images/People1.png" 
          
          para={section5.section5.card1text} />

        <Carousel1 
          title="William Smith"
          image="/images/people2.png" 
          
          para={section5.section5.card2text} />

        <Carousel1 
          title="James Brown" 
          image="/images/people3.png" 
          
          para={section5.section5.card2text}  />

        <Carousel1 
          title="Olivia Taylor" 
          image="/images/People1.png" 
          
          para={section5.section5.card1text}  />

        <Carousel1 
          title="Benjamin Wilson" 
          image="/images/people2.png" 
         
          para={section5.section5.card2text}  />

        <Carousel1
          title="Charlotte Davies" 
          image="/images/people3.png" 
          
          para={section5.section5.card2text}  />

        </Carousel>
      </div>
    </div>
  )
}

export default Section5