import React from 'react'

export const CreateLink = () => {

    const handletSubmit = (e) => {
        e.preventDefault()
        console.log('send');
    }
    return (
        <div className='py-12 containerForm'>
            <div className='formLink p-4 m-4 lg:p-10  lg:w-4/5 lg:mx-auto rounded bg-contain lg:bg-cover bg-no-repeat bg-right-top
            //  bg-[url("https://res.cloudinary.com/edwin3002/image/upload/v1657844423/seedem/bg-shorten-mobile_pocqzq.svg")]
            lg:bg-[url("https://res.cloudinary.com/edwin3002/image/upload/v1657844422/seedem/bg-shorten-desktop_acxqvi.svg")]'>
                <form className=' flex flex-col lg:flex-row' onSubmit={handletSubmit}>
                    <input className='rounded-lg p-4 m-2 lg:w-3/4' type='text' placeholder='Shorten a link here' />
                    <input className='btn rounded-lg m-2 lg:w-1/4' type='submit' value='Shorten It!' />
                </form>
            </div>
        </div>
    )
}
