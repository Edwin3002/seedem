import React from 'react'

export const Cards = () => {
    return (
        <div className='containerCards relative pt-16'>
            <div className="vl"></div>
            <div className='text-center mb-12 lg:mb-0'>
                <h2 className='font-bold textTitle text-2xl lg:text-5xl'>Advanced Statistics</h2>
                <p className='my-8 textDescription text-lg lg:text-2xl'>Track how your links are performing across the web with our advanced statistics dashboard</p>
            </div>
            <div className='flex flex-col justify-around flex-wrap w-11/12 mx-auto lg:flex-row items-center py-8 text-center lg:text-left'>
                <div className='bg-white max-w-sm p-8 lg:mb-20  relative rounded-md'>
                    <span className='imgCard absolute left-[40%] lg:left-8  mx-auto'>
                        <img src='https://res.cloudinary.com/edwin3002/image/upload/v1657844423/seedem/icon-brand-recognition_nlurxq.svg' alt='brand' />
                    </span>
                    <h3 className='text-2xl font-bold mt-6 textTitle'>Brand Recognition</h3>
                    <p className='mt-4 textDescription'>Boost your brand recognition with each clink. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className='bg-white max-w-sm p-8 my-20 lg:mb-  relative rounded-md'>
                    <span className='imgCard absolute left-[40%] lg:left-8  mx-auto'>
                        <img src='https://res.cloudinary.com/edwin3002/image/upload/v1657844423/seedem/icon-detailed-records_x0qqxl.svg' alt='brand' />
                    </span>
                    <h3 className='text-2xl font-bold mt-6 textTitle'>Detailed Records</h3>
                    <p className='mt-4 textDescription'>Gain insights into who is clicking your links. Knowing when and where people enage with your content helps inform better decisions.</p>
                </div>
                <div className='bg-white max-w-sm p-8 lg:mt-20 lg:mx- relative rounded-md'>
                    <span className='imgCard absolute left-[40%] lg:left-8  mx-auto'>
                        <img src='https://res.cloudinary.com/edwin3002/image/upload/v1657844424/seedem/icon-fully-customizable_jcmlip.svg' alt='brand' />
                    </span>
                    <h3 className='text-2xl font-bold mt-6 textTitle'>Fully Coustomizable</h3>
                    <p className='mt-4 textDescription'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
            </div>
        </div>
    )
}
