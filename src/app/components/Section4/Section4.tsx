import React from 'react'
import section4 from "../../../app/data.json"
import Image from "next/image"

const Section4 = () => {
  return (
    <div className='my-[4rem]'>
        <div className='text-center'>
        <h1 className=' text-[#004D4A] text-[30px] md:text-[40px] font-[700] mx-[2rem] md:mx-[18rem]'>
            {section4.section4.mainheading}
        </h1>
        <p className='text-[24px] font-sans mt-7 md:mt-4 mx-3'>{section4.section4.description}</p>
        <div className='w-[80%] md:w-[70%] mt-[3rem] md:mt-[3rem] mb-[3rem] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[3rem] relative'>
                    {/* 1st card */}
                    <div>
                        <div className='font-sans py-10 px-[2rem] text-start  rounded-xl shadow-2xl transition-all'>
                        <p className='bg-[#BAFBF8] inline'>
                             {section4.section4.firstcardfirstline} 
                        </p>
                        <div className='text-[16px] mt-3'>
                            <p>
                                {section4.section4.firstcardfirstpara} 
                            <span className='bg-[#BAFBF8]'>{section4.section4.firstCardFirstParaTextHighlighted}</span>

                            <span> {section4.section4.firstCardFirstParaTextRemaining}</span>
                        </p></div>
                        <div className='text-[16px] mt-3'><p>{section4.section4.firstCardSecondPara} <span className='bg-[#BAFBF8]'>{section4.section4.firstCardSecondParaTextHighlighted1}</span>
                        <span> {section4.section4.firstCardSecondParaTextRemaining1}</span>
                        <span className='bg-[#BAFBF8]'>{section4.section4.firstCardSecondParaTextHighlighted2}</span>
                        <span>{section4.section4.firstCardSecondParaTextRemaining2}</span></p></div>
                        <div className='text-[16px] mt-3'><p><span className='bg-[#BAFBF8]'>{section4.section4.firstCardThirdParaHighlighted}</span> <span >{section4.section4.firstCardThirdPara}</span>
                        </p></div>
                        </div>
                        
                        
                        </div>
                        {/* 2nd card */}
                    
                    <div className=''> 
                        <div className='font-sans pt-10 pb-10 md:pb-[4.5rem] px-[2rem] text-start  rounded-xl shadow-2xl transition-all'>
                        <p className='bg-gray-200 inline'>
                             {section4.section4.secondCardFirstLine} 
                        </p>
                        <div className='text-[16px] mt-3'>
                            <p>
                                {section4.section4.secondCardFirstPara} 
                            <span className='bg-gray-200'>{section4.section4.secondCardFirstParaHighlighted1}</span>
                            <span>{section4.section4.secondCardFirstParaRemaining1}</span>
                            <span className='bg-gray-200'> {section4.section4.secondCardFristParaHighlight2}</span>
                            <span>{section4.section4.secondCardFirstParaRemaining2}</span>
                        </p></div>
                        <div className='text-[16px] mt-3'><p>{section4.section4.secondCardSecondPara} <span className='bg-gray-200'>{section4.section4.secondCardSecondParaHighlight}</span>
                        <span> {section4.section4.secondCardSecondParaRemaining}</span></p>
                        <div className='text-[16px] mt-3'><p>
                            {section4.section4.secondCardThirdPara}</p></div>
                        </div>
                        <div className='text-[16px] mt-3'><p>
                            {section4.section4.secondCardFourParaLine1}</p>
                            <p className='bg-gray-200 inline mt-2'>
                            {section4.section4.secondCardFourParaLine2}</p>
                        </div>

                        
                        
                        </div>
                    </div>
                    <Image src={"/images/section4.png"} alt='section4' height={100} width={100} className='absolute and top-0 left-[44%] md:block hidden'/>



                    
                    
                </div>
        
    </div>
    </div>
    
  )
}

export default Section4