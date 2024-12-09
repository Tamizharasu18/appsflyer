"use client"
import React, { useState, useRef, useEffect } from 'react'
import './IndiaAnimation/IndiaAnimatiom.css'
import { gsap } from "gsap";

const BoxCircle = () => {

    const shapeRefs = Array.from({ length: 16 }).map(() => useRef(null));
    const svgRef = useRef();
     
    const [activeIndex, setActiveIndex] = useState(0); // Track the active shape index

    const rotateSVG = (direction) => {
        // Rotate the SVG
        gsap.to(svgRef.current, {
            rotation: direction === "right" ? "+=20" : "-=20", // Rotate left or right
            transformOrigin: "center",
            duration: 0.5,
        });

        // Update active shape index
        setActiveIndex((prevIndex) =>
            direction === "left"
                ? (prevIndex + 1) % shapeRefs.length // Increment index
                : (prevIndex - 1 + shapeRefs.length) % shapeRefs.length // Decrement index
        );
    };

    const highlightActiveShape = () => {
        // Highlight the active shape
        shapeRefs.forEach((ref, index) => {
            if (ref.current) {
                gsap.to(ref.current, {
                    opacity: index === activeIndex ? 1 : 0.5, // Highlight active shape, dim others
                    backgroundColor: index === activeIndex ? '#f41451' : '#000', // Adjust background color
                    color: index === activeIndex ? '#ffffff' : '#000', // Adjust text color
                    duration: 0.3,
                });
            }
        });
    };

    React.useEffect(() => {
        highlightActiveShape();
    }, [activeIndex]);


    return (

        <div>
            <div className='relative flex items-center justify-center'>
                <svg
                    ref={svgRef}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={600}
                    height={600}
                    style={{
                        transform: "rotate(2475.5deg)",
                        transition: "transform .5s ease-out .3s",
                    }}

                >
                    <defs>
                        <pattern id="b" width={500} height={500} patternUnits="userSpaceOnUse">
                            <image xlinkHref="images/pattern-2.png" width={500} height={500} />
                        </pattern>
                    </defs>
                    <defs>
                        <filter id="a">
                            <feOffset dy={6} in="SourceAlpha" />
                            <feGaussianBlur result="blurOut" stdDeviation={3} />
                            <feFlood floodColor="#FFF" result="floodOut" />
                            <feComposite
                                in="floodOut"
                                in2="blurOut"
                                operator="out"
                                result="compOut"
                            />
                            <feComposite in="compOut" in2="SourceAlpha" operator="in" />
                            <feComponentTransfer>
                                <feFuncA slope={0.47} type="linear" />
                            </feComponentTransfer>
                            <feBlend in2="SourceGraphic" />
                        </filter>
                        <filter id="c">
                            <feOffset dy={6} in="SourceAlpha" />
                            <feGaussianBlur result="blurOut" stdDeviation={3} />
                            <feFlood floodColor="#FFF" result="floodOut" />
                            <feComposite
                                in="floodOut"
                                in2="blurOut"
                                operator="out"
                                result="compOut"
                            />
                            <feComposite in="compOut" in2="SourceAlpha" operator="in" />
                            <feComponentTransfer>
                                <feFuncA slope={0.47} type="linear" />
                            </feComponentTransfer>
                            <feBlend in2="SourceGraphic" />
                        </filter>
                    </defs>
                    <g ref={shapeRefs[0]} data-deg={0} data-id={11} data-shape={1} transform="translate(250 385)">
                        <path
                            fill='url("#b")'
                            fillRule="evenodd"
                            stroke="#9794AB"
                            strokeOpacity={0.65}
                            d="M29.137 152.858c-8.564-2.037-17.195-3.335-25.722-5.519-3.181-.815-3.117-3.192-2.068-5.846 3.251-8.221 6.416-16.476 9.61-24.719C24.616 81.516 38.272 46.257 51.932 10.999 54.829 3.52 64.816-1.623 72.125.949c1.067.374 2.128 2.906 1.962 4.293-.847 7.099-2.037 14.159-3.22 21.213-2.517 15.014-5.102 30.015-7.662 45.021-2.508 14.705-5.022 29.409-7.525 44.114-1.124 6.604-2.308 13.197-3.323 19.816-2.086 13.604-7.524 18.119-21.266 17.489"
                            filter="url(#a)"
                        />
                        <foreignObject
                            width={125}
                            height={50}
                            x={-75}
                            y={4}
                            transform="rotate(-77 55 11.142)"
                        >
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span className="ellipsis" title="Automobile">
                                    {"Automobile"}
                                </span>
                            </div>
                        </foreignObject>
                    </g>
                    <g ref={shapeRefs[1]}
                        data-deg={22.5}
                        data-id={504}
                        data-shape={2}
                        transform="translate(154 383)"
                    >
                        <path
                            fill='url("#b")'
                            fillRule="evenodd"
                            stroke="#9794AB"
                            strokeOpacity={0.65}
                            d="M137.291 3.629c-7.216 10.487-14.417 21.034-21.704 31.523a34929.405 34929.405 0 0 1-53.9 77.386c-2.09 2.99-4.305 5.966-6.881 8.526-5.926 5.888-14.005 7.87-20.919 3.436-10.996-7.055-21.305-15.207-31.69-23.177-3.204-2.459-.517-4.509 1.567-6.155 10.419-8.229 20.885-16.398 31.275-24.663 28.063-22.323 56.179-44.58 84.055-67.133 4.508-3.647 12.612-4.462 18.197.257z"
                            filter="url(#a)"
                        />
                        <foreignObject
                            width={125}
                            height={50}
                            x={-45}
                            y={42}
                            transform="rotate(-49 55 -2.914)"
                        >
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span className="ellipsis" title="Aviation">
                                    {"Aviation"}
                                </span>
                            </div>
                        </foreignObject>
                    </g>
                    <g ref={shapeRefs[2]} data-deg={45} data-id={667} data-shape={3} transform="translate(84 370)">
                        <path
                            fill='url("#b")'
                            fillRule="evenodd"
                            stroke="#9794AB"
                            strokeOpacity={0.65}
                            d="M178.708 7.096C138.592 29.654 98.825 51.965 59.113 74.375c-13.384 7.552-20.851 6.934-31.044-4.5A94.577 94.577 0 0 1 14.68 50.362c-4.938-9.61-8.748-19.81-12.858-29.832-1.965-4.793-1.223-6.035 3.961-6.512 13.933-1.281 27.89-2.309 41.83-3.517 22.583-1.956 45.16-3.984 67.741-5.967 16.055-1.409 32.098-3.029 48.177-4.081 7.126-.466 9.359 1.022 15.177 6.643z"
                            filter="url(#a)"
                        />
                        <foreignObject
                            width={125}
                            height={50}
                            x={-5}
                            y={26}
                            transform="rotate(-22 55 -47.168)"
                        >
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span className="ellipsis" title="Construction">
                                    {"Construction"}
                                </span>
                            </div>
                        </foreignObject>
                    </g>
                    <g ref={shapeRefs[3]}
                        data-deg={67.5}
                        data-id={669}
                        data-shape={4}
                        data-translatex={16}
                        transform="translate(66 306)"
                    >
                        <path
                            fill='url("#b")'
                            fillRule="evenodd"
                            stroke="#9794AB"
                            strokeOpacity={0.65}
                            d="M174.112 53.367c-7.622.208-13.994.489-20.369.538-30.905.244-61.81.446-92.716.619-12.332.069-24.676.381-36.992-.058-14.244-.507-20.743-6.895-21.982-21.112C1.274 24.412 1.007 15.42.695 6.444.494.626 1.22-.14 6.903.556c12.385 1.517 24.742 3.28 37.104 4.985 17.19 2.37 34.364 4.853 51.563 7.152 17.351 2.318 34.726 4.446 52.084 6.708 4.923.642 7.863 3.321 10.103 8.009 3.386 7.088 7.859 13.662 11.968 20.393 1.004 1.645 2.39 3.057 4.387 5.564z"
                            filter="url(#a)"
                        />
                        <foreignObject
                            width={125}
                            height={50}
                            x={-15}
                            y={20}
                            transform="translate(30)"
                        >
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span className="ellipsis" title="Defence Manufacturing">
                                    {"Defence Manufacturing"}
                                </span>
                            </div>
                        </foreignObject>
                    </g>
                    <g ref={shapeRefs[4]} data-deg={90} data-id={670} data-shape={5} transform="translate(67 206)">
                        <path
                            fill='url("#b")'
                            fillRule="evenodd"
                            stroke="#9794AB"
                            strokeOpacity={0.65}
                            d="M149.334 105.279c.225 3.408-1.699 4.65-5.412 3.843-29.419-6.398-58.831-12.825-88.269-19.128-12.937-2.769-25.927-5.288-38.899-7.89C5.395 79.825.291 73.142.219 61.521.089 40.704 8.066 22.259 16.538 3.949c1.992-4.307 3.629-4.41 8.297-.834 17.922 13.727 35.793 27.521 53.647 41.337a32329.004 32329.004 0 0 1 64.35 49.94c3.382 2.631 6.846 5.306 6.502 10.887z"
                            filter="url(#a)"
                        />
                        <foreignObject
                            width={125}
                            height={50}
                            x={-5}
                            y={53}
                            transform="rotate(25 55 97.66)"
                        >
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span className="ellipsis" title="Electronic Systems">
                                    {"Electronic Systems"}
                                </span>
                            </div>
                        </foreignObject>
                    </g>
                    <g ref={shapeRefs[5]}
                        className="active"
                        data-deg={112.5}
                        data-id={671}
                        data-shape={6}
                        transform="translate(104 134)"
                    >
                        <path
                            fill="#F41451"
                            fillRule="evenodd"
                            stroke="#F41451"
                            d="M111.962 161.12c-12.475-12.099-24.68-23.798-36.731-35.653a18813.486 18813.486 0 0 1-65.086-64.379 58.745 58.745 0 0 1-6.747-8.029C.114 48.352-.913 42.812 1.952 37.895c4.262-7.313 9.073-14.406 14.439-20.942 4.62-5.628 10.347-10.345 15.578-15.472 2.066-2.025 3.648-2.142 5.426.603 15.35 23.683 30.806 47.298 46.221 70.94 11.001 16.872 21.924 33.794 33.021 50.602 2.938 4.449 3.346 8.418 1.396 13.664-2.732 7.351-3.972 15.258-6.071 23.83z"
                            filter="url(#a)"
                        />
                        <foreignObject
                            width={125}
                            height={50}
                            x={10}
                            y={57}
                            transform="rotate(49 55 62.914)"
                        >
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span className="ellipsis" title="Food &amp; Allied Sectors">
                                    {"Food & Allied Sectors"}
                                </span>
                            </div>
                        </foreignObject>
                    </g>
                    <g ref={shapeRefs[6]}
                        data-deg={135}
                        data-id={673}
                        data-shape={7}
                        transform="translate(162 85)"
                    >
                        <path
                            fill='url("#b")'
                            fillRule="evenodd"
                            stroke="#9794AB"
                            strokeOpacity={0.65}
                            d="M67.461 168.627c-4.483-8.597-8.641-16.347-12.599-24.199C37.908 110.797 20.971 77.157 4.12 43.475-1.872 31.497-.796 24.84 10.486 17.719 20.587 11.345 31.801 6.713 42.617 1.508c4.212-2.026 4.939 1.431 5.491 4.319 2.94 15.406 6.046 30.787 8.613 46.257 5.728 34.532 11.193 69.107 16.704 103.673.831 5.212-2.19 8.716-5.964 12.87z"
                            filter="url(#a)"
                        />
                        <foreignObject
                            width={125}
                            height={50}
                            x={20}
                            y={62}
                            transform="rotate(71 55 51.03)"
                        >
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span className="ellipsis" title="Healthcare">
                                    {"Healthcare"}
                                </span>
                            </div>
                        </foreignObject>
                    </g>
                    <g ref={shapeRefs[7]}
                        data-deg={157.5}
                        data-id={510}
                        data-shape={8}
                        transform="translate(245 66)"
                    >
                        <path
                            fill='url("#b")'
                            fillRule="evenodd"
                            stroke="#9794AB"
                            strokeOpacity={0.65}
                            d="M.139 167.804c1.158-21.015 2.537-42.02 3.421-63.046 1.18-28.044 1.88-56.106 2.977-84.154C7.098 6.281 11.813 1.325 26.116.262 33.233-.267 40.425.254 47.583.228c4.299-.016 3.562 2.955 3.153 5.44-1.83 11.123-3.801 22.222-5.709 33.33-3.016 17.566-6.038 35.129-9.029 52.699-2.989 17.564-5.95 35.133-8.903 52.704-.328 1.954-.205 4.046-.864 5.866-.796 2.197-1.687 4.993-3.438 6.099-6.779 4.28-13.916 7.991-20.92 11.915l-1.734-.477z"
                            filter="url(#a)"
                        />
                        <foreignObject
                            width={125}
                            height={50}
                            x={28}
                            y={78}
                            transform="rotate(95 62.5 50.617)"
                        >
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span className="ellipsis" title="IT &amp; BPM">
                                    {"IT & BPM"}
                                </span>
                            </div>
                        </foreignObject>
                    </g>
                    <g ref={shapeRefs[8]}
                        data-deg={180}
                        data-id={511}
                        data-shape={9}
                        transform="translate(284 68)"
                    >
                        <path
                            fill='url("#b")'
                            fillRule="evenodd"
                            stroke="#9794AB"
                            strokeOpacity={0.65}
                            d="M71.343.792c9.639 1.379 20 5.788 30.232 10.552 3.729 1.736 7.355 3.694 11.055 5.494 3.129 1.523 3.444 3.239 1.103 5.986-22.771 26.718-45.469 53.497-68.165 80.279-10.756 12.692-21.416 25.466-32.231 38.109-2.051 2.397-4.406 4.695-7.046 6.361-1.367.863-3.669.241-5.548.291.15-1.584-.023-3.284.499-4.733 11.624-32.267 23.326-64.505 35.008-96.75 3.791-10.464 7.528-20.948 11.361-31.396C51.606 4.097 57.998-.007 71.343.792z"
                            filter="url(#c)"
                        />
                        <foreignObject
                            width={125}
                            height={50}
                            x={25}
                            y={19}
                            transform="rotate(117 55 39.192)"
                        >
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span className="ellipsis" title="Pharmaceuticals">
                                    {"Pharmaceuticals"}
                                </span>
                            </div>
                        </foreignObject>
                    </g>
                    <g ref={shapeRefs[9]}
                        data-deg={202.5}
                        data-id={509}
                        data-shape={10}
                        transform="translate(315 105)"
                    >
                        <path
                            fill='url("#b")'
                            fillRule="evenodd"
                            stroke="#9794AB"
                            strokeOpacity={0.65}
                            d="M151.068 26.11c-10.91 8.853-21.081 17.098-31.242 25.352a373053.268 373053.268 0 0 0-78.823 64.043c-7.581 6.161-10.003 5.901-18.357 1.363-5.247-2.851-11.351-4.123-17.072-6.1-1.38-.478-2.764-.945-4.986-1.704 1.584-1.908 2.58-3.346 3.805-4.549 32.532-31.951 65.038-63.928 97.666-95.782 11.454-11.181 16.636-11.455 29.088-1.224 6.791 5.58 12.899 11.994 19.921 18.601z"
                            filter="url(#c)"
                        />
                        <foreignObject
                            width={125}
                            height={50}
                            x={-10}
                            y={-8}
                            transform="rotate(138 55 35.758)"
                        >
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span className="ellipsis" title="Ports &amp; Shipping">
                                    {"Ports & Shipping"}
                                </span>
                            </div>
                        </foreignObject>
                    </g>
                    <g ref={shapeRefs[10]}
                        data-deg={225}
                        data-id={675}
                        data-shape={11}
                        transform="translate(360 154)"
                    >
                        <path
                            fill='url("#b")'
                            fillRule="evenodd"
                            stroke="#9794AB"
                            strokeOpacity={0.65}
                            d="M15.81 100.456c-1.216-.885-3.291-2.088-4.976-3.698-2.078-1.986-3.679-4.473-5.755-6.46-5.914-5.66-5.712-8.519 1.158-13.206 9.577-6.534 19.211-12.988 28.706-19.64 24.12-16.893 48.175-33.879 72.258-50.825.998-.702 2-1.403 3.019-2.073 8.961-5.894 14.296-5.356 21.792 2.45 9.567 9.964 16.046 21.9 20.96 34.641 4.991 12.944 9.446 26.096 14.035 39.192 1.726 4.925.885 6.537-4.286 7.072-12.097 1.253-24.231 2.149-36.349 3.207-22.425 1.958-44.843 4.019-67.278 5.854-11.662.953-23.358 1.482-35.033 2.283-2.409.165-4.794.688-8.251 1.203z"
                            filter="url(#c)"
                        />
                        <foreignObject
                            width={125}
                            height={50}
                            x={-20}
                            y={-15}
                            transform="rotate(160 55 32.645)"
                        >
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span className="ellipsis" title="Renewable Energy">
                                    {"Renewable Energy"}
                                </span>
                            </div>
                        </foreignObject>
                    </g>
                    <g ref={shapeRefs[11]}
                        data-deg={247.5}
                        data-id={676}
                        data-shape={12}
                        transform="translate(380 265)"
                    >
                        <path
                            fill='url("#b")'
                            fillRule="evenodd"
                            stroke="#9794AB"
                            strokeOpacity={0.65}
                            d="M.127.536C7.857.387 14.98.137 22.103.131 40.38.117 58.657.235 76.935.255 98.41.28 119.885.316 141.36.228c9.817-.041 15.31 3.587 16.204 13.502.951 10.549.219 21.257-.045 31.888-.019.765-2.395 2.299-3.386 2.092-37.659-7.861-75.28-15.904-112.916-23.872-9.075-1.921-18.15-3.895-27.295-5.417C7.824 17.405 3.797 14.739 2.591 8.38 2.144 6.023 1.163 3.767.127.536z"
                            filter="url(#c)"
                        />
                        <foreignObject
                            width={125}
                            height={50}
                            x={-35}
                            y={35}
                            transform="rotate(-175 55 29.345)"
                        >
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span className="ellipsis" title="Retail &amp; E-commerce">
                                    {"Retail & E-commerce"}
                                </span>
                            </div>
                        </foreignObject>
                    </g>
                    <g ref={shapeRefs[12]}
                        data-deg={270}
                        data-id={677}
                        data-shape={13}
                        transform="translate(385 295)"
                    >
                        <path
                            fill='url("#b")'
                            fillRule="evenodd"
                            stroke="#9794AB"
                            strokeOpacity={0.65}
                            d="M147.672 49.702c-.946 12.843-4.436 23.681-9.157 34.173-2.003 4.452-4.177 8.833-5.999 13.356-1.491 3.703-3.153 4.521-6.775 2.133-29.675-19.562-59.452-38.97-89.197-58.426-9.064-5.929-18.008-12.051-27.225-17.73C2.162 18.798 1.051 11.899.881 4.6.798.995 3.134.117 6.539.993c31.986 8.222 63.994 16.363 95.991 24.543 11.059 2.829 22.122 5.642 33.155 8.571 11.731 3.114 11.614 7.441 11.987 15.595z"
                            filter="url(#c)"
                        />
                        <foreignObject
                            width={125}
                            height={50}
                            x={-35}
                            y={11}
                            transform="rotate(-155 55 26.675)"
                        >
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span className="ellipsis" title="Roads &amp; Highways">
                                    {"Roads & Highways"}
                                </span>
                            </div>
                        </foreignObject>
                    </g>
                    <g ref={shapeRefs[13]}
                        data-deg={292.5}
                        data-id={678}
                        data-shape={14}
                        transform="translate(380 325)"
                    >
                        <path
                            fill='url("#b")'
                            fillRule="evenodd"
                            stroke="#9794AB"
                            strokeOpacity={0.65}
                            d="M3.039.348c5.573 5.636 10.757 10.553 15.575 15.806 27.646 30.141 55.192 60.374 82.799 90.549 8.339 9.115 8.382 12.155.072 21.143-1.969 2.128-3.944 4.26-5.771 6.508-2.633 3.237-4.81 2.968-7.179-.37-6.448-9.085-13.011-18.088-19.555-27.104C47.733 77.61 26.499 48.329 5.196 19.1 1.174 13.582-.873 7.954 3.039.348z"
                            filter="url(#c)"
                        />
                        <foreignObject
                            width={125}
                            height={50}
                            x={-45}
                            y={-19}
                            transform="rotate(-130 55 23.005)"
                        >
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span className="ellipsis" title="Telecom">
                                    {"Telecom"}
                                </span>
                            </div>
                        </foreignObject>
                    </g>
                    <g ref={shapeRefs[14]}
                        data-deg={315}
                        data-id={679}
                        data-shape={15}
                        transform="translate(370 345)"
                    >
                        <path
                            fill='url("#b")'
                            fillRule="evenodd"
                            stroke="#9794AB"
                            strokeOpacity={0.65}
                            d="M5.148.627c2.554 4.819 4.637 8.657 6.637 12.539 20.33 39.465 40.647 78.937 60.965 118.408 3.362 6.532 3.213 10.508-2.7 14.864-7.308 5.383-15.333 9.834-23.259 14.314-3.87 2.186-5.769-.311-6.766-4.025a10143.918 10143.918 0 0 0-14.503-53.42C17.258 73.17 9.015 43.027.597 12.933-.799 7.941 1.671 4.916 5.148.627z"
                            filter="url(#c)"
                        />
                        <foreignObject
                            width={125}
                            height={50}
                            x={-62}
                            y={-35}
                            transform="rotate(-111 55 19.69)"
                        >
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span className="ellipsis" title="Textiles &amp; Apparel">
                                    {"Textiles & Apparel"}
                                </span>
                            </div>
                        </foreignObject>
                    </g>
                    <g ref={shapeRefs[15]}
                        data-deg={337.5}
                        data-id={686}
                        data-shape={16}
                        transform="translate(335 364)"
                    >
                        <path
                            fill='url("#b")'
                            fillRule="evenodd"
                            stroke="#9794AB"
                            strokeOpacity={0.65}
                            d="M22.722.622c.734 9.057 1.512 17.372 2.062 25.701 1.495 22.633 2.908 45.272 4.327 67.909 1.181 18.842 2.436 37.68 3.437 56.531.513 9.654-1.839 12.735-11.291 15.335-4.677 1.286-9.485 2.146-14.272 2.972-6.102 1.053-6.879.271-6.601-6.072.55-12.498 1.148-24.993 1.685-37.492A51216.69 51216.69 0 0 0 5.124 53.28c.456-10.969 1.049-21.938 1.2-32.911.082-5.961 2.606-10.144 7.347-13.35 2.765-1.87 5.455-3.848 9.051-6.397z"
                            filter="url(#c)"
                        />
                        <foreignObject
                            width={125}
                            height={50}
                            x={-85}
                            y={-35}
                            transform="rotate(-90 55 15)"
                        >
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span className="ellipsis" title="Tourism &amp; Hospitality">
                                    {"Tourism & Hospitality"}
                                </span>
                            </div>
                        </foreignObject>
                    </g>
                </svg>

            </div>

            <button className="absolute left-[745px] top-[35%] rotate-90 border bg-white p-2 rounded-full" onClick={() => rotateSVG("left")}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                    <path d="M15 19l-7-7 7-7" stroke="black" stroke-width="2" />
                </svg>
            </button>


            <button className="absolute right-[747px] top-[42%] rotate-90 border  bg-white p-2 rounded-full" onClick={() => rotateSVG("right")}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                    <path d="M9 5l7 7-7 7" stroke="black" stroke-width="2" />
                </svg>
            </button>

        </div >
    )
}

export default BoxCircle


