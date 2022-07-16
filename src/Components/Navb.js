import React, { useState } from 'react'

export const Navb = () => {
    const [navB, setNavB] = useState(false)
    return (
        <nav className='flex justify-around pb-8'>
            <div className='flex flex-col w-full xl:hidden fixed z-20 bg-white py-4'>
                <ul className='flex w-10/12 mx-auto justify-between items-center'>
                    <li>
                        <img className='mx-auto' alt='Shortly' src='https://res.cloudinary.com/edwin3002/image/upload/v1657844426/seedem/logo_jgfdfh.svg' />
                    </li>
                    <li>
                        <img onClick={()=>setNavB(!navB)} className='mx-auto' alt='Shortly' src='https://res.cloudinary.com/edwin3002/image/upload/v1657905135/seedem/ham_nurjku.svg' />
                    </li>
                </ul>
                {navB ? <div className='flex justify-center w-full xl:flex mx-auto navbMobile mt-4'>
                    <ul className='flex flex-col text-center absolute  mx-auto w-11/12 py-4  font-bold navBarMobile rounded-xl'>
                        <li >
                            <a onClick={()=>setNavB(!navB)} href='#'>Features</a>
                        </li>
                        <li>
                            <a onClick={()=>setNavB(!navB)} href='#'>Pricing</a>
                        </li>
                        <li className='w-4/5 my-0 pb-8 border-b-2 lg:border-b-0 border-[hsl(225, 33%, 95%)]'>
                            <a onClick={()=>setNavB(!navB)} href='#'>Resourses</a>
                        </li>
                        <li>
                            <a onClick={()=>setNavB(!navB)} href='#'>Login</a>
                        </li>
                        <li className='w-4/5 text-center'>
                            <button onClick={()=>setNavB(!navB)} href='#' className='btn  w-full'>Sign Up</button>
                        </li>
                    </ul>
                </div> :
                    null}
            </div>
            <div className='hidden w-1/3 xl:flex xl:py-8'>
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
                        <button href='#' className='btn'>Sign Up</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
