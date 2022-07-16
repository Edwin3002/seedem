import React, { useState } from 'react'
import { handleCopy } from '../helpers/copy';

export const CardsUrl = ({ data }) => {
    const [copy, setCopy] = useState(true)

    const copyUrl = (url)=>{
        handleCopy(url);
        setCopy(!copy)
        setTimeout(()=>{
            setCopy(true)
        }, 2000)
    }
    return (
        <div  className='flex flex-col lg:flex-row rounded-lg bg-white p-4 mt-8'>
            <p className='w-full lg:w-3/6 pb-4 textUrlLong '>{data.urlL}</p>
            <hr className='lg:hidden'/>
            <p className='textUrlShort w-2/6 py-4 lg:mx-4 text-left lg:text-right'>{data.urlS}</p>
            <span className='flex mx-auto w-full lg:w-1/6'>
                <button className={` ${copy ? 'btn': 'btn2'} text-center rounded-lg w-full  mx-auto`} onClick={() => copyUrl(data.urlS)}>{copy? 'Copy': 'Copied!'}</button>
            </span>
        </div>
    )
}
