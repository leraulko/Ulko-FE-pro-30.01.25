// 9.1. Дізнатись суму всіх зарплат користувачів:
// Об'єкт може містити невідому кількість департаментів та співробітників

const company = {
    sales: [{
            name: 'John',
            salary: 1000
        },
        {
            name: 'Alice',
            salary: 600
        }
    ],
    development: {
        web: [{
                name: 'Peter',
                salary: 2000
            },
            {
                name: 'Alex',
                salary: 1800
            }
        ],
        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
};
console.log(company);

// Спочатку зробила ось такий варіант, проте, здавалось, що можна його удосконалити.

function getSalaries(obj, employeesSalary = []) {
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            for (let i = 0; i < obj[key].length; i++) {
                employeesSalary.push(obj[key][i].salary);
            }
        } else {
            getSalaries(obj[key], employeesSalary);
        }
    }
    return employeesSalary;
}

let salaries = getSalaries(company);
console.log(salaries);

let sum = salaries.reduce((prevValue, value) => prevValue + value);
console.log(sum);


// Почитала більше про reduce, більше подумала, та з підказками переробила на такий код.

function getSalary(obj) {
    let sum = 0;

    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            sum += obj[key].reduce((value, employee) => value + employee.salary, 0);
        } else {
            sum += getSalary(obj[key]);
        }
    }
    return sum;
}

let sumSalaries = getSalary(company);
console.log(sumSalaries);