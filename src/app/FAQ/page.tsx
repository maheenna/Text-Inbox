'use client'
import Image from 'next/image'
import React from 'react'
import { FiDownload } from "react-icons/fi"
import dot from "../../../public/images/dot.png"
import { useState } from 'react'


const FAQ = () => {
    const [showLorem, setShowLorem] = useState(false);
    const [showLorem1, setShowLorem1] = useState(false);
    const [showLorem2, setShowLorem2] = useState(false);
    const [showLorem3, setShowLorem3] = useState(false);
    const [showLorem4, setShowLorem4] = useState(false);
    const [showLorem5, setShowLorem5] = useState(false);
    const [showLorem6, setShowLorem6] = useState(false);
    const [showLorem7, setShowLorem7] = useState(false);
    const [showLorem8, setShowLorem8] = useState(false);

    const toggleLorem = () => {
        setShowLorem(!showLorem);
    };
    const toggleLorem1 = () => {
        setShowLorem1(!showLorem1)
    }
    const toggleLorem2 = () => {
        setShowLorem2(!showLorem2)
    }
    const toggleLorem3 = () => {
        setShowLorem3(!showLorem3)
    }
    const toggleLorem4 = () => {
        setShowLorem4(!showLorem4)
    }
    const toggleLorem5 = () => {
        setShowLorem5(!showLorem5)
    }
    const toggleLorem6 = () => {
        setShowLorem6(!showLorem6)
    }
    const toggleLorem7 = () => {
        setShowLorem7(!showLorem7)
    }
    const toggleLorem8 = () => {
        setShowLorem8(!showLorem8)
    }
    return (
        <div className='bg-[#99C8FF] '>
            <div className='bg-[#99C8FF] min-h-screen z-0 pt-[6rem] pb-[6rem]'>
                <div className='lg:mx-[12rem] mx-[1rem]  pb-[2rem] bg-black text-white rounded-lg '>
                    <div className='text-center'>
                        <h1 className='md:text-[30px] text-[22px] pt-10'>Frequently asked questions</h1>
                    </div>

                    <div className='md:px-[10rem] pt-[3rem] px-[1rem] mx-auto pb-[1rem] font-sans'>
                        <div className='border-b-[1px] border-b-gray-300 border-opacity-50'>
                            <div className='text-center flex items-center'>
                                <Image src={dot} alt='dot' className='md:mr-2' /> {/* Added margin to the right of the image */}
                                <p className='text-[15px] font-thin opacity-80'>
                                    How are products rated?
                                </p>
                                <div className='lg:ml-[18rem] ml-[6rem] ' onClick={toggleLorem}> {/* Added margin to the left of the icon */}
                                    <FiDownload className='opacity-80' />
                                </div>
                            </div>
                        </div>
                        {showLorem && (
                            <div>
                                {/* Your Lorem Ipsum text goes here */}
                                <p className='bg-white text-black p-4 rounded-lg text-[14px]'>At HLV, we prioritize your safety and well-being by carefully analyzing and rating various products, including prescribed and Over-the-Counter (OTC) drugs. Our advanced models map the active and inactive ingredients present in a drug to your personal health information. We also consider adverse reaction data, allergies information, and user feedback to provide reliable ratings. At HLV, our commitment is to empower you with reliable and personalized information to make informed decisions about your healthcare. By leveraging advanced analysis and incorporating user feedback, we strive to provide you with the most trustworthy and up-to-date ratings for the products you use.</p>

                                {/* Add more Lorem Ipsum lines as needed */}
                            </div>
                        )}
                    </div>


                    <div className='md:px-[10rem] pt-[rem] px-[1rem] mx-auto pb-[1rem] font-sans'>
                        <div className='border-b-[1px] border-b-gray-300 border-opacity-50'>
                            <div className='text-center flex items-center'>
                                <Image src={dot} alt='dot' className='md:mr-2' /> {/* Added margin to the right of the image */}
                                <p className='text-[15px] font-thin opacity-80'>
                                    How does the scanner work?
                                </p>
                                <div className='lg:ml-[16.2rem] ml-[4.5rem] ' onClick={toggleLorem1}> {/* Added margin to the left of the icon */}
                                    <FiDownload className='opacity-80' />
                                </div>
                            </div>
                        </div>
                        {showLorem1 && (
                            <div>
                                {/* Your Lorem Ipsum text goes here */}
                                <p className='bg-white text-black p-4 rounded-lg text-[14px]'>We employ a highly reliable data capture technology on smart mobile devices to effortlessly scan barcodes, IDs, and QR codes found on various products. Our state-of-the-art scanner utilizes advanced text recognition to extract essential information, feeding it directly into our secure backend for further analysis. <br /> <br />

                                    To access the scanner functionality: <br /> <br />
                                    - Simply grant camera access to the HLV app, enabling seamless scanning capabilities. <br /> <br />
                                    - Ensure a stable and reliable internet connection to efficiently retrieve the necessary data.</p>

                                {/* Add more Lorem Ipsum lines as needed */}
                            </div>
                        )}
                    </div>


                    <div className='md:px-[10rem] pt-[rem] px-[1rem] mx-auto pb-[1rem] font-sans'>
                        <div className='border-b-[1px] border-b-gray-300 border-opacity-50'>
                            <div className='text-center flex items-center'>
                                <Image src={dot} alt='dot' className='md:mr-2' /> {/* Added margin to the right of the image */}
                                <p className='text-[15px] font-thin opacity-80'>
                                    How can I update my health profile?
                                </p>
                                <div className='lg:ml-[13.2rem] ml-[1.7rem] ' onClick={toggleLorem2}> {/* Added margin to the left of the icon */}
                                    <FiDownload className='opacity-80' />
                                </div>
                            </div>
                        </div>
                        {showLorem2 && (
                            <div>
                                {/* Your Lorem Ipsum text goes here */}
                                <p className='bg-white text-black p-4 text-[14px] rounded-lg'>To access and update your health profile, follow these simple steps: <br /> <br />

                                    - Go to your profile section, where you'll find a dedicated feature called "Health Profile." <br /> <br />
                                    - Look for the edit icon located on the right-hand side and tap on it.
                                    - Upon tapping, you'll be able to select or deselect your previously chosen health conditions. <br /> <br />
                                    - Keep in mind that you can select a maximum of three health conditions to ensure relevance and focus. <br /> <br />
                                    - If you're having trouble locating your health profile, simply click on this direct link: Health Profile. <br /> <br />
                                    Maintaining an up-to-date health profile is crucial for personalized care and tailored recommendations. Take control of your well-being by effortlessly managing your health conditions through our user-friendly profile feat
                                </p>

                                {/* Add more Lorem Ipsum lines as needed */}
                            </div>
                        )}
                    </div>

                    <div className='md:px-[10rem] px-[1rem] mx-auto pb-[1rem] font-sans'>
                        <div className='border-b-[1px] border-b-gray-300 border-opacity-50'>
                            <div className='text-center flex items-center'>
                                <Image src={dot} alt='dot' className='md:mr-2' /> {/* Added margin to the right of the image */}
                                <p className='text-[15px] font-thin opacity-80'>
                                    How can I reach out to the HLV team?
                                </p>
                                <div className='md:ml-[12.4rem] ml-[1rem]' onClick={toggleLorem3}> {/* Added margin to the left of the icon */}
                                    <FiDownload className='opacity-80' />
                                </div>
                            </div>
                        </div>
                        {showLorem3 && (
                            <div>
                                {/* Your Lorem Ipsum text goes here */}
                                <p className='bg-white text-black p-4 text-[14px] rounded-lg'> To reach out to us, please send an email to oluowolabi12@gmail.com <br /> </p>


                            </div>
                        )}
                    </div>

                    <div className='md:px-[10rem] px-[1rem] mx-auto pb-[1rem] font-sans'>
                        <div className='border-b-[1px] border-b-gray-300 border-opacity-50'>
                            <div className='text-center flex items-center'>
                                <Image src={dot} alt='dot' className='md:mr-2' /> {/* Added margin to the right of the image */}
                                <p className='text-[15px] font-thin opacity-80'>
                                    How is my data stored?
                                </p>
                                <div className=' md:ml-[18.3rem] ml-[6.5rem]' onClick={toggleLorem4}> {/* Added margin to the left of the icon */}
                                    <FiDownload className='opacity-80' />
                                </div>
                            </div>
                        </div>
                        {showLorem4 && (
                            <div>
                                {/* Your Lorem Ipsum text goes here */}
                                <p className='bg-white text-black p-4 text-[14px] rounded-lg'> At HLV, we take data privacy and security very seriously. Your data is stored with the utmost care and in compliance with stringent security protocols and polices. We prioritize the confidentiality of your information and adhere to strict policies to ensure its protection. <br /> <br />

                                    Rest assured that we do not share or sell your data without your explicit consent. Your data remains confidential and is used solely for the purpose of providing you with personalized health and wellness services within the app.</p>

                                {/* Add more Lorem Ipsum lines as needed */}
                            </div>
                        )}
                    </div>


                    <div className='md:px-[10rem] px-[1rem] mx-auto pb-[1rem] font-sans '>
                        <div className='border-b-[1px] border-b-gray-300 border-opacity-50'>
                            <div className='text-center flex items-center'>
                                <Image src={dot} alt='dot' className='md:mr-2 md:w-[60px] w-[100px]' /> {/* Added margin to the right of the image */}
                                <p className='text-[15px] font-thin opacity-80'>
                                    What happens if i encounter technical issues or need assistance with the app?
                                </p>
                                <div className='md:ml-[1.5rem] ml-[0.2rem] md:mr-[0.5rem] mr-[0.3rem]' onClick={toggleLorem6}> {/* Added margin to the left of the icon */}
                                    <FiDownload className='opacity-80' />
                                </div>
                            </div>
                        </div>
                        {showLorem6 && (
                            <div>
                                {/* Your Lorem Ipsum text goes here */}
                                <p className='bg-white text-black p-4 text-[14px] rounded-lg'>At HLV, we strive to provide a seamless and user-friendly experience. If you encounter any technical issues or need assistance, our dedicated support team is here to help. Please reach out to our support team via the "Contact Us" section within the app, and provide as much detail as possible about the problem you are facing. Our team will promptly investigate the issue and provide you with the necessary guidance and support to resolve it.</p>

                                {/* Add more Lorem Ipsum lines as needed */}
                            </div>
                        )}
                    </div>

                    <div className='md:px-[10rem] px-[1rem] mx-auto pb-[1rem] font-sans'>
                        <div className='border-b-[1px] border-b-gray-300 border-opacity-50'>
                            <div className='text-center flex items-center'>
                                <Image src={dot} alt='dot' className='md:mr-2 md:w-[60px] w-[100px]' /> {/* Added margin to the right of the image */}
                                <p className='text-[15px] font-thin opacity-80'>
                                    How does HLV handle user feedback and incorporate it into app's feature?
                                </p>
                                <div className='md:ml-[2rem] md:mr-1 ml-2' onClick={toggleLorem7}> {/* Added margin to the left of the icon */}
                                    <FiDownload className='opacity-80' />
                                </div>
                            </div>
                        </div>
                        {showLorem7 && (
                            <div>
                                {/* Your Lorem Ipsum text goes here */}
                                <p className='bg-white text-black p-4 text-[14px] rounded-lg'>
                                    We highly value user feedback as it plays a crucial role in improving our app and enhancing the user experience. We actively collect and review user feedback through various channels, including in-app feedback forms and user surveys. Our team carefully evaluates this feedback and incorporates valuable insights into the development and enhancement of HLV's features and functionalities. Your feedback helps us understand your needs better and ensures that we continue to deliver an app that meets your expectations.

                                </p>

                            </div>
                        )}
                    </div>


                    <div className='md:px-[10rem] px-[1rem] mx-auto pb-[1rem] font-sans'>
                        <div className='border-b-[1px] border-b-gray-300 border-opacity-50'>
                            <div className='text-center flex items-center'>
                                <Image src={dot} alt='dot' className='md:mr-2  w-[120px] md:w-[60px]' /> {/* Added margin to the right of the image */}
                                <p className='text-[15px] font-thin opacity-80'>
                                    What should I do if I suspect any suspicious activity or unauthorized use of my account?
                                </p>
                                <div className='md:mr-[0.5rem] ml-2' onClick={toggleLorem8}> {/* Added margin to the left of the icon */}
                                    <FiDownload className='opacity-80' />
                                </div>
                            </div>
                        </div>
                        {showLorem8 && (
                            <div>
                                {/* Your Lorem Ipsum text goes here */}
                                <p className='bg-white text-black p-4 text-[14px] rounded-lg'> If you suspect any suspicious activity or unauthorized use of your HLV account, it is important to take immediate action to protect your information. We recommend the following steps: <br /> <br />
                                    - Change your account password: Access the account settings within the app and update your password to a strong, unique one. <br /> <br />
                                    - Enable two-factor authentication: If available, enable two-factor authentication for an added layer of security. <br /> <br />
                                    - Contact our support team: Notify our support team immediately about the suspected unauthorized activity. They will assist you in securing your account and investigating the issue further. <br /> <br />

                                    We advise out users to monitor and review thier personl account regularly and report any additional concerns or incidents to our support team.</p>

                                {/* Add more Lorem Ipsum lines as needed */}
                            </div>
                        )}
                    </div>



                </div>
            </div>
        </div>
    )
}

export default FAQ