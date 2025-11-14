const no_expense = document.querySelector(".no_expenses_yet");
const add = document.querySelector(".add")
const box = document.querySelector(".box")
const main = document.querySelector(".main")
const categoryInput = document.getElementById("category")
const amountInput = document.getElementById("amount");
const addBtn = document.querySelector(".add_expense");
const dateInput = document.getElementById("date")


// add botton
add.addEventListener("click",function(){
    no_expense.classList.toggle("hidden");
    box.classList.toggle("hidden")
});

let expenses = []
addBtn.addEventListener("click", () => {
    const Category = categoryInput.value;
    const amount = amountInput.value;
    const date = dateInput.value;

    console.log(amount);
    console.log(Category);
    console.log(date);
    
   const expense = {
        category: Category,
        amount: amount,
        date: date
    };

    expenses.push(expense);

    console.log(expenses); 

});

