function setNameOnTheList(id) {
    const playerNameElement = getPlayerName(id);


    const selectedPlayerField = document.getElementById('selected-players');
    const li = document.createElement('li');
    li.innerText = playerNameElement;

    selectedPlayerField.appendChild(li);
}

function getPlayerName(elementId) {
    const playerNameElement = document.getElementById(elementId);
    const playerName = playerNameElement.innerText;
    return playerName;
}

document.getElementById('btn-calculate').addEventListener('click', function () {

    const perPlayerBudgetElement = document.getElementById('player-field');
    const perPlayerBudgetString = perPlayerBudgetElement.value;
    const perPlayerBudget = parseInt(perPlayerBudgetString);

    const selectedPlayersElement = document.getElementById('selected-players');
    const selectedPlayers = selectedPlayersElement.childNodes.length;

    const playerExpenseTotal = perPlayerBudget * selectedPlayers;

    const playerExpenseElement = document.getElementById('player-expense');
    playerExpenseElement.innerText = playerExpenseTotal;


})

document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const perPlayerBudgetElement = document.getElementById('player-field');
    const perPlayerBudgetString = perPlayerBudgetElement.value;
    const perPlayerBudget = parseInt(perPlayerBudgetString);

    const selectedPlayersElement = document.getElementById('selected-players');
    const selectedPlayers = selectedPlayersElement.childNodes.length;

    const playerExpenseTotal = perPlayerBudget * selectedPlayers;

    const managerExpenseElement = document.getElementById('manager-field');
    const managerExpenseString = managerExpenseElement.value;
    const managerExpense = parseInt(managerExpenseString);

    const coachExpenseElement = document.getElementById('coach-field');
    const coachExpenseString = coachExpenseElement.value;
    const coachExpense = parseInt(coachExpenseString);

    const totalExpenses = playerExpenseTotal + managerExpense + coachExpense;

    const totalExpenseElement = document.getElementById('total-expense');
    totalExpenseElement.innerText = totalExpenses;
})