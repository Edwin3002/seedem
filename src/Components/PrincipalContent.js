import React from 'react'

export const PrincipalContent = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row mt-12 lg:my-20'>
        <div className='flex flex-col mx-4 my-12 lg:my-auto text-center lg:text-left lg:mx-24 '>
            <h2 className='text-6xl font-bold textTitle'>
                More than just shorter links
            </h2>
            <p className='my-8 textDescription'>
                Build your brand's recognition and get detailed insights on how yor links are performing.
            </p>
            <button className='btn w-2/3 md:w-1/3 lg:w-2/5 mx-auto lg:mx-0'>Get Started</button>
        </div>
        <span className='mx-auto overflow-hidden w-full '>
            <img className='relative object-contain mx-auto py-6 sm:py-12 lg:py-6 lg:px-10 scale-110 left-16 sm:left-12 lg:left-8 xl:left-32 2xl:left-64' alt='desktop' src='https://res.cloudinary.com/edwin3002/image/upload/v1657844426/seedem/illustration-working_fotdko.svg' />
        </span>
    </div>
  )
}
