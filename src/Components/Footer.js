import React from 'react'
import { Facebook, Instagram, Painterest, Twitter } from '../icons/socialNetwork'

export const Footer = () => {
    return (
        <div className='containerFoot'>
            <div className='formLink  p-4  lg:p-10  w-full lg:mx-auto rounded bg-contain lg:bg-cover bg-no-repeat bg-right-top
            //  bg-[url("https://res.cloudinary.com/edwin3002/image/upload/v1657844422/seedem/bg-boost-mobile_fi9ytz.svg")]
             lg:bg-[url("https://res.cloudinary.com/edwin3002/image/upload/v1657844422/seedem/bg-boost-desktop_zqetfh.svg")]'>
                <h3 className='text-4xl font-bold text-center text-white'>Boost your links today</h3>
                <button className='btn flex mx-auto my-4'>Get Started</button>
            </div>
            <footer className='flex flex-col w-full lg:flex-row justify-around'>
                <span className='flex  mx-auto mt-12 w-1/3  lg:h-1/3'>
                    <img className='mx-auto' alt='Shortly' src='https://res.cloudinary.com/edwin3002/image/upload/v1657900151/seedem/logo-white_rmopzy.svg' />
                </span>
                <span className=' flex flex-col w-full lg:w-1/2 lg:flex-row justify-around'>
                    <ul className='textFoot  text-center lg:text-left my-4'>
                        <li className='text-white font-bold my-4'>
                            <h5>Features</h5>
                        </li>
                        <li className='my-2'>
                            Link Shortening
                        </li>
                        <li className='my-2'>
                            Branded Links
                        </li>
                        <li className='my-2'>
                            Analytics
                        </li>
                    </ul>
                    <ul className='textFoot text-center lg:text-left my-4'>
                        <li className='text-white font-bold my-4'>
                            <h5>Resources</h5>
                        </li>
                        <li className='my-2'>
                            Blog
                        </li>
                        <li className='my-2'>
                            Developers
                        </li>
                        <li className='my-2'>
                            Support
                        </li>
                    </ul>
                    <ul className='textFoot text-center lg:text-left my-4'>
                        <li className='text-white hover:text-none font-bold my-4'>
                            <h5>Company</h5>
                        </li>
                        <li className='my-2'>
                            About
                        </li>
                        <li className='my-2'>
                            Our Team
                        </li>
                        <li className='my-2'>
                            Careeers
                        </li>
                        <li className='my-2'>
                            Contact
                        </li>
                    </ul>
                </span>
                <span className='flex mx-auto w-1/3'>
                    <ul className='flex  mx-auto w-full  lg:w-2/3  justify-between my-4 social'>

                        <li className='my-2'>
                            <Facebook />
                        </li>
                        <li className='my-2'>
                            <Twitter />
                        </li>
                        <li className='my-2'>
                            <Painterest />
                        </li>
                        <li className='my-2'>
                            <Instagram />
                        </li>
                    </ul>
                </span>
            </footer>
        </div>
    )
}
