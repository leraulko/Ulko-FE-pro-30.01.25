function showCategories() {
    const parent = document.querySelector('.categories > div');

    categories.forEach(category => {
        const categoryElement = document.createElement('p');

        categoryElement.textContent = category.name;
        categoryElement.setAttribute('data-category-id', category.id);
        categoryElement.classList.add('category-item');

        parent.appendChild(categoryElement);
    });
}

function showProducts(products, categoryId) {
    const parent = document.querySelector('.products > div');
    parent.innerHTML = '';
    parent.setAttribute('data-category-id', categoryId);


    products.forEach(product => {
        const productsElement = document.createElement('p');

        productsElement.textContent = product.name;
        productsElement.setAttribute('data-product-id', product.id);
        productsElement.classList.add('product-item');

        parent.appendChild(productsElement);
    });
}

function showProductInfo(product) {
    const parent = document.querySelector('.information > div');
    parent.innerHTML = '';

    const productDetails = document.createElement('div');
    productDetails.innerHTML = `<strong>${product.name }</strong> <br> $${product.price} <br>${product.description}`;

    const buyBtn = document.createElement('button');
    buyBtn.textContent = 'Buy';
    buyBtn.classList.add('buy-btn');

    buyBtn.addEventListener('click', () => {
        showOrderForm(product);
    });
    
    // buyBtn.addEventListener('click', () => {
    //     document.querySelector('.order-info').textContent = `Congrats! You bought ${product.name} for $${product.price}`;
    //     document.querySelector('.order-info').classList.remove('hidden');
    // });

    parent.appendChild(productDetails);
    parent.appendChild(buyBtn);
}


document.addEventListener('DOMContentLoaded', showCategories);


document.querySelector('.categories').addEventListener('click', (event) => {
    if (!event.target.classList.contains('category-item')) {
        return;
    }

    const categoryId = event.target.getAttribute('data-category-id');

    const selectedCategory = categories.find(category => category.id == categoryId);
    if (!selectedCategory) {
        return;
    }

    document.querySelector('.information > div').innerHTML = '';
    document.querySelector('.order-info').classList.add('hidden');

    showProducts(selectedCategory.products, categoryId);
});

document.querySelector('.products').addEventListener('click', (event) => {
    document.querySelector('.order-info').classList.add('hidden');
    
    if (!event.target.classList.contains('product-item')) {
        return;
    }
    const categoryId = event.target.closest('div').getAttribute('data-category-id');
    const productId = event.target.getAttribute('data-product-id');

    const selectedProduct = categories.find(category => category.id == categoryId).products.find(product => product.id == productId);

    if (!selectedProduct) {
        return;
    }

    showProductInfo(selectedProduct)
});