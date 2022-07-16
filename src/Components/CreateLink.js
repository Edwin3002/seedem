import React, { useState } from 'react'
import { getUrlShort } from '../helpers/shortCode';
import uuid from 'react-uuid'

export const CreateLink = () => {
    const [urlLong, setUrlLong] = useState('')
    const [listUrls, setListUrls] = useState([])

    const handletSubmit = async (e) => {
        e.preventDefault()
        const urlshort = await  getUrlShort(urlLong);
        console.log(urlshort);
        await addUrls( urlshort.result.full_short_link)
        
    }

    const handleChange = (e) => {
        setUrlLong(e.target.value)
    }

    const addUrls = (short) => {
        setListUrls([...listUrls, {urlL :urlLong, urlS: short, id: uuid()}])
        
    }
    return (
        <div className='py-4 containerForm'>
            <div className='formLink p-4 m-4 lg:p-10  lg:w-4/5 lg:mx-auto rounded bg-contain lg:bg-cover bg-no-repeat bg-right-top
            //  bg-[url("https://res.cloudinary.com/edwin3002/image/upload/v1657844423/seedem/bg-shorten-mobile_pocqzq.svg")]
            lg:bg-[url("https://res.cloudinary.com/edwin3002/image/upload/v1657844422/seedem/bg-shorten-desktop_acxqvi.svg")]'>
                <form className=' flex flex-col lg:flex-row' onSubmit={handletSubmit}>
                    <input className='rounded-lg p-4 m-2 lg:w-3/4 link' type='url' name='urlLong'  placeholder='Shorten a link here' required onChange={handleChange}/>
                    <input className='btn rounded-lg m-2 lg:w-1/4' type='submit' value='Shorten It!' />
                </form>
            </div>
                <div className='mx-auto w-11/12 lg:w-4/5 '>
                    {
                        listUrls.map(url=>(
                            <div key={url.id} className='flex flex-col lg:flex-row rounded-lg bg-white p-4 my-4'>
                                <p className='w-full lg:w-3/6 py-4 textUrlLong border-b-2 lg:border-b-0 border-[hsl(225, 33%, 95%)]'>{url.urlL}</p>
                                <p className='textUrlShort w-2/6 py-4 lg:mx-4 text-left lg:text-right'>{url.urlS}</p>
                                <span className='flex mx-auto w-full lg:w-1/6'>
                                <button className='btn text-center rounded-lg w-full  mx-auto py-'>Copy</button>
                                </span>
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}
