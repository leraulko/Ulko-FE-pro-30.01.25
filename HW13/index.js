'use strict';

// 13.1. Валідація з RegEx

const formData = {
    userName: {
        regExp: /^[A-Z][a-z]{1,}/,
        errorSelector: '.name-error',
        errorMessage: 'Invalid Name!',
        required: true,
    },
    userMessage: {
        regExp: /\w{5,}/,
        errorSelector: '.message-error',
        errorMessage: 'Your message must be at least 5 symbols long!',
        required: true,
    },
    phone: {
        regExp: /^\+380\d{9}$/,
        errorSelector: '.phone-error',
        errorMessage: 'Invalid phone number! It must start with +380',
        required: true,
    },
    email: {
        regExp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        errorSelector: '.email-error',
        errorMessage: 'Invalid email!',
        required: true,
    }
};

document.querySelector('button').addEventListener('click', () => {
    const formElements = {};
    let isValid = validateForm(formElements);

    if (isValid) {
        showData(formElements);
        clearInputs();
    }
});



function validateForm(formElements) {
    let isValid = true;

    for (let key in formData) {
        const value = document.forms.helpForm.elements[key].value.trim();
        formElements[key] = value;
        
        if (!validateFormValue(key, value)) {
            isValid = false;
        }
    }

    return isValid;
}

function validateFormValue(key, value) {
    let isValid = true;
    const errorElement = document.querySelector(formData[key].errorSelector);
    const inputElement = document.forms.helpForm.elements[key];

    if ((formData[key].required && !value) || !value.match(formData[key].regExp)) {
        isValid = false;

        errorElement.textContent = formData[key].errorMessage;
        errorElement.style.color = 'red';
        inputElement.classList.add('red');
    } else {
        errorElement.textContent = '';
        inputElement.classList.remove('red');
    }

    return isValid;
}

function showData(obj) {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

function clearInputs() {
    document.forms.helpForm.reset();
}