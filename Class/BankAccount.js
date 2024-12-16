class BankAccount {
    constructor(accountHolder, balance = 0) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Insufficient funds.');
        } else {
            this.balance -= amount;
            console.log(`Withdraw $${amount}. New balance: $${this.balance}`);
        }
    }

    getBalance() {
        return `Current balance: $${this.balance}`;
    }
}

// Usage
const account = new BankAccount('Alice', 100);
account.deposit(50); // Output: Deposited $50. New balance: $150
account.withdraw(30); // Output: Withdrew $30. New balance: $120
console.log(account.getBalance()); // Output: Current balance: $120
