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
