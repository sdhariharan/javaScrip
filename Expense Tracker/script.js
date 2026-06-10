// ============================
// Expense Tracker
// ============================

const expenses = [
    {
        id: 1,
        title: "Food",
        amount: 500
    },
    {
        id: 2,
        title: "Travel",
        amount: 1200
    },
    {
        id: 3,
        title: "Movie",
        amount: 300
    },
    {
        id: 4,
        title: "Food",
        amount: 700
    },
    {
        id: 5,
        title: "Shopping",
        amount: 2500
    }
];


// ==================================
// 1. Show All Expenses
// ==================================

console.log("===== ALL EXPENSES =====");

expenses.forEach(expense => {
    console.log(
        `ID: ${expense.id} | Category: ${expense.title} | Amount: ₹${expense.amount}`
    );
});


// ==================================
// 2. Get All Categories
// ==================================

console.log("\n===== ALL CATEGORIES =====");

const categories = expenses.map(expense => expense.title);

console.log(categories);


// ==================================
// 3. Increase Every Expense By ₹100
// ==================================

console.log("\n===== UPDATED EXPENSES =====");

const updatedExpenses = expenses.map(expense => {
    return {
        ...expense,
        amount: expense.amount + 100
    };
});

console.log(updatedExpenses);


// ==================================
// 4. Show Food Expenses
// ==================================

console.log("\n===== FOOD EXPENSES =====");

const foodExpenses = expenses.filter(
    expense => expense.title === "Food"
);

console.log(foodExpenses);


// ==================================
// 5. Show Expenses Greater Than ₹1000
// ==================================

console.log("\n===== EXPENSES > ₹1000 =====");

const bigExpenses = expenses.filter(
    expense => expense.amount > 1000
);

console.log(bigExpenses);


// ==================================
// 6. Find Expense By ID
// ==================================

console.log("\n===== FIND EXPENSE ID 3 =====");

const expenseById = expenses.find(
    expense => expense.id === 3
);

console.log(expenseById);


// ==================================
// 7. Find Travel Expense
// ==================================

console.log("\n===== FIND TRAVEL EXPENSE =====");

const travelExpense = expenses.find(
    expense => expense.title === "Travel"
);

console.log(travelExpense);


// ==================================
// 8. Print Only Titles
// ==================================

console.log("\n===== TITLES =====");

expenses
    .map(expense => expense.title)
    .forEach(title => console.log(title));


// ==================================
// 9. Food Expenses Above ₹600
// ==================================

console.log("\n===== FOOD > ₹600 =====");

const premiumFoodExpenses = expenses
    .filter(expense => expense.title === "Food")
    .filter(expense => expense.amount > 600);

console.log(premiumFoodExpenses);


// ==================================
// 10. Get All IDs
// ==================================

console.log("\n===== ALL IDS =====");

const ids = expenses.map(
    expense => expense.id
);

console.log(ids);


// ==================================
// 11. Search Expense By Amount
// ==================================

console.log("\n===== FIND ₹2500 EXPENSE =====");

const searchAmount = expenses.find(
    expense => expense.amount === 2500
);

console.log(searchAmount);


// ==================================
// 12. Create Expense Summary
// ==================================

console.log("\n===== EXPENSE SUMMARY =====");

const summary = expenses.map(expense => {
    return `${expense.title} -> ₹${expense.amount}`;
});

console.log(summary);


// ==================================
// 13. Show Affordable Expenses
// ==================================

console.log("\n===== AFFORDABLE (< ₹1000) =====");

const affordableExpenses = expenses.filter(
    expense => expense.amount < 1000
);

console.log(affordableExpenses);


// ==================================
// 14. Add GST (18%)
// ==================================

console.log("\n===== GST INCLUDED =====");

const gstExpenses = expenses.map(expense => {
    return {
        ...expense,
        amount: expense.amount * 1.18
    };
});

console.log(gstExpenses);


// ==================================
// 15. Display Final Report
// ==================================

console.log("\n===== FINAL REPORT =====");

expenses.forEach(expense => {
    console.log(
        `Expense #${expense.id} | ${expense.title} | ₹${expense.amount}`
    );
});