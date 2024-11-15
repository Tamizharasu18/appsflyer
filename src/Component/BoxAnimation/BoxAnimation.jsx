// import React from 'react'
// import Image from 'next/image'

// const BoxAnimation = () => {
//     return (
//         <div className='px-[60px] h-[100vh]'>
//             <div className='relative'>
//                 <div className='mx-[40px] absolute top-0'>
//                     <div className='flex bg-green-200 p-[20px] rounded-3xl w-full'>
//                         <div className='w-[60%] px-[70px] relative pt-[40px]'>
//                             <h2 className='text-[55px] text-black'>Everything you Need in One Place</h2>
//                             <p className='text-[22px] leading-[34px] font-normal text-black absolute bottom-[40px] max-w-[600px]'>Enjoy spacious community living at The Base: 20 rooms, co-working, yoga, pools, and spa, all at a fraction of home rental costs.</p>
//                         </div>
//                         <div className='w-[40%] flex justify-end'>
//                             <Image
//                                 src={"/ibizaFeatureCar3.webp"}
//                                 width={600}
//                                 height={400}
//                                 className='w-[500px] h-[500px] object-cover rounded-3xl'
//                             />
//                         </div>
//                     </div>
//                 </div>
//                 <div className='mx-[20px] absolute top-[25px]'>
//                     <div className='flex bg-pink-200 p-[20px] rounded-3xl w-full'>
//                         <div className='w-[40%] flex justify-end'>
//                             <Image
//                                 src={"/ibizaFeatureCar2.webp"}
//                                 width={600}
//                                 height={400}
//                                 className='w-[500px] h-[500px] object-cover rounded-3xl'
//                             />
//                         </div>
//                         <div className='w-[60%] px-[70px] relative pt-[40px]'>
//                             <h2 className='text-[55px] text-black'>Everything you Need in One Place</h2>
//                             <p className='text-[22px] leading-[34px] font-normal text-black absolute bottom-[40px] max-w-[600px]'>Enjoy spacious community living at The Base: 20 rooms, co-working, yoga, pools, and spa, all at a fraction of home rental costs.</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='absolute top-[50px]'>
//                     <div className='flex bg-blue-200 p-[20px] rounded-3xl w-full'>
//                         <div className='w-[60%] px-[70px] relative pt-[40px]'>
//                             <h2 className='text-[55px] text-black'>Everything you Need in One Place</h2>
//                             <p className='text-[22px] leading-[34px] font-normal text-black absolute bottom-[40px] max-w-[600px]'>Enjoy spacious community living at The Base: 20 rooms, co-working, yoga, pools, and spa, all at a fraction of home rental costs.</p>
//                         </div>
//                         <div className='w-[40%] flex justify-end'>
//                             <Image
//                                 src={"/ibizaFeatureCar1.webp"}
//                                 width={600}
//                                 height={400}
//                                 className='w-[500px] h-[500px] object-cover rounded-3xl'
//                             />
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default BoxAnimation

"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const BoxAnimation = () => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".card");
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".card-container",
                    start: "top 3% top",
                    end: `+=${100 * cards.length}%`,
                    scrub: 0.6, // Increase smoothness with a higher value for scrub
                    pin: true,
                    markers: false, // You can hide markers in production for cleaner visuals
                },
            });

            cards.forEach((card, i) => {
                if (i === 0) return;

                // Adjusted the y position and easing for smooth animation
                timeline.fromTo(
                    card,
                    { y: `${150 + 20 * i}%` },
                    { y: 0, duration: 0.8, ease: "power4.out" }, // Use ease for smoothness
                    `+=${0.4 * i}`
                );
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="px-[60px] h-[400vh]">
            <div className="relative card-container">
                <div className="mx-[40px] absolute top-0 card">
                    <div className="flex bg-green-200 p-[20px] rounded-3xl w-full">
                        <div className="w-[60%] px-[70px] relative pt-[40px]">
                            <h2 className="text-[55px] text-black">
                                Everything you Need in One Place
                            </h2>
                            <p className="text-[22px] leading-[34px] font-normal text-black absolute bottom-[40px] max-w-[600px]">
                                Enjoy spacious community living at The Base: 20 rooms, co-working, yoga, pools, and spa, all at a fraction of home rental costs.
                            </p>
                        </div>
                        <div className="w-[40%] flex justify-end">
                            <Image
                                src="/ibizaFeatureCar3.webp"
                                width={600}
                                height={400}
                                className="w-[500px] h-[500px] object-cover rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
                <div className="mx-[20px] absolute top-[25px] card">
                    <div className="flex bg-pink-200 p-[20px] rounded-3xl w-full">
                        <div className="w-[40%] flex justify-end">
                            <Image
                                src="/ibizaFeatureCar2.webp"
                                width={600}
                                height={400}
                                className="w-[500px] h-[500px] object-cover rounded-3xl"
                            />
                        </div>
                        <div className="w-[60%] px-[70px] relative pt-[40px]">
                            <h2 className="text-[55px] text-black">
                                Everything you Need in One Place
                            </h2>
                            <p className="text-[22px] leading-[34px] font-normal text-black absolute bottom-[40px] max-w-[600px]">
                                Enjoy spacious community living at The Base: 20 rooms, co-working, yoga, pools, and spa, all at a fraction of home rental costs.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute top-[50px] card">
                    <div className="flex bg-blue-200 p-[20px] rounded-3xl w-full">
                        <div className="w-[60%] px-[70px] relative pt-[40px]">
                            <h2 className="text-[55px] text-black">
                                Everything you Need in One Place
                            </h2>
                            <p className="text-[22px] leading-[34px] font-normal text-black absolute bottom-[40px] max-w-[600px]">
                                Enjoy spacious community living at The Base: 20 rooms, co-working, yoga, pools, and spa, all at a fraction of home rental costs.
                            </p>
                        </div>
                        <div className="w-[40%] flex justify-end">
                            <Image
                                src="/ibizaFeatureCar1.webp"
                                width={600}
                                height={400}
                                className="w-[500px] h-[500px] object-cover rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoxAnimation;

