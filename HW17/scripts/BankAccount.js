class BankAccount {
    #balance = 0;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(value) {
        return this.#balance += value;
    }

    withdraw(value) {
        if (this.#balance < value) {
            console.log(`not enough money`);
            return this.#balance;
        }
        return this.#balance -= value;
    }
}


const account1 = new BankAccount(1000);

console.log(account1.getBalance());

account1.deposit(500);

console.log(account1.getBalance());

account1.withdraw(200);

console.log(account1.getBalance());