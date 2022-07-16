export const verifyLocalStorage = () => {
    const localS = localStorage.getItem('links');
    if (localS === null) {
        localStorage.setItem('links', []);
    } else if (localS === '') {
        return 
    } else {
        const localS = JSON.parse(localStorage.getItem('links'));
        return localS

    }
}

export const addLocalStorage = (data) => {
    localStorage.setItem('links', JSON.stringify(data));
}

export const emptyLocalStorage = () =>{
    localStorage.setItem('links', []);
}