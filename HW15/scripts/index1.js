const formData = {
    fullName: {
        regExp: /^[A-Z][a-z]+\s[A-Z][a-z]+$/,
        errorSelector: '.fullName-error',
        errorMessage: 'Invalid full name!',
        required: true,
    },
    city: {
        regExp: /^(Kyiv|Lviv|Odesa)$/,
        errorSelector: '.city-error',
        errorMessage: 'Please select a valid city!',
        required: true,
    },
    postOffice: {
        regExp: /^[0-9]{1,3}$/,
        errorSelector: '.postOffice-error',
        errorMessage: 'Invalid post office number!',
        required: true,
    },
    payment: {
        regExp: /^(cash|card)$/,
        errorSelector: '.payment-error',
        errorMessage: 'Select a payment method!',
        required: true,
    },
    quantity: {
        regExp: /^[1-9][0-9]*$/,
        errorSelector: '.quantity-error',
        errorMessage: 'Invalid quantity! Must be at least 1.',
        required: true,
    },
};

function showOrderForm(product) {
    const orderInfo = document.querySelector('.order-info');
    orderInfo.classList.remove('hidden');

    orderInfo.innerHTML = `
        <h2>Order details</h2>
        <form name="orderForm">
            <input type="text" name="fullName" placeholder="Full Name" required>
            <span class="error fullName-error"></span>

            <select name="city">
                <option value="">Select city</option>
                <option value="Kyiv">Kyiv</option>
                <option value="Lviv">Lviv</option>
                <option value="Odesa">Odesa</option>
            </select>
            <span class="error city-error"></span>

            <input type="text" name="postOffice" placeholder="Nova Poshta Office" required>
            <span class="error postOffice-error"></span>

            <label><input type="radio" name="payment" value="cash"> Cash on delivery</label>
            <label><input type="radio" name="payment" value="card"> Card payment</label>
            <span class="error payment-error"></span>

            <input type="number" name="quantity" placeholder="Quantity" min="1" required>
            <span class="error quantity-error"></span>

            <textarea name="comment" placeholder="Comment"></textarea>

            <button type="button" class="submit-btn">Confirm Order</button>
        </form>
    `;

    document.querySelector('.submit-btn').addEventListener('click', () => {
        const formElements = {};
        let isValid = validateForm(formElements);

        if (isValid) {
            showOrderConfirmation(product, formElements);
            saveOrder(product, formElements);
        }
    });
}

function validateForm(formElements) {
    let isValid = true;

    for (let key in formData) {
        let value;

        if (key === 'payment') {
            value = document.forms.orderForm.elements[key].value || '';
        } else {
            value = document.forms.orderForm.elements[key].value.trim();
        }

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
    
    if ((formData[key].required && !value) || !value.match(formData[key].regExp)) {
        isValid = false;
        errorElement.textContent = formData[key].errorMessage;
        errorElement.style.color = 'red';
    } else {
        errorElement.textContent = '';
    }

    return isValid;
}

function showOrderConfirmation(product, orderDetails) {
    const orderInfo = document.querySelector('.order-info');
    orderInfo.innerHTML = `
        <h2>Order Confirmed!</h2>
        <p><strong>Product:</strong> ${product.name}</p>
        <p><strong>Price:</strong> $${product.price} x ${orderDetails.quantity}</p>
        <p><strong>Total:</strong> $${product.price * orderDetails.quantity}</p>
        <p><strong>Customer:</strong> ${orderDetails.fullName}</p>
        <p><strong>City:</strong> ${orderDetails.city}</p>
        <p><strong>Post Office:</strong> ${orderDetails.postOffice}</p>
        <p><strong>Payment:</strong> ${orderDetails.payment === 'cash' ? 'Cash on delivery' : 'Card payment'}</p>
    `;
}
