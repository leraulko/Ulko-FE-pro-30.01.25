'use strict';

// Завдання 1. Кількість замовлень кожного користувача

const ordersCountReduce = orders.reduce((acc, order) => {
    if (!acc.hasOwnProperty(order.user)) {
        acc[order.user] = 0;
    }

    acc[order.user] += 1;

    return acc;
}, {});
console.log(ordersCountReduce);

const ordersCountMap = orders.reduce((acc, order) => {
    if (!acc.has(order.user)) {
        acc.set(order.user, 0);
    }

    acc.set(order.user, acc.get(order.user) + 1);

    return acc;
}, new Map());
console.log(ordersCountMap);


// Завдання 2. Сума замовлень кожного користувача

const countOrdersPrice = orders.reduce((acc, order) => {
    const userPrice = order.items.map(item => item.price).reduce((sum, price) => sum + price);

    if (!acc.hasOwnProperty(order.user)) {
        acc[order.user] = 0;
    }

    acc[order.user] += userPrice;

    return acc;
}, {});
console.log(countOrdersPrice);

const countOrdersPriceMap = new Map(Object.entries(countOrdersPrice));
console.log(countOrdersPriceMap);


// Завдання  3. Унікальні товари

const uniqueItems = new Set(orders.flatMap(order => order.items.map(item => item.name)));
console.log(uniqueItems);


// Завдання 4. Хто витратив більше за всіх?

const spentTheMost = Object.entries(countOrdersPrice).reduce((max, [user, spent]) => {
    return spent > max.spent ? {user, spent} : max;
}, {user: '', spent: 0});

console.log(`User ${spentTheMost.user} spent the most money: ${spentTheMost.spent}$`);