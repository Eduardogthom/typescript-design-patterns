// BankAccount class
// Depositing and Withdrawing money from the account
// Balance (should not be accessed directly) so this is the encapsulated property

class BankAccount {
    private _balance: number;

    constructor(initialBalance: number) {
        this._balance = initialBalance;
    }

    public get balance(): number {
        return this._balance;
    }

    public deposit(amount: number): void {
        if (amount <= 0) {
            console.log('Deposit amount should be greater than 0');
            return;
        }

        this._balance += amount;
    }

    public withdraw(amount: number): void {
        if (amount <= 0) {
            console.log('Withdraw amount should be greater than 0');
            return;
        }

        if (this._balance < amount) {
            console.log('Insufficient balance');
            return;
        }

        this._balance -= amount;
    }
}

const myAccount = new BankAccount(1000);

myAccount.deposit(500);
myAccount.withdraw(200);

console.log('Current balance', myAccount.balance);