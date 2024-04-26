import Image from 'next/image';
import React from 'react'
import aboutlogo from "../../../public/images/aboutlogo.png"
import about1 from "../../../public/images/about1.png"
import about1bottom from "../../../public/images/about1bottom.png"
import about2 from "../../../public/images/about2.png"
import about3 from "../../../public/images/about3.png"
import about4 from "../../../public/images/about4.png"

const About = () => {
    return (
        <div className='bg-[#99C8FF] '>
            <div className='md:pt-[8rem]  md:pb-[5rem] pt-[5rem] pb-[2rem] '>
                <div className="relative md:text-center text-start ml-[1.5rem] md:ml-0">
                    <div className="relative">
                        <Image src={aboutlogo} alt="About logo" className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 z-0 opacity-50" style={{ maxWidth: '100px' }} />
                        <h1 className="relative z-10 text-[30px] font-bold">Learn More About Us</h1>
                    </div>
                </div>

                {/* 1st div */}
                <div className='mt-[4rem] mb-[2rem] md:mx-[6rem] mx-[1.5rem] items-center'>
  <div className='grid grid-cols-1 md:grid-cols-2 p-[1rem] md:p-[2rem] gap-[2rem] md:gap-[5rem] bg-white rounded-2xl relative'>
    <div className='md:pt-[1.5rem]'>
      <h1 className='text-[32px] text-[#2B88D9] font-normal'>What is HLV?</h1>
      <p className='pt-4 text-[18x] pb-7 font-sans'>HLV is a cutting-edge MedTech app designed to revolutionize personalized health and wellness management. By leveraging advanced AI technology, HLV aims to empower individuals to take control of their well-being by providing them with a comprehensive suite of features and tools.</p>
      <Image src={about1bottom} alt='about' className='pt-[1rem]'/>
    </div>
   
    <div className="relative">
      <Image src={about1} alt='about' className='items-center justify-center text-center' />
      
    </div>
  </div>
</div>

                {/* 2nd div */}
                <div className='mt-[3rem] mb-[2rem] md:mx-[6rem]  mx-[1.5rem] items-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 p-[1rem] md:p-[3rem] gap-[2rem] md:gap-[5rem] bg-white rounded-2xl relative'>
                        <div className='md:block hidden'>
                            <Image src={about2} alt='about' className='items-center justify-center text-center' />
                        </div>
                        <div className='md:pt-[1.5rem] flex flex-col justify-between'>
    <div>
        <h1 className='text-[32px] md:pt-0 pt-5 text-[#2B88D9] font-normal'>HLV Mission</h1>
        <p className='pt-4 text-[16px] pb-7 font-sans font-normal'>At HLV, our mission is to transform the way people approach their health and wellness. We believe that everyone deserves personalized care and support that adapts to their unique needs. With this vision in mind, we have developed HLV as a platform that seamlessly integrates various components to deliver tailored solutions, empowering individuals to optimize their health journeys.</p>
        <Image src={about1bottom} alt='bottomimage' />
    </div>
</div>
<div className='md:hidden block'>
    <Image src={about2} alt='about' className='items-center justify-center text-center' />
</div>
</div>
</div>
{/* 3rd div */}
<div className='mt-[3rem] mb-[2rem]  mx-[1.5rem] md:mx-[6rem] items-center'>
<div className='grid grid-cols-1 md:grid-cols-2 md:gap-[4rem] gap-[2rem]'>
    <div className='bg-[#FEFEFE] rounded-2xl'>
        <div className='md:p-8 p-4'>
            <Image src={about3} alt='about'/>
            <h1 className='text-[32px] text-[#2B88D9] mt-5 font-normal'>Headlines</h1>
            <p className='text-[16px] mt-[1.5rem] font-sans font-normal'>We are dedicated to creating an inclusive and user-centric experience, putting the power of health management directly into the hands of our users. By utilizing advanced algorithms and data analytics, we enable users to access personalized workout plans, receive tailored news content, and stay on track with their medication schedules. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, amet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, consequatur!</p>
        </div>
        
    </div>
    <div className='bg-[#FEFEFE] rounded-2xl'>
        <div className='md:p-8 p-4'>
            <Image src={about4} alt='about'/>
            <h1 className='text-[32px] text-[#2B88D9] mt-5  font-normal'>Features</h1>
            <p className='text-[16px] mt-[1.5rem] font-sans font-normal'>HLV strives to enhance health outcomes and promote holistic well-being by fostering a sense of connection and empowerment. We aim to be a trusted partner, accompanying individuals on their path to optimal health and offering guidance and support every step of the way.Join us on this transformative journey and unlock the potential of personalized health and wellness management with HLV. Together, we can create a future where individuals thrive and achieve their well-being goals.</p>
        </div>
        
    </div>
</div>

</div>


            </div>

        </div>
    )
}

export default About;