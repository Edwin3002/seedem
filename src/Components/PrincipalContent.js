import React from 'react'

export const PrincipalContent = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row'>
        <div className='mx-4 my-8 text-center lg:text-left lg:mx-24'>
            <h2 className='text-4xl font-bold'>
                More than just shorter links
            </h2>
            <p className='my-4'>
                Build your brand's recognition and get detailed insights on how yor links are performing.
            </p>
            <button className='btn'>Get Started</button>
        </div>
        <div className='mx-auto'>
            <img src='https://res.cloudinary.com/edwin3002/image/upload/v1657844723/seedem/illustration-working-2_usqusy.svg' />
        </div>
    </div>
  )
}
