'use strict';

// 10.3 Створіть об'єкт, який матиме одну властивість з масивом об'єктів. Які представляють контакти у вашій контактній книзі. Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. 
// Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

const myPhone = {
    name: 'Lera',
    age: 23,
    contacts: [{
            name: 'Mom',
            phone: 380502771234,
            email: 'momemail@gmail.com'
        },
        {
            name: 'Dad',
            phone: 380507336212,
            email: 'dademail@gmail.com'
        },
        {
            name: 'Yevheniia',
            phone: 380503321535,
            email: 'yevheniiaemail@gmail.com'
        },
        {
            name: 'Natalya',
            phone: 380503221234,
            email: 'natalyaemail@gmail.com'
        }
    ],

    findContact(name) {
        const contact = this.contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
        return contact ? contact : 'Not found';
    },

    addNewContact(name, phone, email) {
        if (!name || !phone || !email) {
            alert('All fields are required!');
        } else {
            this.contacts.push({name, phone, email});
        }
        return this.contacts;
    }
};

console.log(myPhone.findContact('natalya'));

console.log(myPhone.addNewContact('Bro', 380501234567, 'broemail@gmail.com'));