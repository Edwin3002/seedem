import React from 'react'

export const Navb = () => {
    return (
        <nav className='flex justify-around my-8'>
            <div className='flex w-full xl:hidden '>
                <ul className='flex w-10/12 mx-auto justify-between items-center'>
                    <li>
                        <img className='mx-auto' alt='Shortly' src='https://res.cloudinary.com/edwin3002/image/upload/v1657844426/seedem/logo_jgfdfh.svg' />
                    </li>
                    <li>
                        <img className='mx-auto' alt='Shortly' src='https://res.cloudinary.com/edwin3002/image/upload/v1657905135/seedem/ham_nurjku.svg' />
                    </li>
                </ul>
            </div>
            <div className='hidden w-1/3 xl:flex '>
                <ul className='flex w-full justify-between items-center text-navBar font-bold'>
                    <li>
                        <img className='mx-auto' alt='hamburger' src='https://res.cloudinary.com/edwin3002/image/upload/v1657844426/seedem/logo_jgfdfh.svg' />
                    </li>
                    <li>
                        <a href='#'>Features</a>
                    </li>
                    <li>
                        <a href='#'>Pricing</a>
                    </li>
                    <li>
                        <a href='#'>Resourses</a>
                    </li>
                </ul>
            </div>
            <div className='hidden w-1/6 xl:flex '>
                <ul className='flex w-full justify-between items-center text-navBar font-bold'>
                    <li>
                        <a href='#'>Login</a>
                    </li>
                    <li>
                        <button  href='#' className='btn'>Sign Up</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
