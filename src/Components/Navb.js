import React from 'react'

export const Navb = () => {
    return (
        <nav className='flex justify-around my-8'>
            <div className='flex w-1/3 lg:hidden '>
                <ul className='flex w-full justify-between items-center'>
                    <li>
                        <h2 className='text-2xl font-bold'>Shortly</h2>
                    </li>
                    <li>
                        <a>navbar</a>
                    </li>

                </ul>
            </div>
            <div className='hidden w-1/3 lg:flex '>
                <ul className='flex w-full justify-between items-center'>
                    <li>
                        <h2 className='text-2xl font-bold'>Shortly</h2>
                    </li>
                    <li>
                        <a>Features</a>
                    </li>
                    <li>
                        <a>Pricing</a>
                    </li>
                    <li>
                        <a>Resourses</a>
                    </li>
                </ul>
            </div>
            <div className='hidden w-1/6 lg:flex '>
                <ul className='flex w-full justify-between items-center'>
                    <li>
                        <a>Login</a>
                    </li>
                    <li>
                        <a className='btn'>Sign Up</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
