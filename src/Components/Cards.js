import React from 'react'

export const Cards = () => {
    return (
        <div className='containerCards relative'>
            <div class="vl">f</div>
            <div className='text-center'>
                <h2 className='text-3xl font-bold'>Advanced Statistics</h2>
                <p className='my-8'>Track how your links are performing across the web with our advanced statistics dashboard</p>
            </div>
            <div className='flex flex-col justify-around flex-wrap w-11/12 mx-auto lg:flex-row items-center my-8 text-center lg:text-left'>
                <div className='bg-white max-w-sm p-8 my-20 lg:mx- relative rounded-md'>
                    <span className='imgCard absolute left-[40%] lg:left-8  mx-auto'>
                        <img src='https://res.cloudinary.com/edwin3002/image/upload/v1657844423/seedem/icon-brand-recognition_nlurxq.svg' alt='brand' />
                    </span>
                    <h3 className='text-2xl font-bold mt-6'>Brand Recognition</h3>
                    <p className='mt-4'>Boost your brand recognition with each clink. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className='bg-white max-w-sm p-8 my-20 lg:mx- relative rounded-md'>
                    <span className='imgCard absolute left-[40%] lg:left-8  mx-auto'>
                        <img src='https://res.cloudinary.com/edwin3002/image/upload/v1657844423/seedem/icon-detailed-records_x0qqxl.svg' alt='brand' />
                    </span>
                    <h3 className='text-2xl font-bold mt-6'>Brand Recognition</h3>
                    <p className='mt-4'>Boost your brand recognition with each clink. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className='bg-white max-w-sm p-8 my-20 lg:mx- relative rounded-md'>
                    <span className='imgCard absolute left-[40%] lg:left-8  mx-auto'>
                        <img src='https://res.cloudinary.com/edwin3002/image/upload/v1657844423/seedem/icon-brand-recognition_nlurxq.svg' alt='brand' />
                    </span>
                    <h3 className='text-2xl font-bold mt-6'>Brand Recognition</h3>
                    <p className='mt-4'>Boost your brand recognition with each clink. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                

            </div>
        </div>
    )
}
