"use client"
import Image from 'next/image'
import './Appsflyer.css'
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { EffectFade } from 'swiper/modules';
import MobileAppsflyer from './MobileAppsflyer';
const Appsflyer = () => {
    const swiperRef = useRef(null);
    const textRefs = useRef([]);
    const swiperInstance = useRef(null);

    useEffect(() => {
        textRefs.current.forEach((textRef, index) => {

            ScrollTrigger.create({
                trigger: textRef,
                start: "top center",
                end: "bottom center",
                onEnter: () => {
                    swiperInstance.current?.slideTo(index);
                },
                onEnterBack: () => {
                    swiperInstance.current?.slideTo(index);
                },
                markers: false,
                scrub: true
            });


            gsap.fromTo(
                textRef,
                { opacity: 1, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: textRef,
                        start: "top center",
                        end: "bottom center",
                        scrub: true
                    }
                }
            );
        });
    }, []);



    return (
        <div className='px-[20px] md:px-[60px]'>
            <div className='lg:hidden'>
                <MobileAppsflyer />
            </div>
            <div className='lg:flex w-[100%] hidden'>
                <div className='w-[50%] relative top-[100px]'>
                    <div className='pb-[94.848px] pt-[40px]' ref={el => textRefs.current[0] = el}>
                        <h2 className='text-[34px] font-bold leading-[42px] text-left mb-[5px] max-w-[550px] text-[#220d4e]'>Can you accurately measure your marketing while protecting customer privacy?</h2>
                        <p className='text-[18px] leading-[30.34px] mb-[20px] text-left font-normal max-w-[550px] text-[#514b5f]'>Bringing in new customers is great. Getting accurate insights while protecting your customers’ privacy is even better. Our privacy-preserving measurement and cost aggregation technologies give you insights you can count on across channels, platforms, and devices.</p>
                        <div className='flex items-center gap-x-[5px] hover:gap-x-[10px] cursor-pointer py-[10px] transition-all duration-300'>
                            <div className='arrow'>
                                <span className='text-[16px] font-medium leading-[21px] pb-[10px] btn-arrow text-[#220d4e]'>Explore our measurement suite</span>
                            </div>
                            <div>
                                <Image
                                    src={"/right-arrow.svg"}
                                    width={20}
                                    height={20}
                                    alt=''
                                    className='w-[15px] h-[15px]'
                                />
                            </div>
                        </div>
                        <div className='flex items-center gap-x-[5px] hover:gap-x-[10px] cursor-pointer py-[10px] transition-all duration-300'>
                            <div className='arrow'>
                                <span className='text-[16px] font-medium leading-[21px] pb-[10px] btn-arrow text-[#220d4e]'>Explore our SKAdNetwork solution</span>
                            </div>
                            <div>
                                <Image
                                    src={"/right-arrow.svg"}
                                    width={20}
                                    height={20}
                                    alt=''
                                    className='w-[15px] h-[15px]'
                                />
                            </div>
                        </div>
                        <div className='flex items-center gap-x-[5px] hover:gap-x-[10px] cursor-pointer py-[10px] transition-all duration-300'>
                            <div className='arrow'>
                                <span className='text-[16px] font-medium leading-[21px] pb-[10px] btn-arrow text-[#220d4e]'>Explore our ROI measurement solution</span>
                            </div>
                            <div>
                                <Image
                                    src={"/right-arrow.svg"}
                                    width={20}
                                    height={20}
                                    alt=''
                                    className='w-[16px] h-[16px] '
                                />
                            </div>
                        </div>
                    </div>



                    <div className='py-[94.848px]' ref={el => textRefs.current[1] = el}>
                        <h2 className='text-[34px] font-bold leading-[42px] text-left mb-[5px] max-w-[580px] text-[#220d4e]'>Can you build a winning creative strategy that is based on performance data and AI insights?</h2>
                        <p className='text-[18px] leading-[30.34px] mb-[20px] text-left font-normal max-w-[550px] text-[#514b5f]'>When it comes to building a winning creative formula, leveraging performance data and AI is crucial. With our AI-powered solution, you can harness the power of data and advanced technology to create a creative strategy that is supported by reliable performance metrics and valuable AI-driven insights.</p>
                        <div className='flex items-center gap-x-[5px] hover:gap-x-[10px] cursor-pointer py-[10px] transition-all duration-300'>
                            <div className='arrow'>
                                <span className='text-[16px] font-medium leading-[21px] pb-[10px] btn-arrow text-[#220d4e]'>Explore our Creative Optimization solution</span>
                            </div>
                            <div>
                                <Image
                                    src={"/right-arrow.svg"}
                                    width={20}
                                    height={20}
                                    alt=''
                                    className='w-[15px] h-[15px]'
                                />
                            </div>
                        </div>
                    </div>



                    <div className='py-[94.848px]' ref={el => textRefs.current[2] = el}>
                        <h2 className='text-[34px] font-bold leading-[42px] text-left mb-[5px] max-w-[560px] text-[#220d4e]'>Do you have the tools to turn your insights into actions?</h2>
                        <p className='text-[18px] leading-[30.34px] mb-[20px] text-left font-normal max-w-[550px] text-[#514b5f]'>Not all marketing activities are created equal. Our analytics suite simplifies complex data and gives you a unified view of campaign performance so you can make better, faster marketing choices at every stage of the customer journey.</p>
                        <div className='flex items-center gap-x-[5px] hover:gap-x-[10px] cursor-pointer py-[10px] transition-all duration-300'>
                            <div className='arrow'>
                                <span className='text-[16px] font-medium leading-[21px] pb-[10px] btn-arrow text-[#220d4e]'>Explore our marketing analytics suite</span>
                            </div>
                            <div>
                                <Image
                                    src={"/right-arrow.svg"}
                                    width={20}
                                    height={20}
                                    alt=''
                                    className='w-[15px] h-[15px]'
                                />
                            </div>
                        </div>
                    </div>



                    <div className='py-[94.848px]' ref={el => textRefs.current[3] = el}>
                        <h2 className='text-[34px] font-bold leading-[42px] text-left mb-[5px] max-w-[550px] text-[#220d4e]'>Can you create exceptional experiences that keep customers engaged?</h2>
                        <p className='text-[18px] leading-[30.34px] mb-[20px] text-left font-normal max-w-[550px] text-[#514b5f]'>To succeed, you need to meet your customers where they are. Our customer experience and engagement suite, powered by a reliable deep linking engine, lets you create personalized journeys that increase conversions and return on experience.</p>
                        <div className='flex items-center gap-x-[5px] hover:gap-x-[10px] cursor-pointer py-[10px] transition-all duration-300'>
                            <div className='arrow'>
                                <span className='text-[16px] font-medium leading-[21px] pb-[10px] btn-arrow text-[#220d4e]'>Explore our CX and deep linking suite</span>
                            </div>
                            <div>
                                <Image
                                    src={"/right-arrow.svg"}
                                    width={20}
                                    height={20}
                                    alt=''
                                    className='w-[15px] h-[15px]'
                                />
                            </div>
                        </div>
                    </div>



                    <div className='pt-[94.848px] pb-[150px]' ref={el => textRefs.current[4] = el}>
                        <h2 className='text-[34px] font-bold leading-[42px] text-left mb-[5px] max-w-[570px] text-[#220d4e]'>Is your budget safe from mobile ad fraud?</h2>
                        <p className='text-[18px] leading-[30.34px] mb-[20px] text-left font-normal max-w-[550px] text-[#514b5f]'>Bots and click farms aren’t going to generate revenue (for you). That’s why you need a comprehensive fraud protection solution to make sure you’re investing in the right channels, and only measuring and paying for real actions.</p>
                        <div className='flex items-center gap-x-[5px] hover:gap-x-[10px] cursor-pointer py-[10px] transition-all duration-300'>
                            <div className='arrow'>
                                <span className='text-[16px] font-medium leading-[21px] pb-[10px] btn-arrow text-[#220d4e]'>Explore our fruad solutions</span>
                            </div>
                            <div>
                                <Image
                                    src={"/right-arrow.svg"}
                                    width={20}
                                    height={20}
                                    alt=''
                                    className='w-[15px] h-[15px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-[50%]'>
                    <div className='w-[686px] h-[492.163px] sticky top-[120px]'>
                        <Swiper
                            onSwiper={(swiper) => swiperInstance.current = swiper}
                            spaceBetween={30}
                            effect={'fade'}
                            modules={[EffectFade]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <Image
                                    src={'/New folder/USP_1-1.svg'}
                                    width={800}
                                    height={800}
                                    alt=''
                                    className='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={'/New folder/USP_2-1.svg'}
                                    width={800}
                                    height={800}
                                    alt=''
                                    className='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    src={'/New folder/USP_3.svg'}
                                    width={800}
                                    height={800}
                                    alt=''
                                    className='' />
                            </SwiperSlide>
                            <SwiperSlide><Image
                                src={'/New folder/USP_4-1.svg'}
                                width={800}
                                height={800}
                                alt=''
                                className='' />
                            </SwiperSlide>
                            <SwiperSlide><Image
                                src={'/New folder/USP_5-1.svg'}
                                width={800}
                                height={800}
                                alt=''
                                className='' />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appsflyer
