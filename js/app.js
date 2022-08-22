
//select the button and add player name in the list

function setNameOnTheList(id) {
    const playerNameElement = getPlayerName(id);
    const selectedPlayerField = document.getElementById('selected-players');
    const li = document.createElement('li');
    li.innerText = playerNameElement;

    selectedPlayerField.appendChild(li);
}

//get the player name text by id

function getPlayerName(elementId) {
    const playerNameElement = document.getElementById(elementId);
    const playerName = playerNameElement.innerText;
    return playerName;
}

//get budget amount from the input field value

function getBudgetById(budgetId) {
    const budgetElement = document.getElementById(budgetId);
    const budgetString = budgetElement.value;
    const budget = parseInt(budgetString);
    return budget;
}

//set the text element value by id

function setTextValueById(expenseId, newValue) {
    const ExpenseElement = document.getElementById(expenseId);
    ExpenseElement.innerText = newValue;
}

document.getElementById('btn-calculate').addEventListener('click', function () {

    //get player number from the list
    const selectedPlayersElement = document.getElementById('selected-players');
    const selectedPlayers = selectedPlayersElement.childNodes.length;

    //calculate the player expense
    const perPlayerBudget = getBudgetById('player-field');
    const playerExpenseTotal = perPlayerBudget * selectedPlayers;

    setTextValueById('player-expense', playerExpenseTotal);

})

document.getElementById('btn-calculate-total').addEventListener('click', function () {

    const selectedPlayersElement = document.getElementById('selected-players');
    const selectedPlayers = selectedPlayersElement.childNodes.length;

    const perPlayerBudget = getBudgetById('player-field');
    const playerExpenseTotal = perPlayerBudget * selectedPlayers;

    const managerExpense = getBudgetById('manager-field');
    const coachExpense = getBudgetById('coach-field');


    const totalExpenses = playerExpenseTotal + managerExpense + coachExpense;

    setTextValueById('total-expense', totalExpenses);
})