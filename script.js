let showHeroesBtn = document.getElementById('show-heroes-btn');
let heroesContainer = document.getElementById('heroes-container');
let startFightButton = document.getElementById('start-fight-btn');
let showWinnerDiv = document.getElementById('show-winner');

showHeroesBtn.addEventListener('click', showHeroesContainer);
startFightButton.addEventListener('click', showWinner);

function showHeroesContainer() {
    showHeroesBtn.classList.add("d-none");
    heroesContainer.classList.add("d-flex");
    startFightButton.classList.add("d-block");
}

function showWinner() {
    showWinnerDiv.innerHTML = epicFight.findWinner();
    startFightButton.classList.remove("d-block");
    heroesContainer.classList.remove("d-flex");
    showWinnerDiv.classList.add("d-flex");

}
