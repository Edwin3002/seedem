import React, { useEffect, useState } from 'react'
import { getUrlShort } from '../helpers/shortCode';
import uuid from 'react-uuid'
import { CardsUrl } from './CardsUrl';
import { addLocalStorage, emptyLocalStorage, verifyLocalStorage } from '../helpers/localStorage';

export const CreateLink = () => {
    const [urlLong, setUrlLong] = useState('')
    let formLinks = document.getElementById('formLinks')
    const [listUrls, setListUrls] = useState([])

    const handletSubmit = async (e) => {
        e.preventDefault();
        const urlshort = await getUrlShort(urlLong);
        await addUrls(urlshort.result.full_short_link);
    }

    const handleChange = (e) => {
        setUrlLong(e.target.value);
    }

    const addUrls = (short) => {
        const data = [...listUrls, { urlL: urlLong, urlS: short, id: uuid() }]
        setListUrls(data);
        addLocalStorage(data);
        formLinks.reset();
    }

    const deleteLocalStorage = () => {
        emptyLocalStorage();
        setListUrls([])
    }

    useEffect(() => {
        const verify = verifyLocalStorage()
        if (verify !== undefined) {
            setListUrls(verify)
        }
    }, [])


    return (
        <div className='containerCardsUrl'>

            <div className='py-4 containerForm'>
                <div className='formLink p-4 m-4 lg:p-10  lg:w-4/5 lg:mx-auto rounded bg-contain lg:bg-cover bg-no-repeat bg-right-top
            //  bg-[url("https://res.cloudinary.com/edwin3002/image/upload/v1657844423/seedem/bg-shorten-mobile_pocqzq.svg")]
            lg:bg-[url("https://res.cloudinary.com/edwin3002/image/upload/v1657844422/seedem/bg-shorten-desktop_acxqvi.svg")]'>
                    <form id='formLinks' className=' flex flex-col lg:flex-row' onSubmit={handletSubmit}>
                        <input className='rounded-lg p-4 m-2 lg:w-3/4 link' type='url' name='urlLong' placeholder='Shorten a link here' required onChange={handleChange} />
                        <input className='btn rounded-lg m-2 lg:w-1/4' type='submit' value='Shorten It!' />
                    </form>
                </div>
            </div>
            <div className='mx-auto w-11/12 lg:w-4/5 containerCardsUrl'>
                {listUrls ?
                    listUrls.map(url => (
                        <CardsUrl data={url} key={url.id} />
                    )) :
                    null
                }
                <span className='flex mx-auto w-full'>
                    {listUrls[0] ?
                        <button className='btnEmpty w-2/3 md:w-1/3 lg:w-2/5 mx-auto mt-16' onClick={deleteLocalStorage}>Delete All Urls</button>
                        :
                        null
                    }
                </span>
            </div>
        </div>
    )
}
