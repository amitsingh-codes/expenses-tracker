const no_expense = document.querySelector(".no_expenses_yet");
const add = document.querySelector(".add")

add.addEventListener("click",function(){
    no_expense.classList.add("hidden");
})