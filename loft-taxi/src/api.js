export const serverLogin = async (email, password) => {
    let object = {
        email: email, 
        password: password
    }
    return fetch(`https://loft-taxi.glitch.me/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    }
    ).then(res => res.json()).then(data => data.success)
}

export const serverRegister = async (email, password, name, surname) => {
    let object = {
        email: email, 
        password: password,
        name: name, 
        surname: surname
    }
    return fetch(`https://loft-taxi.glitch.me/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    }
    ).then(res => res.json()).then(data => data.success)
}

export const serverSendCard = async (cardOwnerName, cardNumber, cardDate, cardCVC) => {
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ))
        return matches ? decodeURIComponent(matches[1]) : undefined
    }

    let object = {
        cardNumber: cardNumber,
        expiryDate: cardDate,
        cardName: cardOwnerName,
        cvc: cardCVC,
        token: getCookie('token')
    }

    fetch(`https://loft-taxi.glitch.me/card`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
}

export const serverGetAddress = async () => {
    let url = fetch(`https://loft-taxi.glitch.me/addressList`).then((res) => res.json())
    .then( (data) => localStorage.addresses = data.addresses)
    return url
}

export const serverGetRoute = async (address1, address2) => {
    localStorage.removeItem('route')
    let url = fetch(`https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`).then((res) => res.json())
    .then( (data) => localStorage.route = data)
    return url
}


