// "use client"
// import Image from 'next/image';
// import React from 'react'
// import { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);


// const Navbar = () => {


//   useEffect(() => {
//     gsap.to(".horizontal-scroll", {
//       xPercent: -100,
//       ease: "none",
//       scrollTrigger: {
//         trigger: ".horizontal-container",
//         pin: true,
//         scrub: true,
//         start: "top 10%",
//         end: "+=2000",
//       },
//     });
//   }, []);

//   return (
//     <div className="horizontal-container h-[100vh] overflow-hidden flex items-center">
//       <div className="horizontal-scroll flex space-x-8">
//         <div className="">
//           <Image
//             src={"/rose.jpeg"}
//             width={300}
//             height={300}
//             alt=''
//             className=''
//           />
//         </div>
//         <div className="">
//           <Image
//             src={"/rose.jpeg"}
//             width={300}
//             height={300}
//             alt=''
//             className=''
//           />
//         </div>
//         <div className="">
//           <Image
//             src={"/rose.jpeg"}
//             width={300}
//             height={300}
//             alt=''
//             className=''
//           />
//         </div>
//         <div className="">
//           <Image
//             src={"/rose.jpeg"}
//             width={300}
//             height={300}
//             alt=''
//             className=''
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar


"use client"
import Image from 'next/image';
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {

    gsap.to(".horizontal-scroll", {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-container",
        pin: true,
        scrub: true,
        start: "top top",
        end: "+=2000",
        anticipatePin: 1,
      },
    });
  }, []);

  return (
    <div className="horizontal-container h-[100vh]  flex items-center overflow-hidden">
      <div className="horizontal-scroll flex space-x-8 relative left-[700px]">
        {[...Array(4)].map((_, index) => (
          <div key={index}>
            <Image
              src={"/rose.jpeg"}
              width={500}
              height={500}
              alt={`Rose ${index + 1}`}
              className="rounded-md w-[500px] h-[300px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
