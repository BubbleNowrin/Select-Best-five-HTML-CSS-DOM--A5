
//select the button and add player name in the list
function setNameOnTheList(id) {
    const playerNameElement = getPlayerName(id);
    const selectedPlayerField = document.getElementById('selected-players');

    const li = document.createElement('li');
    li.innerText = playerNameElement;

    //show alert when more than five players selected
    if (selectedPlayerField.childNodes.length >= 5) {
        return alert('You can not add more than Five!');
    }
    selectedPlayerField.appendChild(li);


    //selected button disable 
    if (li.innerText === 'Lionel Messi') {
        const button = document.getElementById('m-btn');
        button.setAttribute('disabled', 'true');
    }
    else if (li.innerText === 'Cristiano Ronaldo') {
        const button = document.getElementById('c-btn');
        button.setAttribute('disabled', 'true');
    }
    else if (li.innerText === 'Kaká') {
        const button = document.getElementById('k-btn');
        button.setAttribute('disabled', 'true');
    }
    else if (li.innerText === 'Kylian Mbappé') {
        const button = document.getElementById('mb-btn');
        button.setAttribute('disabled', 'true');
    }
    else if (li.innerText === 'Neymar jr.') {
        const button = document.getElementById('n-btn');
        button.setAttribute('disabled', 'true');
    }
    else if (li.innerText === 'Ronaldinho') {
        const button = document.getElementById('r-btn');
        button.setAttribute('disabled', 'true');
    }
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
    const expenseElement = document.getElementById(expenseId);
    expenseElement.innerText = newValue;
}

//calculate the player expense
function calculatePlayerExpense(playerFieldId) {
    const perPlayerBudget = getBudgetById(playerFieldId);
    const selectedPlayers = getSelectedPlayers('selected-players');
    const playerExpenseTotal = perPlayerBudget * selectedPlayers;
    return playerExpenseTotal;
}
//get player number from the list
function getSelectedPlayers(selectedPlayersId) {
    const selectedPlayersElement = document.getElementById(selectedPlayersId);
    const selectedPlayers = selectedPlayersElement.childNodes.length;
    return selectedPlayers;
}

document.getElementById('btn-calculate').addEventListener('click', function () {

    //get the player Expense
    const playerExpenseTotal = calculatePlayerExpense('player-field');

    //input Validation
    if (isNaN(playerExpenseTotal) == true) {

        return alert('please enter valid input');

    } else if (playerExpenseTotal < 0) {

        return alert('Input a Positive number');
    }

    //set the calculated expense
    setTextValueById('player-expense', playerExpenseTotal);

})

document.getElementById('btn-calculate-total').addEventListener('click', function () {

    const playerExpenseTotalElement = document.getElementById('player-expense');
    const playerExpenseTotalString = playerExpenseTotalElement.innerText;
    const playerExpenseTotal = parseInt(playerExpenseTotalString);

    if (playerExpenseTotal === 0) {
        return alert('calculate player expenses first');
    }

    //get The Expenses by function
    const managerExpense = getBudgetById('manager-field');
    const coachExpense = getBudgetById('coach-field');

    //input validation
    if (isNaN(playerExpenseTotal) == true || isNaN(managerExpense) == true || isNaN(coachExpense) == true) {

        return alert('please enter valid input');

    } else if (playerExpenseTotal < 0 || managerExpense < 0 || coachExpense < 0) {

        return alert('Input a Positive number');
    }

    //calculate the total expense
    const totalExpenses = playerExpenseTotal + managerExpense + coachExpense;


    //set the total expenses value
    setTextValueById('total-expense', totalExpenses);
})