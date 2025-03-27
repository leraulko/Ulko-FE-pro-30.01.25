function saveOrder(product, orderDetails) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = {
        date: new Date().toLocaleString(),
        productName: product.name,
        price: product.price,
        quantity: orderDetails.quantity,
        total: product.price * orderDetails.quantity,
        customer: orderDetails.fullName,
        city: orderDetails.city,
        postOffice: orderDetails.postOffice,
        payment: orderDetails.payment,
    };
    
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
}


document.querySelector('.orders-page-btn').addEventListener('click', showOrdersPage);

function showOrdersPage() {
    const parent = document.body;
    parent.innerHTML = `
        <button type="button" class="back-btn">Back</button>
        <h2>My orders</h2>
        <div class="orders-list">${showOrders()}</div>
    `;

    document.querySelector('.back-btn').addEventListener('click', () => location.reload());
}

function showOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    if (orders.length === 0) {
        return '<p>No orders yet!</p>';
    } else {
        let ordersList = '<ul>';
        orders.forEach((order, index) => {
            ordersList += `
                <li>
                    <strong>${order.date}</strong> - ${order.productName} - $${order.price} 
                    <button class='details-order' data-index='${index}'>Details</button>
                    <button class='delete-order' data-index='${index}'>Delete</button>
                </li>
            `;
        });
        ordersList += '</ul>';
        return ordersList;
    }
}

function deleteOrder(index) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(orders));
    showOrdersPage();
}

function showOrderDetails(index) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const order = orders[index];

    document.body.innerHTML = `
        <h2>Order Details</h2>
        <p><strong>Product:</strong> ${order.productName}</p>
        <p><strong>Price:</strong> $${order.price}</p>
        <p><strong>Quantity:</strong> ${order.quantity}</p>
        <p><strong>Total:</strong> $${order.price * order.quantity}</p>
        <p><strong>Date:</strong> ${order.date}</p>
        <button class='back-btn'>Back</button>
    `;

    document.querySelector('.back-btn').addEventListener('click', showOrdersPage);
}

document.body.addEventListener('click', (event) => {
    const target = event.target.closest('button');
    if (!target) return;

    const index = target.getAttribute('data-index');
    if (target.classList.contains('delete-order')) {
        deleteOrder(index);
    } else if (target.classList.contains('details-order')) {
        showOrderDetails(index);
    }
});