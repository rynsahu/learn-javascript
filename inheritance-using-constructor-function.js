function BankAccount(accountHolder) {
    const accountNumber = Math.floor(Math.random()*9999999999999);
    let balance = 0;
  
    this.accountHolder = accountHolder;
  
    this.deposit = function (amount) {
      balance += amount;
      console.log(`Deposited $${amount} successfully! Available balance: $${balance}.`);
    }
  
    this.withdraw = function (amount) {
      if (balance < amount) return console.log(`Sorry can not withdraw $${amount}! Insufficient Balance $${balance}.`);
  
      balance -= amount;
      console.log(`Withdraw $${amount} successfully! Remaining balance: $${balance}.`);
    }
  
    this.getBalance = function() {
      console.log(`Balance of ${this.accountHolder} with account no. ${accountNumber} is $${balance}`);
    }
  }
  
  function SavingsAccount(accountHolder) {
    BankAccount.apply(this, [accountHolder]);
  
    const parentWithdraw = this.withdraw.bind(this);
  
    let maxDepositLimit = 3;
  
    this.withdraw = function(amount) {
      if (maxDepositLimit === 0) return console.log(`Sorry, max withdraw limit of 3 reached to ${maxDepositLimit}.`);
      parentWithdraw(amount);
      --maxDepositLimit;
    }
  }
  SavingsAccount.prototype = Object.create(BankAccount.prototype, { 
    constructor: {
      value: SavingsAccount,
      enumerable: false,
      writeable: true,
      configurable: true,
    } 
  });
  
  function FixedDepositAccount(accountNumber) {
    BankAccount.call(this, accountNumber);
  
    const maturityPeriod = 2;
  
    this.withdraw = function() {
      return console.log(`Sorry, withdraw is not allowed until the maturity period of ${maturityPeriod} months complete.`)
    }
  }
  FixedDepositAccount.prototype = Object.create(BankAccount.prototype);
  FixedDepositAccount.prototype.constructor = FixedDepositAccount;
  
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