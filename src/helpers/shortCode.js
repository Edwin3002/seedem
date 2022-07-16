const shortUrl = 'https://api.shrtco.de/v2/shorten?url='

export const  getUrlShort = async (urlLong)=>{
    const res = await fetch(shortUrl + urlLong);
    const data = await res.json()
    return data
}