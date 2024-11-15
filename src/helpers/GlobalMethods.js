
//check is email valid 
const isEmailValid = (text) => {
    // eslint-disable-next-line
    const email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    return email.test(text);
}

//check if the any field is empty before submiting
const isUserDetailEmpty = (details) => {
    let empty;
    // eslint-disable-next-line
    Object.values(details).map((item, index) => {
        if (item === '' || item === null) {
            console.log(item, 'item')
            empty = {
                ...empty,
                [Object.keys(details)[index]]: true
            }
        }
    })
    if (!isEmailValid(details.email)) {
        empty = {
            ...empty,
            isEmailNotValid: true
        }
    }
    if (!empty) {
        return false
    }
    else {
        return empty
    }
}
//remove the error on the input fields happens after the empty and invalid information
const removeError = (name, details, isEmpty) => {
    let errors = { ...isEmpty }
    // eslint-disable-next-line
    Object.keys(details).map((item, index) => {
        if (name === item) {
            errors = {
                ...errors,
                [Object.keys(details)[index]]: false
            }
        }
    })
    return errors;
}
export {
    isEmailValid,
    isUserDetailEmpty,
    removeError,
}