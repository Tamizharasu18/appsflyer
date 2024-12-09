"use client"
import React from 'react'
import Image from 'next/image';
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Rotate = () => {


    useEffect(() => {
        gsap.to(".rotate-on-scroll", {
            rotation: 360,
            scrollTrigger: {
                trigger: ".rotate-on-scroll",
                start: "top 80%",
                scrub: true,
            },
        });
    }, []);

    return (
        <div className='h-[100vh]'>
            <div className="rotate-on-scroll ">
                <Image
                    src={"/ibizaFeatureCar1.webp"}
                    width={400}
                    height={400}
                    alt=''
                    className=''
                />
            </div>
        </div>
    )
}

export default Rotate
