import React from 'react'

export const PrincipalContent = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row'>
        <div className='flex flex-col mx-4 my-12 lg:my-auto text-center lg:text-left lg:mx-24 '>
            <h2 className='text-6xl font-bold'>
                More than just shorter links
            </h2>
            <p className='my-8'>
                Build your brand's recognition and get detailed insights on how yor links are performing.
            </p>
            <button className='btn w-1/2 lg:w-2/5'>Get Started</button>
        </div>
        <spa className='mx-auto'>
            <img src='https://res.cloudinary.com/edwin3002/image/upload/v1657844723/seedem/illustration-working-2_usqusy.svg' />
        </spa>
    </div>
  )
}
