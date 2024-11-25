import React from 'react'
import Image from 'next/image'

const ServiceIntro = () => {
    return (
        <div className='fixed top-0 left-0 right-0'>
            <div className='flex justify-center pt-[50px]'>
                <Image
                    src={"/service/svgexport-2.svg"}
                    width={100}
                    height={100}
                    alt=''
                    className=''
                />
            </div>
            <h2 className='uppercase tracking-widest text-center pt-[20px] text-[20px] font-serif'>Bali</h2>
            <div className='flex justify-center py-[100px]'>
                <h2 className='text-[60px] font-serif'>Enchanted Land<br /><span className='pl-[50px]'>Bule and Green</span></h2>
            </div>
        </div>
    )
}

export default ServiceIntro
