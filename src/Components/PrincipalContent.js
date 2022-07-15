import React from 'react'

export const PrincipalContent = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row my-12 lg:my-20'>
        <div className='flex flex-col mx-4 my-12 lg:my-auto text-center lg:text-left lg:mx-24 '>
            <h2 className='text-6xl font-bold'>
                More than just shorter links
            </h2>
            <p className='my-8'>
                Build your brand's recognition and get detailed insights on how yor links are performing.
            </p>
            <button className='btn w-1/2 lg:w-2/5'>Get Started</button>
        </div>
        <spa className='mx-auto overflow-x-hidden w-full lg:w-1/'>
            <img className='relative object-contain mx-auto py-16 lg:px-8 scale-110 lg:scale-125 xl:scale-100 left-16 sm:left-12 lg:left-8 xl:left-32 2xl:left-64' alt='desktop' src='https://res.cloudinary.com/edwin3002/image/upload/v1657844426/seedem/illustration-working_fotdko.svg' />
        </spa>
    </div>
  )
}
