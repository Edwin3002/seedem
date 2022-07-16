import React from 'react'
import { Facebook, Instagram, Painterest, Twitter } from '../icons/socialNetwork'

export const Footer = () => {
    return (
        <div className='containerFoot'>
            <div className='formLink  p-  p-10  w-full lg:mx-auto rounded bg-contain lg:bg-cover bg-no-repeat bg-right-top
            //  bg-[url("https://res.cloudinary.com/edwin3002/image/upload/v1657844422/seedem/bg-boost-mobile_fi9ytz.svg")]
             lg:bg-[url("https://res.cloudinary.com/edwin3002/image/upload/v1657844422/seedem/bg-boost-desktop_zqetfh.svg")]'>
                <h3 className='text-2xl lg:text-4xl font-bold text-center text-white'>Boost your links today</h3>
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
                            <span>Link Shortening</span>
                        </li>
                        <li className='my-2'>
                            <span>Branded Links</span>
                        </li>
                        <li className='my-2'>
                            <span>Analytics</span>
                        </li>
                    </ul>
                    <ul className='textFoot text-center lg:text-left my-4'>
                        <li className='text-white font-bold my-4'>
                            <h5>Resources</h5>
                        </li>
                        <li className='my-2'>
                            <span>Blog</span>
                        </li>
                        <li className='my-2'>
                            <span>Developers</span>
                        </li>
                        <li className='my-2'>
                            <span>Support</span>
                        </li>
                    </ul>
                    <ul className='textFoot text-center lg:text-left my-4'>
                        <li className='text-white hover:text-none font-bold my-4'>
                            <h5>Company</h5>
                        </li>
                        <li className='my-2'>
                            <span>About</span>
                        </li>
                        <li className='my-2'>
                            <span>Our Team</span>
                        </li>
                        <li className='my-2'>
                            <span>Careeers</span>
                        </li>
                        <li className='my-2'>
                            <span>Contact</span>
                        </li>
                    </ul>
                </span>
                <span className='flex mx-auto w-2/3 lg:w-1/3'>
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
