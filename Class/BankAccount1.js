class BankAccount1 {
    #balance;

    constructor(accountHolder, initialBalance = 0) {
        if (initialBalance < 0) {
            throw new Error('Initial balance cannot be negative.');
        }

        this.accountHolder = accountHolder;
        this.#balance = initialBalance;
    }

    // Deposit funds
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be greater than zero.');
        }
        this.#balance += amount;
        return `Deposited $${amount}. New balance: $${this.#balance}`;
    }

    // Withdraw funds
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be greater than zero.');
        }
        if (amount > this.#balance) {
            throw new Error('Insufficient funds.');
        }
        this.#balance -= amount;
        return `Withdrew $${amount}. New balance: $${this.#balance}`;
    }

    // Get current balance
    getBalance() {
        return `Current balance: $${this.#balance}`;
    }

    // Transfer funds between accounts
    transfer(amount, recipientAccount) {
        if (!(recipientAccount instanceof BankAccount1)) {
            throw new Error('Recipient must be a valid BankAccount1.');
        }
        this.withdraw(amount);
        recipientAccount.deposit(amount);
        return `Transferred $${amount} to ${recipientAccount.accountHolder}.`;
    }

    // Static method: Compare balances
    static compareAccounts(account1, account2) {
        if (!(account1 instanceof BankAccount1) || !(account2 instanceof BankAccount1)) {
            throw new Error('Both accounts must be valid BankAccount1 instances.');
        }

        if (account1.#balance > account2.#balance) {
            return `${account1.accountHolder} has a higher balance.`;
        } else if (account1.#balance < account2.#balance) {
            return `${account2.accountHolder} has a higher balance.`;
        } else {
            return 'Both accounts have the same balance.';
        }
    }
}

// Usage
try {
    const aliceAccount = new BankAccount1('Alice', 100);
    const bobAccount = new BankAccount1('Bob', 200);

    console.log(aliceAccount.deposit(50)); // Deposited $50. New balance: $150
    console.log(aliceAccount.withdraw(30)); // Withdrew $30. New balance: $120
    console.log(aliceAccount.getBalance()); // Current balance: $120

    console.log(aliceAccount.transfer(50, bobAccount)); 
    // Transferred $50 to Bob.

    console.log(BankAccount1.compareAccounts(aliceAccount, bobAccount));
    // Bob has a higher balance.
} catch (error) {
    console.error(error.message); // Handles any errors during transactions
}
