// Level 1

// Create a closure which has one inner function

// Level 2

// Create a closure which has three inner functions

// Level 3

// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner 
// variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and 
// accountBalance inner functions. Incomes is a set of incomes and its description and 
// expenses is also a set of expenses and its description.



function outer() {
    let innerVariable = "Hello, it js!";
    
    function inner() {
      console.log(innerVariable);
    }
    
    return inner;
  }
  
  const innerFunc = outer();
  innerFunc(); 

  function outer() {
    let outerVariable = "Hello, World!";
    
    function inner1() {
      console.log("Inner function 1");
    }
    
    function inner2() {
      console.log("Inner function 2");
    }
    
    function inner3() {
      console.log("Inner function 3");
    }
    
    return { inner1, inner2, inner3 };
  }
  
  const innerFuncs = outer();
  innerFuncs.inner1(); 
  innerFuncs.inner2(); 
  innerFuncs.inner3(); 

  function personAccount(firstname, lastname) {
    let incomes = {};
    let expenses = {};
    
    function totalIncome() {
      let total = 0;
      for (let income in incomes) {
        total += incomes[income];
      }
      return total;
    }
    
    function totalExpense() {
      let total = 0;
      for (let expense in expenses) {
        total += expenses[expense];
      }
      return total;
    }
    
    function accountInfo() {
      console.log(`Account Information: ${firstname} ${lastname}`);
      console.log(`Total Income: ${totalIncome()}`);
      console.log(`Total Expense: ${totalExpense()}`);
      console.log(`Account Balance: ${totalIncome() - totalExpense()}`);
    }
    
    function addIncome(income, amount) {
      incomes[income] = amount;
    }
    
    function addExpense(expense, amount) {
      expenses[expense] = amount;
    }
    
    function accountBalance() {
      return totalIncome() - totalExpense();
    }
    
    return { totalIncome, totalExpense, accountInfo, addIncome, addExpense, accountBalance };
  }
  
  const account = personAccount("Will", "Smith");
  account.addIncome("Salary", 10000);
  account.addIncome("Investment", 2000);
  account.addExpense("Rent", 2000);
  account.addExpense("Food", 1500);
  account.accountInfo();