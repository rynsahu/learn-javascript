class BankAccount {
    accountHolder;
    accountNumber;
    balance = 0;
  
    constructor(accountHolder) {
      this.accountHolder = accountHolder;
      this.accountNumber = Math.floor(Math.random()*9999999999999);
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited $${amount} successfully! Available balance: $${this.balance}.`);
    }
  
    withdraw(amount) {
      if (this.balance < amount) return console.log(`Sorry can not withdraw $${amount}! Insufficient Balance $${this.balance}.`);
  
      this.balance -= amount;
      console.log(`Withdraw $${amount} successfully! Remaining balance: $${this.balance}.`);
    }
  
    getBalance() {
      console.log(`Balance: $${this.balance}`);
    }
  }
  
  class SavingsAccount extends BankAccount {
    interestRate = 5;
    maxDepositLimit = 3;
  
    constructor(accountHolder) {
      super(accountHolder);
    }
  
    withdraw(amount) {
      if (this.maxDepositLimit === 0) return console.log(`Sorry, max withdraw limit of 3 reached to ${this.maxDepositLimit}.`);
      super.withdraw(amount);
      --this.maxDepositLimit;
    }
  }
  
  class FixedDepositAccount extends BankAccount {
    maturityPeriod = 2;
  
    constructor(accountHolder) {
      super(accountHolder);
    }
  
    withdraw() {
      return console.log(`Sorry, withdraw is not allowed until the maturity period of ${this.maturityPeriod} months complete.`)
    }
  }
  
  // const aryanAccount = new BankAccount('Aryan');
  
  // aryanAccount.getBalance();
  // aryanAccount.deposit(10);
  // aryanAccount.deposit(30);
  // aryanAccount.withdraw(5);
  // aryanAccount.withdraw(36);
  
  // console.log(`==================================================_aryanAccount:`, aryanAccount);
  
  // const krishnaAccount = new BankAccount('Krishna');
  
  // krishnaAccount.getBalance();
  // krishnaAccount.deposit(50);
  // krishnaAccount.deposit(5);
  // krishnaAccount.withdraw(5);
  // krishnaAccount.withdraw(60);
  
  // console.log(`==================================================_krishnaAccount:`, krishnaAccount);
  
  // const rohitAccount = new SavingsAccount('Rohit');
  
  // rohitAccount.getBalance();
  // rohitAccount.deposit(50);
  // rohitAccount.deposit(5);
  // rohitAccount.withdraw(5);
  // rohitAccount.withdraw(10);
  // rohitAccount.withdraw(10);
  // rohitAccount.withdraw(10);
  
  // console.log(`==================================================_rohitAccount:`, rohitAccount);
  
  const mohitAccount = new FixedDepositAccount('Mohit');
  
  mohitAccount.getBalance();
  mohitAccount.deposit(50);
  mohitAccount.deposit(5);
  mohitAccount.withdraw(5);
  
  console.log(`==================================================_mohitAccount:`, mohitAccount);