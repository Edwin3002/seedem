import React from 'react'

export const PrincipalContent = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row'>
        <div className='mx-auto my-8'>
            <h2 className='text-2xl font-bold'>
                More than just shorter links
            </h2>
            <p>
                Build your brand's recognition and get detailed insights on how yor links are performing
            </p>
            <button className='btn'>Get Started</button>
        </div>
        <div className='mx-auto'>
            <img src='https://res.cloudinary.com/edwin3002/image/upload/v1657844723/seedem/illustration-working-2_usqusy.svg' />
        </div>
    </div>
  )
}
