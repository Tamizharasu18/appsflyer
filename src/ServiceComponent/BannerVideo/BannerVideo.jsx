import React from 'react'
import ServiceIntro from '../ServiceIntro/ServiceIntro'

const BannerVideo = () => {
    return (
        <div className="">
      <video
        className="w-[100%] h-[100vh] object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    )
}

export default BannerVideo
